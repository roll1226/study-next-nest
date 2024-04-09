import type { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from "dotenv";
dotenv.config();

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT]: {
        headers: {
          "x-hasura-admin-secret":
            process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET,
        },
      },
    },
  ],
  documents: "src/**/*.gql",
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
  generates: {
    "src/types/graphql.gen.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        enumsAsTypes: true,
        namingConvention: "keep",
        avoidOptionals: true,
        scalars: {
          BigInt: " string",
          ISO8601Date: "string",
          ISO8601DateTime: "string",
        },
      },
    },
    "src/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".gen.ts",
        baseTypesPath: "types/graphql.gen.ts",
      },
      plugins: ["typescript-operations", "typescript-react-apollo"],
      config: {
        gqlImport: "@apollo/client#gql",
        constEnums: true,
        reactApolloVersion: 3,
        withComponent: false,
        withHOC: false,
        withHooks: true,
        enumsAsTypes: true,
        namingConvention: "keep",
        avoidOptionals: true,
      },
    },
  },
};

export default config;
