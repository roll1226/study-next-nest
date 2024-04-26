# Move to repository root
cd "$(git rev-parse --show-toplevel)" && echo "\033[32mMoved:\033[m Repository Root"

cp ./envs/.env.development.local ./frontend/.env && echo "\033[32mCreated:\033[m frontend/.env"
cp ./envs/.env.development.local ./backend/.env && echo "\033[32mCreated:\033[m backend/.env"
touch ./hasura/.env && echo "$(grep ^HASURA_GRAPHQL_ADMIN_SECRET ./envs/env.development.local)" >> ./hasura/.env && echo "\033[32mCreated:\033[m hasura/.env"
