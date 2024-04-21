import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  timestamp: { input: any; output: any };
};

export type Customer = {
  __typename?: "Customer";
  created_at: Scalars["DateTime"]["output"];
  email: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  tasks: Array<Task>;
  updated_at: Scalars["DateTime"]["output"];
  username: Scalars["String"]["output"];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_comparison_exp = {
  _eq: InputMaybe<Scalars["Int"]["input"]>;
  _gt: InputMaybe<Scalars["Int"]["input"]>;
  _gte: InputMaybe<Scalars["Int"]["input"]>;
  _in: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _is_null: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt: InputMaybe<Scalars["Int"]["input"]>;
  _lte: InputMaybe<Scalars["Int"]["input"]>;
  _neq: InputMaybe<Scalars["Int"]["input"]>;
  _nin: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_comparison_exp = {
  _eq: InputMaybe<Scalars["String"]["input"]>;
  _gt: InputMaybe<Scalars["String"]["input"]>;
  _gte: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike: InputMaybe<Scalars["String"]["input"]>;
  _in: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex: InputMaybe<Scalars["String"]["input"]>;
  _is_null: InputMaybe<Scalars["Boolean"]["input"]>;
  /** does the column match the given pattern */
  _like: InputMaybe<Scalars["String"]["input"]>;
  _lt: InputMaybe<Scalars["String"]["input"]>;
  _lte: InputMaybe<Scalars["String"]["input"]>;
  _neq: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike: InputMaybe<Scalars["String"]["input"]>;
  _nin: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given pattern */
  _nlike: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given SQL regular expression */
  _similar: InputMaybe<Scalars["String"]["input"]>;
};

export type Task = {
  __typename?: "Task";
  created_at: Scalars["DateTime"]["output"];
  customer: Customer;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  updated_at: Scalars["DateTime"]["output"];
};

export type _Service = {
  __typename?: "_Service";
  /** SDL representation of schema */
  sdl: Scalars["String"]["output"];
};

/** ordering argument of a cursor */
export type cursor_ordering =
  /** ascending ordering of the cursor */
  | "ASC"
  /** descending ordering of the cursor */
  | "DESC";

/** columns and relationships of "customers" */
export type customers = {
  __typename?: "customers";
  /** 作成日時 */
  created_at: Scalars["timestamp"]["output"];
  /** メールアドレス */
  email: Scalars["String"]["output"];
  /** Customer ID */
  id: Scalars["Int"]["output"];
  /** An array relationship */
  tasks: Array<tasks>;
  /** An aggregate relationship */
  tasks_aggregate: tasks_aggregate;
  /** 更新日時 */
  updated_at: Scalars["timestamp"]["output"];
  /** ユーザー名 */
  username: Scalars["String"]["output"];
};

/** columns and relationships of "customers" */
export type customerstasksArgs = {
  distinct_on: InputMaybe<Array<tasks_select_column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<tasks_order_by>>;
  where: InputMaybe<tasks_bool_exp>;
};

/** columns and relationships of "customers" */
export type customerstasks_aggregateArgs = {
  distinct_on: InputMaybe<Array<tasks_select_column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<tasks_order_by>>;
  where: InputMaybe<tasks_bool_exp>;
};

/** aggregated selection of "customers" */
export type customers_aggregate = {
  __typename?: "customers_aggregate";
  aggregate: Maybe<customers_aggregate_fields>;
  nodes: Array<customers>;
};

/** aggregate fields of "customers" */
export type customers_aggregate_fields = {
  __typename?: "customers_aggregate_fields";
  avg: Maybe<customers_avg_fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<customers_max_fields>;
  min: Maybe<customers_min_fields>;
  stddev: Maybe<customers_stddev_fields>;
  stddev_pop: Maybe<customers_stddev_pop_fields>;
  stddev_samp: Maybe<customers_stddev_samp_fields>;
  sum: Maybe<customers_sum_fields>;
  var_pop: Maybe<customers_var_pop_fields>;
  var_samp: Maybe<customers_var_samp_fields>;
  variance: Maybe<customers_variance_fields>;
};

/** aggregate fields of "customers" */
export type customers_aggregate_fieldscountArgs = {
  columns: InputMaybe<Array<customers_select_column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type customers_avg_fields = {
  __typename?: "customers_avg_fields";
  /** Customer ID */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "customers". All fields are combined with a logical 'AND'. */
export type customers_bool_exp = {
  _and: InputMaybe<Array<customers_bool_exp>>;
  _not: InputMaybe<customers_bool_exp>;
  _or: InputMaybe<Array<customers_bool_exp>>;
  created_at: InputMaybe<timestamp_comparison_exp>;
  email: InputMaybe<String_comparison_exp>;
  id: InputMaybe<Int_comparison_exp>;
  tasks: InputMaybe<tasks_bool_exp>;
  tasks_aggregate: InputMaybe<tasks_aggregate_bool_exp>;
  updated_at: InputMaybe<timestamp_comparison_exp>;
  username: InputMaybe<String_comparison_exp>;
};

/** unique or primary key constraints on table "customers" */
export type customers_constraint =
  /** unique or primary key constraint on columns "id" */
  "PK_133ec679a801fab5e070f73d3ea";

/** input type for incrementing numeric columns in table "customers" */
export type customers_inc_input = {
  /** Customer ID */
  id: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "customers" */
export type customers_insert_input = {
  /** 作成日時 */
  created_at: InputMaybe<Scalars["timestamp"]["input"]>;
  /** メールアドレス */
  email: InputMaybe<Scalars["String"]["input"]>;
  /** Customer ID */
  id: InputMaybe<Scalars["Int"]["input"]>;
  tasks: InputMaybe<tasks_arr_rel_insert_input>;
  /** 更新日時 */
  updated_at: InputMaybe<Scalars["timestamp"]["input"]>;
  /** ユーザー名 */
  username: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type customers_max_fields = {
  __typename?: "customers_max_fields";
  /** 作成日時 */
  created_at: Maybe<Scalars["timestamp"]["output"]>;
  /** メールアドレス */
  email: Maybe<Scalars["String"]["output"]>;
  /** Customer ID */
  id: Maybe<Scalars["Int"]["output"]>;
  /** 更新日時 */
  updated_at: Maybe<Scalars["timestamp"]["output"]>;
  /** ユーザー名 */
  username: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type customers_min_fields = {
  __typename?: "customers_min_fields";
  /** 作成日時 */
  created_at: Maybe<Scalars["timestamp"]["output"]>;
  /** メールアドレス */
  email: Maybe<Scalars["String"]["output"]>;
  /** Customer ID */
  id: Maybe<Scalars["Int"]["output"]>;
  /** 更新日時 */
  updated_at: Maybe<Scalars["timestamp"]["output"]>;
  /** ユーザー名 */
  username: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "customers" */
export type customers_mutation_response = {
  __typename?: "customers_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<customers>;
};

/** input type for inserting object relation for remote table "customers" */
export type customers_obj_rel_insert_input = {
  data: customers_insert_input;
  /** upsert condition */
  on_conflict: InputMaybe<customers_on_conflict>;
};

/** on_conflict condition type for table "customers" */
export type customers_on_conflict = {
  constraint: customers_constraint;
  update_columns: Array<customers_update_column>;
  where: InputMaybe<customers_bool_exp>;
};

/** Ordering options when selecting data from "customers". */
export type customers_order_by = {
  created_at: InputMaybe<order_by>;
  email: InputMaybe<order_by>;
  id: InputMaybe<order_by>;
  tasks_aggregate: InputMaybe<tasks_aggregate_order_by>;
  updated_at: InputMaybe<order_by>;
  username: InputMaybe<order_by>;
};

/** primary key columns input for table: customers */
export type customers_pk_columns_input = {
  /** Customer ID */
  id: Scalars["Int"]["input"];
};

/** select columns of table "customers" */
export type customers_select_column =
  /** column name */
  | "created_at"
  /** column name */
  | "email"
  /** column name */
  | "id"
  /** column name */
  | "updated_at"
  /** column name */
  | "username";

/** input type for updating data in table "customers" */
export type customers_set_input = {
  /** 作成日時 */
  created_at: InputMaybe<Scalars["timestamp"]["input"]>;
  /** メールアドレス */
  email: InputMaybe<Scalars["String"]["input"]>;
  /** Customer ID */
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** 更新日時 */
  updated_at: InputMaybe<Scalars["timestamp"]["input"]>;
  /** ユーザー名 */
  username: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type customers_stddev_fields = {
  __typename?: "customers_stddev_fields";
  /** Customer ID */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type customers_stddev_pop_fields = {
  __typename?: "customers_stddev_pop_fields";
  /** Customer ID */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type customers_stddev_samp_fields = {
  __typename?: "customers_stddev_samp_fields";
  /** Customer ID */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "customers" */
export type customers_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: customers_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type customers_stream_cursor_value_input = {
  /** 作成日時 */
  created_at: InputMaybe<Scalars["timestamp"]["input"]>;
  /** メールアドレス */
  email: InputMaybe<Scalars["String"]["input"]>;
  /** Customer ID */
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** 更新日時 */
  updated_at: InputMaybe<Scalars["timestamp"]["input"]>;
  /** ユーザー名 */
  username: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type customers_sum_fields = {
  __typename?: "customers_sum_fields";
  /** Customer ID */
  id: Maybe<Scalars["Int"]["output"]>;
};

/** update columns of table "customers" */
export type customers_update_column =
  /** column name */
  | "created_at"
  /** column name */
  | "email"
  /** column name */
  | "id"
  /** column name */
  | "updated_at"
  /** column name */
  | "username";

export type customers_updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<customers_inc_input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<customers_set_input>;
  /** filter the rows which have to be updated */
  where: customers_bool_exp;
};

/** aggregate var_pop on columns */
export type customers_var_pop_fields = {
  __typename?: "customers_var_pop_fields";
  /** Customer ID */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type customers_var_samp_fields = {
  __typename?: "customers_var_samp_fields";
  /** Customer ID */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type customers_variance_fields = {
  __typename?: "customers_variance_fields";
  /** Customer ID */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** mutation root */
export type mutation_root = {
  __typename?: "mutation_root";
  /** delete data from the table: "customers" */
  delete_customers: Maybe<customers_mutation_response>;
  /** delete single row from the table: "customers" */
  delete_customers_by_pk: Maybe<customers>;
  /** delete data from the table: "tasks" */
  delete_tasks: Maybe<tasks_mutation_response>;
  /** delete single row from the table: "tasks" */
  delete_tasks_by_pk: Maybe<tasks>;
  /** insert data into the table: "customers" */
  insert_customers: Maybe<customers_mutation_response>;
  /** insert a single row into the table: "customers" */
  insert_customers_one: Maybe<customers>;
  /** insert data into the table: "tasks" */
  insert_tasks: Maybe<tasks_mutation_response>;
  /** insert a single row into the table: "tasks" */
  insert_tasks_one: Maybe<tasks>;
  /** update data of the table: "customers" */
  update_customers: Maybe<customers_mutation_response>;
  /** update single row of the table: "customers" */
  update_customers_by_pk: Maybe<customers>;
  /** update multiples rows of table: "customers" */
  update_customers_many: Maybe<Array<Maybe<customers_mutation_response>>>;
  /** update data of the table: "tasks" */
  update_tasks: Maybe<tasks_mutation_response>;
  /** update single row of the table: "tasks" */
  update_tasks_by_pk: Maybe<tasks>;
  /** update multiples rows of table: "tasks" */
  update_tasks_many: Maybe<Array<Maybe<tasks_mutation_response>>>;
};

/** mutation root */
export type mutation_rootdelete_customersArgs = {
  where: customers_bool_exp;
};

/** mutation root */
export type mutation_rootdelete_customers_by_pkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type mutation_rootdelete_tasksArgs = {
  where: tasks_bool_exp;
};

/** mutation root */
export type mutation_rootdelete_tasks_by_pkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type mutation_rootinsert_customersArgs = {
  objects: Array<customers_insert_input>;
  on_conflict: InputMaybe<customers_on_conflict>;
};

/** mutation root */
export type mutation_rootinsert_customers_oneArgs = {
  object: customers_insert_input;
  on_conflict: InputMaybe<customers_on_conflict>;
};

/** mutation root */
export type mutation_rootinsert_tasksArgs = {
  objects: Array<tasks_insert_input>;
  on_conflict: InputMaybe<tasks_on_conflict>;
};

/** mutation root */
export type mutation_rootinsert_tasks_oneArgs = {
  object: tasks_insert_input;
  on_conflict: InputMaybe<tasks_on_conflict>;
};

/** mutation root */
export type mutation_rootupdate_customersArgs = {
  _inc: InputMaybe<customers_inc_input>;
  _set: InputMaybe<customers_set_input>;
  where: customers_bool_exp;
};

/** mutation root */
export type mutation_rootupdate_customers_by_pkArgs = {
  _inc: InputMaybe<customers_inc_input>;
  _set: InputMaybe<customers_set_input>;
  pk_columns: customers_pk_columns_input;
};

/** mutation root */
export type mutation_rootupdate_customers_manyArgs = {
  updates: Array<customers_updates>;
};

/** mutation root */
export type mutation_rootupdate_tasksArgs = {
  _inc: InputMaybe<tasks_inc_input>;
  _set: InputMaybe<tasks_set_input>;
  where: tasks_bool_exp;
};

/** mutation root */
export type mutation_rootupdate_tasks_by_pkArgs = {
  _inc: InputMaybe<tasks_inc_input>;
  _set: InputMaybe<tasks_set_input>;
  pk_columns: tasks_pk_columns_input;
};

/** mutation root */
export type mutation_rootupdate_tasks_manyArgs = {
  updates: Array<tasks_updates>;
};

/** column ordering options */
export type order_by =
  /** in ascending order, nulls last */
  | "asc"
  /** in ascending order, nulls first */
  | "asc_nulls_first"
  /** in ascending order, nulls last */
  | "asc_nulls_last"
  /** in descending order, nulls first */
  | "desc"
  /** in descending order, nulls first */
  | "desc_nulls_first"
  /** in descending order, nulls last */
  | "desc_nulls_last";

export type query_root = {
  __typename?: "query_root";
  _service: _Service;
  /** fetch data from the table: "customers" */
  customers: Array<customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: customers_aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk: Maybe<customers>;
  getCustomer: Customer;
  getTask: Task;
  /** An array relationship */
  tasks: Array<tasks>;
  /** An aggregate relationship */
  tasks_aggregate: tasks_aggregate;
  /** fetch data from the table: "tasks" using primary key columns */
  tasks_by_pk: Maybe<tasks>;
};

export type query_rootcustomersArgs = {
  distinct_on: InputMaybe<Array<customers_select_column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<customers_order_by>>;
  where: InputMaybe<customers_bool_exp>;
};

export type query_rootcustomers_aggregateArgs = {
  distinct_on: InputMaybe<Array<customers_select_column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<customers_order_by>>;
  where: InputMaybe<customers_bool_exp>;
};

export type query_rootcustomers_by_pkArgs = {
  id: Scalars["Int"]["input"];
};

export type query_rootgetCustomerArgs = {
  customerId: Scalars["Float"]["input"];
};

export type query_rootgetTaskArgs = {
  taskId: Scalars["Float"]["input"];
};

export type query_roottasksArgs = {
  distinct_on: InputMaybe<Array<tasks_select_column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<tasks_order_by>>;
  where: InputMaybe<tasks_bool_exp>;
};

export type query_roottasks_aggregateArgs = {
  distinct_on: InputMaybe<Array<tasks_select_column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<tasks_order_by>>;
  where: InputMaybe<tasks_bool_exp>;
};

export type query_roottasks_by_pkArgs = {
  id: Scalars["Int"]["input"];
};

export type subscription_root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "customers" */
  customers: Array<customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: customers_aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk: Maybe<customers>;
  /** fetch data from the table in a streaming manner: "customers" */
  customers_stream: Array<customers>;
  /** An array relationship */
  tasks: Array<tasks>;
  /** An aggregate relationship */
  tasks_aggregate: tasks_aggregate;
  /** fetch data from the table: "tasks" using primary key columns */
  tasks_by_pk: Maybe<tasks>;
  /** fetch data from the table in a streaming manner: "tasks" */
  tasks_stream: Array<tasks>;
};

export type subscription_rootcustomersArgs = {
  distinct_on: InputMaybe<Array<customers_select_column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<customers_order_by>>;
  where: InputMaybe<customers_bool_exp>;
};

export type subscription_rootcustomers_aggregateArgs = {
  distinct_on: InputMaybe<Array<customers_select_column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<customers_order_by>>;
  where: InputMaybe<customers_bool_exp>;
};

export type subscription_rootcustomers_by_pkArgs = {
  id: Scalars["Int"]["input"];
};

export type subscription_rootcustomers_streamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<customers_stream_cursor_input>>;
  where: InputMaybe<customers_bool_exp>;
};

export type subscription_roottasksArgs = {
  distinct_on: InputMaybe<Array<tasks_select_column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<tasks_order_by>>;
  where: InputMaybe<tasks_bool_exp>;
};

export type subscription_roottasks_aggregateArgs = {
  distinct_on: InputMaybe<Array<tasks_select_column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<tasks_order_by>>;
  where: InputMaybe<tasks_bool_exp>;
};

export type subscription_roottasks_by_pkArgs = {
  id: Scalars["Int"]["input"];
};

export type subscription_roottasks_streamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<tasks_stream_cursor_input>>;
  where: InputMaybe<tasks_bool_exp>;
};

/** columns and relationships of "tasks" */
export type tasks = {
  __typename?: "tasks";
  /** 作成日時 */
  created_at: Scalars["timestamp"]["output"];
  /** An object relationship */
  customer: Maybe<customers>;
  /** Customer ID */
  customer_id: Maybe<Scalars["Int"]["output"]>;
  /** タスクID */
  id: Scalars["Int"]["output"];
  /** タスク名 */
  name: Scalars["String"]["output"];
  /** 更新日時 */
  updated_at: Scalars["timestamp"]["output"];
};

/** aggregated selection of "tasks" */
export type tasks_aggregate = {
  __typename?: "tasks_aggregate";
  aggregate: Maybe<tasks_aggregate_fields>;
  nodes: Array<tasks>;
};

export type tasks_aggregate_bool_exp = {
  count: InputMaybe<tasks_aggregate_bool_exp_count>;
};

export type tasks_aggregate_bool_exp_count = {
  arguments: InputMaybe<Array<tasks_select_column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<tasks_bool_exp>;
  predicate: Int_comparison_exp;
};

/** aggregate fields of "tasks" */
export type tasks_aggregate_fields = {
  __typename?: "tasks_aggregate_fields";
  avg: Maybe<tasks_avg_fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<tasks_max_fields>;
  min: Maybe<tasks_min_fields>;
  stddev: Maybe<tasks_stddev_fields>;
  stddev_pop: Maybe<tasks_stddev_pop_fields>;
  stddev_samp: Maybe<tasks_stddev_samp_fields>;
  sum: Maybe<tasks_sum_fields>;
  var_pop: Maybe<tasks_var_pop_fields>;
  var_samp: Maybe<tasks_var_samp_fields>;
  variance: Maybe<tasks_variance_fields>;
};

/** aggregate fields of "tasks" */
export type tasks_aggregate_fieldscountArgs = {
  columns: InputMaybe<Array<tasks_select_column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "tasks" */
export type tasks_aggregate_order_by = {
  avg: InputMaybe<tasks_avg_order_by>;
  count: InputMaybe<order_by>;
  max: InputMaybe<tasks_max_order_by>;
  min: InputMaybe<tasks_min_order_by>;
  stddev: InputMaybe<tasks_stddev_order_by>;
  stddev_pop: InputMaybe<tasks_stddev_pop_order_by>;
  stddev_samp: InputMaybe<tasks_stddev_samp_order_by>;
  sum: InputMaybe<tasks_sum_order_by>;
  var_pop: InputMaybe<tasks_var_pop_order_by>;
  var_samp: InputMaybe<tasks_var_samp_order_by>;
  variance: InputMaybe<tasks_variance_order_by>;
};

/** input type for inserting array relation for remote table "tasks" */
export type tasks_arr_rel_insert_input = {
  data: Array<tasks_insert_input>;
  /** upsert condition */
  on_conflict: InputMaybe<tasks_on_conflict>;
};

/** aggregate avg on columns */
export type tasks_avg_fields = {
  __typename?: "tasks_avg_fields";
  /** Customer ID */
  customer_id: Maybe<Scalars["Float"]["output"]>;
  /** タスクID */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "tasks" */
export type tasks_avg_order_by = {
  /** Customer ID */
  customer_id: InputMaybe<order_by>;
  /** タスクID */
  id: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "tasks". All fields are combined with a logical 'AND'. */
export type tasks_bool_exp = {
  _and: InputMaybe<Array<tasks_bool_exp>>;
  _not: InputMaybe<tasks_bool_exp>;
  _or: InputMaybe<Array<tasks_bool_exp>>;
  created_at: InputMaybe<timestamp_comparison_exp>;
  customer: InputMaybe<customers_bool_exp>;
  customer_id: InputMaybe<Int_comparison_exp>;
  id: InputMaybe<Int_comparison_exp>;
  name: InputMaybe<String_comparison_exp>;
  updated_at: InputMaybe<timestamp_comparison_exp>;
};

/** unique or primary key constraints on table "tasks" */
export type tasks_constraint =
  /** unique or primary key constraint on columns "id" */
  "PK_8d12ff38fcc62aaba2cab748772";

/** input type for incrementing numeric columns in table "tasks" */
export type tasks_inc_input = {
  /** Customer ID */
  customer_id: InputMaybe<Scalars["Int"]["input"]>;
  /** タスクID */
  id: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "tasks" */
export type tasks_insert_input = {
  /** 作成日時 */
  created_at: InputMaybe<Scalars["timestamp"]["input"]>;
  customer: InputMaybe<customers_obj_rel_insert_input>;
  /** Customer ID */
  customer_id: InputMaybe<Scalars["Int"]["input"]>;
  /** タスクID */
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** タスク名 */
  name: InputMaybe<Scalars["String"]["input"]>;
  /** 更新日時 */
  updated_at: InputMaybe<Scalars["timestamp"]["input"]>;
};

/** aggregate max on columns */
export type tasks_max_fields = {
  __typename?: "tasks_max_fields";
  /** 作成日時 */
  created_at: Maybe<Scalars["timestamp"]["output"]>;
  /** Customer ID */
  customer_id: Maybe<Scalars["Int"]["output"]>;
  /** タスクID */
  id: Maybe<Scalars["Int"]["output"]>;
  /** タスク名 */
  name: Maybe<Scalars["String"]["output"]>;
  /** 更新日時 */
  updated_at: Maybe<Scalars["timestamp"]["output"]>;
};

/** order by max() on columns of table "tasks" */
export type tasks_max_order_by = {
  /** 作成日時 */
  created_at: InputMaybe<order_by>;
  /** Customer ID */
  customer_id: InputMaybe<order_by>;
  /** タスクID */
  id: InputMaybe<order_by>;
  /** タスク名 */
  name: InputMaybe<order_by>;
  /** 更新日時 */
  updated_at: InputMaybe<order_by>;
};

/** aggregate min on columns */
export type tasks_min_fields = {
  __typename?: "tasks_min_fields";
  /** 作成日時 */
  created_at: Maybe<Scalars["timestamp"]["output"]>;
  /** Customer ID */
  customer_id: Maybe<Scalars["Int"]["output"]>;
  /** タスクID */
  id: Maybe<Scalars["Int"]["output"]>;
  /** タスク名 */
  name: Maybe<Scalars["String"]["output"]>;
  /** 更新日時 */
  updated_at: Maybe<Scalars["timestamp"]["output"]>;
};

/** order by min() on columns of table "tasks" */
export type tasks_min_order_by = {
  /** 作成日時 */
  created_at: InputMaybe<order_by>;
  /** Customer ID */
  customer_id: InputMaybe<order_by>;
  /** タスクID */
  id: InputMaybe<order_by>;
  /** タスク名 */
  name: InputMaybe<order_by>;
  /** 更新日時 */
  updated_at: InputMaybe<order_by>;
};

/** response of any mutation on the table "tasks" */
export type tasks_mutation_response = {
  __typename?: "tasks_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<tasks>;
};

/** on_conflict condition type for table "tasks" */
export type tasks_on_conflict = {
  constraint: tasks_constraint;
  update_columns: Array<tasks_update_column>;
  where: InputMaybe<tasks_bool_exp>;
};

/** Ordering options when selecting data from "tasks". */
export type tasks_order_by = {
  created_at: InputMaybe<order_by>;
  customer: InputMaybe<customers_order_by>;
  customer_id: InputMaybe<order_by>;
  id: InputMaybe<order_by>;
  name: InputMaybe<order_by>;
  updated_at: InputMaybe<order_by>;
};

/** primary key columns input for table: tasks */
export type tasks_pk_columns_input = {
  /** タスクID */
  id: Scalars["Int"]["input"];
};

/** select columns of table "tasks" */
export type tasks_select_column =
  /** column name */
  | "created_at"
  /** column name */
  | "customer_id"
  /** column name */
  | "id"
  /** column name */
  | "name"
  /** column name */
  | "updated_at";

/** input type for updating data in table "tasks" */
export type tasks_set_input = {
  /** 作成日時 */
  created_at: InputMaybe<Scalars["timestamp"]["input"]>;
  /** Customer ID */
  customer_id: InputMaybe<Scalars["Int"]["input"]>;
  /** タスクID */
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** タスク名 */
  name: InputMaybe<Scalars["String"]["input"]>;
  /** 更新日時 */
  updated_at: InputMaybe<Scalars["timestamp"]["input"]>;
};

/** aggregate stddev on columns */
export type tasks_stddev_fields = {
  __typename?: "tasks_stddev_fields";
  /** Customer ID */
  customer_id: Maybe<Scalars["Float"]["output"]>;
  /** タスクID */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "tasks" */
export type tasks_stddev_order_by = {
  /** Customer ID */
  customer_id: InputMaybe<order_by>;
  /** タスクID */
  id: InputMaybe<order_by>;
};

/** aggregate stddev_pop on columns */
export type tasks_stddev_pop_fields = {
  __typename?: "tasks_stddev_pop_fields";
  /** Customer ID */
  customer_id: Maybe<Scalars["Float"]["output"]>;
  /** タスクID */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "tasks" */
export type tasks_stddev_pop_order_by = {
  /** Customer ID */
  customer_id: InputMaybe<order_by>;
  /** タスクID */
  id: InputMaybe<order_by>;
};

/** aggregate stddev_samp on columns */
export type tasks_stddev_samp_fields = {
  __typename?: "tasks_stddev_samp_fields";
  /** Customer ID */
  customer_id: Maybe<Scalars["Float"]["output"]>;
  /** タスクID */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "tasks" */
export type tasks_stddev_samp_order_by = {
  /** Customer ID */
  customer_id: InputMaybe<order_by>;
  /** タスクID */
  id: InputMaybe<order_by>;
};

/** Streaming cursor of the table "tasks" */
export type tasks_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: tasks_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type tasks_stream_cursor_value_input = {
  /** 作成日時 */
  created_at: InputMaybe<Scalars["timestamp"]["input"]>;
  /** Customer ID */
  customer_id: InputMaybe<Scalars["Int"]["input"]>;
  /** タスクID */
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** タスク名 */
  name: InputMaybe<Scalars["String"]["input"]>;
  /** 更新日時 */
  updated_at: InputMaybe<Scalars["timestamp"]["input"]>;
};

/** aggregate sum on columns */
export type tasks_sum_fields = {
  __typename?: "tasks_sum_fields";
  /** Customer ID */
  customer_id: Maybe<Scalars["Int"]["output"]>;
  /** タスクID */
  id: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "tasks" */
export type tasks_sum_order_by = {
  /** Customer ID */
  customer_id: InputMaybe<order_by>;
  /** タスクID */
  id: InputMaybe<order_by>;
};

/** update columns of table "tasks" */
export type tasks_update_column =
  /** column name */
  | "created_at"
  /** column name */
  | "customer_id"
  /** column name */
  | "id"
  /** column name */
  | "name"
  /** column name */
  | "updated_at";

export type tasks_updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<tasks_inc_input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<tasks_set_input>;
  /** filter the rows which have to be updated */
  where: tasks_bool_exp;
};

/** aggregate var_pop on columns */
export type tasks_var_pop_fields = {
  __typename?: "tasks_var_pop_fields";
  /** Customer ID */
  customer_id: Maybe<Scalars["Float"]["output"]>;
  /** タスクID */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "tasks" */
export type tasks_var_pop_order_by = {
  /** Customer ID */
  customer_id: InputMaybe<order_by>;
  /** タスクID */
  id: InputMaybe<order_by>;
};

/** aggregate var_samp on columns */
export type tasks_var_samp_fields = {
  __typename?: "tasks_var_samp_fields";
  /** Customer ID */
  customer_id: Maybe<Scalars["Float"]["output"]>;
  /** タスクID */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "tasks" */
export type tasks_var_samp_order_by = {
  /** Customer ID */
  customer_id: InputMaybe<order_by>;
  /** タスクID */
  id: InputMaybe<order_by>;
};

/** aggregate variance on columns */
export type tasks_variance_fields = {
  __typename?: "tasks_variance_fields";
  /** Customer ID */
  customer_id: Maybe<Scalars["Float"]["output"]>;
  /** タスクID */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "tasks" */
export type tasks_variance_order_by = {
  /** Customer ID */
  customer_id: InputMaybe<order_by>;
  /** タスクID */
  id: InputMaybe<order_by>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type timestamp_comparison_exp = {
  _eq: InputMaybe<Scalars["timestamp"]["input"]>;
  _gt: InputMaybe<Scalars["timestamp"]["input"]>;
  _gte: InputMaybe<Scalars["timestamp"]["input"]>;
  _in: InputMaybe<Array<Scalars["timestamp"]["input"]>>;
  _is_null: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt: InputMaybe<Scalars["timestamp"]["input"]>;
  _lte: InputMaybe<Scalars["timestamp"]["input"]>;
  _neq: InputMaybe<Scalars["timestamp"]["input"]>;
  _nin: InputMaybe<Array<Scalars["timestamp"]["input"]>>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  Customer: ResolverTypeWrapper<Customer>;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]["output"]>;
  Float: ResolverTypeWrapper<Scalars["Float"]["output"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  Int_comparison_exp: Int_comparison_exp;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  String_comparison_exp: String_comparison_exp;
  Task: ResolverTypeWrapper<Task>;
  _Service: ResolverTypeWrapper<_Service>;
  cursor_ordering: cursor_ordering;
  customers: ResolverTypeWrapper<customers>;
  customers_aggregate: ResolverTypeWrapper<customers_aggregate>;
  customers_aggregate_fields: ResolverTypeWrapper<customers_aggregate_fields>;
  customers_avg_fields: ResolverTypeWrapper<customers_avg_fields>;
  customers_bool_exp: customers_bool_exp;
  customers_constraint: customers_constraint;
  customers_inc_input: customers_inc_input;
  customers_insert_input: customers_insert_input;
  customers_max_fields: ResolverTypeWrapper<customers_max_fields>;
  customers_min_fields: ResolverTypeWrapper<customers_min_fields>;
  customers_mutation_response: ResolverTypeWrapper<customers_mutation_response>;
  customers_obj_rel_insert_input: customers_obj_rel_insert_input;
  customers_on_conflict: customers_on_conflict;
  customers_order_by: customers_order_by;
  customers_pk_columns_input: customers_pk_columns_input;
  customers_select_column: customers_select_column;
  customers_set_input: customers_set_input;
  customers_stddev_fields: ResolverTypeWrapper<customers_stddev_fields>;
  customers_stddev_pop_fields: ResolverTypeWrapper<customers_stddev_pop_fields>;
  customers_stddev_samp_fields: ResolverTypeWrapper<customers_stddev_samp_fields>;
  customers_stream_cursor_input: customers_stream_cursor_input;
  customers_stream_cursor_value_input: customers_stream_cursor_value_input;
  customers_sum_fields: ResolverTypeWrapper<customers_sum_fields>;
  customers_update_column: customers_update_column;
  customers_updates: customers_updates;
  customers_var_pop_fields: ResolverTypeWrapper<customers_var_pop_fields>;
  customers_var_samp_fields: ResolverTypeWrapper<customers_var_samp_fields>;
  customers_variance_fields: ResolverTypeWrapper<customers_variance_fields>;
  mutation_root: ResolverTypeWrapper<{}>;
  order_by: order_by;
  query_root: ResolverTypeWrapper<{}>;
  subscription_root: ResolverTypeWrapper<{}>;
  tasks: ResolverTypeWrapper<tasks>;
  tasks_aggregate: ResolverTypeWrapper<tasks_aggregate>;
  tasks_aggregate_bool_exp: tasks_aggregate_bool_exp;
  tasks_aggregate_bool_exp_count: tasks_aggregate_bool_exp_count;
  tasks_aggregate_fields: ResolverTypeWrapper<tasks_aggregate_fields>;
  tasks_aggregate_order_by: tasks_aggregate_order_by;
  tasks_arr_rel_insert_input: tasks_arr_rel_insert_input;
  tasks_avg_fields: ResolverTypeWrapper<tasks_avg_fields>;
  tasks_avg_order_by: tasks_avg_order_by;
  tasks_bool_exp: tasks_bool_exp;
  tasks_constraint: tasks_constraint;
  tasks_inc_input: tasks_inc_input;
  tasks_insert_input: tasks_insert_input;
  tasks_max_fields: ResolverTypeWrapper<tasks_max_fields>;
  tasks_max_order_by: tasks_max_order_by;
  tasks_min_fields: ResolverTypeWrapper<tasks_min_fields>;
  tasks_min_order_by: tasks_min_order_by;
  tasks_mutation_response: ResolverTypeWrapper<tasks_mutation_response>;
  tasks_on_conflict: tasks_on_conflict;
  tasks_order_by: tasks_order_by;
  tasks_pk_columns_input: tasks_pk_columns_input;
  tasks_select_column: tasks_select_column;
  tasks_set_input: tasks_set_input;
  tasks_stddev_fields: ResolverTypeWrapper<tasks_stddev_fields>;
  tasks_stddev_order_by: tasks_stddev_order_by;
  tasks_stddev_pop_fields: ResolverTypeWrapper<tasks_stddev_pop_fields>;
  tasks_stddev_pop_order_by: tasks_stddev_pop_order_by;
  tasks_stddev_samp_fields: ResolverTypeWrapper<tasks_stddev_samp_fields>;
  tasks_stddev_samp_order_by: tasks_stddev_samp_order_by;
  tasks_stream_cursor_input: tasks_stream_cursor_input;
  tasks_stream_cursor_value_input: tasks_stream_cursor_value_input;
  tasks_sum_fields: ResolverTypeWrapper<tasks_sum_fields>;
  tasks_sum_order_by: tasks_sum_order_by;
  tasks_update_column: tasks_update_column;
  tasks_updates: tasks_updates;
  tasks_var_pop_fields: ResolverTypeWrapper<tasks_var_pop_fields>;
  tasks_var_pop_order_by: tasks_var_pop_order_by;
  tasks_var_samp_fields: ResolverTypeWrapper<tasks_var_samp_fields>;
  tasks_var_samp_order_by: tasks_var_samp_order_by;
  tasks_variance_fields: ResolverTypeWrapper<tasks_variance_fields>;
  tasks_variance_order_by: tasks_variance_order_by;
  timestamp: ResolverTypeWrapper<Scalars["timestamp"]["output"]>;
  timestamp_comparison_exp: timestamp_comparison_exp;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"]["output"];
  Customer: Customer;
  DateTime: Scalars["DateTime"]["output"];
  Float: Scalars["Float"]["output"];
  ID: Scalars["ID"]["output"];
  Int: Scalars["Int"]["output"];
  Int_comparison_exp: Int_comparison_exp;
  String: Scalars["String"]["output"];
  String_comparison_exp: String_comparison_exp;
  Task: Task;
  _Service: _Service;
  customers: customers;
  customers_aggregate: customers_aggregate;
  customers_aggregate_fields: customers_aggregate_fields;
  customers_avg_fields: customers_avg_fields;
  customers_bool_exp: customers_bool_exp;
  customers_inc_input: customers_inc_input;
  customers_insert_input: customers_insert_input;
  customers_max_fields: customers_max_fields;
  customers_min_fields: customers_min_fields;
  customers_mutation_response: customers_mutation_response;
  customers_obj_rel_insert_input: customers_obj_rel_insert_input;
  customers_on_conflict: customers_on_conflict;
  customers_order_by: customers_order_by;
  customers_pk_columns_input: customers_pk_columns_input;
  customers_set_input: customers_set_input;
  customers_stddev_fields: customers_stddev_fields;
  customers_stddev_pop_fields: customers_stddev_pop_fields;
  customers_stddev_samp_fields: customers_stddev_samp_fields;
  customers_stream_cursor_input: customers_stream_cursor_input;
  customers_stream_cursor_value_input: customers_stream_cursor_value_input;
  customers_sum_fields: customers_sum_fields;
  customers_updates: customers_updates;
  customers_var_pop_fields: customers_var_pop_fields;
  customers_var_samp_fields: customers_var_samp_fields;
  customers_variance_fields: customers_variance_fields;
  mutation_root: {};
  query_root: {};
  subscription_root: {};
  tasks: tasks;
  tasks_aggregate: tasks_aggregate;
  tasks_aggregate_bool_exp: tasks_aggregate_bool_exp;
  tasks_aggregate_bool_exp_count: tasks_aggregate_bool_exp_count;
  tasks_aggregate_fields: tasks_aggregate_fields;
  tasks_aggregate_order_by: tasks_aggregate_order_by;
  tasks_arr_rel_insert_input: tasks_arr_rel_insert_input;
  tasks_avg_fields: tasks_avg_fields;
  tasks_avg_order_by: tasks_avg_order_by;
  tasks_bool_exp: tasks_bool_exp;
  tasks_inc_input: tasks_inc_input;
  tasks_insert_input: tasks_insert_input;
  tasks_max_fields: tasks_max_fields;
  tasks_max_order_by: tasks_max_order_by;
  tasks_min_fields: tasks_min_fields;
  tasks_min_order_by: tasks_min_order_by;
  tasks_mutation_response: tasks_mutation_response;
  tasks_on_conflict: tasks_on_conflict;
  tasks_order_by: tasks_order_by;
  tasks_pk_columns_input: tasks_pk_columns_input;
  tasks_set_input: tasks_set_input;
  tasks_stddev_fields: tasks_stddev_fields;
  tasks_stddev_order_by: tasks_stddev_order_by;
  tasks_stddev_pop_fields: tasks_stddev_pop_fields;
  tasks_stddev_pop_order_by: tasks_stddev_pop_order_by;
  tasks_stddev_samp_fields: tasks_stddev_samp_fields;
  tasks_stddev_samp_order_by: tasks_stddev_samp_order_by;
  tasks_stream_cursor_input: tasks_stream_cursor_input;
  tasks_stream_cursor_value_input: tasks_stream_cursor_value_input;
  tasks_sum_fields: tasks_sum_fields;
  tasks_sum_order_by: tasks_sum_order_by;
  tasks_updates: tasks_updates;
  tasks_var_pop_fields: tasks_var_pop_fields;
  tasks_var_pop_order_by: tasks_var_pop_order_by;
  tasks_var_samp_fields: tasks_var_samp_fields;
  tasks_var_samp_order_by: tasks_var_samp_order_by;
  tasks_variance_fields: tasks_variance_fields;
  tasks_variance_order_by: tasks_variance_order_by;
  timestamp: Scalars["timestamp"]["output"];
  timestamp_comparison_exp: timestamp_comparison_exp;
};

export type cachedDirectiveArgs = {
  refresh?: Scalars["Boolean"]["input"];
  ttl?: Scalars["Int"]["input"];
};

export type cachedDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = cachedDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CustomerResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Customer"] = ResolversParentTypes["Customer"],
> = {
  created_at: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  email: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  tasks: Resolver<Array<ResolversTypes["Task"]>, ParentType, ContextType>;
  updated_at: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  username: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type TaskResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Task"] = ResolversParentTypes["Task"],
> = {
  created_at: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  customer: Resolver<ResolversTypes["Customer"], ParentType, ContextType>;
  id: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updated_at: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _ServiceResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["_Service"] = ResolversParentTypes["_Service"],
> = {
  sdl: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type customersResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["customers"] = ResolversParentTypes["customers"],
> = {
  created_at: Resolver<ResolversTypes["timestamp"], ParentType, ContextType>;
  email: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  tasks: Resolver<
    Array<ResolversTypes["tasks"]>,
    ParentType,
    ContextType,
    customerstasksArgs
  >;
  tasks_aggregate: Resolver<
    ResolversTypes["tasks_aggregate"],
    ParentType,
    ContextType,
    customerstasks_aggregateArgs
  >;
  updated_at: Resolver<ResolversTypes["timestamp"], ParentType, ContextType>;
  username: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type customers_aggregateResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["customers_aggregate"] = ResolversParentTypes["customers_aggregate"],
> = {
  aggregate: Resolver<
    Maybe<ResolversTypes["customers_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes: Resolver<Array<ResolversTypes["customers"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type customers_aggregate_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["customers_aggregate_fields"] = ResolversParentTypes["customers_aggregate_fields"],
> = {
  avg: Resolver<
    Maybe<ResolversTypes["customers_avg_fields"]>,
    ParentType,
    ContextType
  >;
  count: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    customers_aggregate_fieldscountArgs
  >;
  max: Resolver<
    Maybe<ResolversTypes["customers_max_fields"]>,
    ParentType,
    ContextType
  >;
  min: Resolver<
    Maybe<ResolversTypes["customers_min_fields"]>,
    ParentType,
    ContextType
  >;
  stddev: Resolver<
    Maybe<ResolversTypes["customers_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop: Resolver<
    Maybe<ResolversTypes["customers_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp: Resolver<
    Maybe<ResolversTypes["customers_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum: Resolver<
    Maybe<ResolversTypes["customers_sum_fields"]>,
    ParentType,
    ContextType
  >;
  var_pop: Resolver<
    Maybe<ResolversTypes["customers_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp: Resolver<
    Maybe<ResolversTypes["customers_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance: Resolver<
    Maybe<ResolversTypes["customers_variance_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type customers_avg_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["customers_avg_fields"] = ResolversParentTypes["customers_avg_fields"],
> = {
  id: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type customers_max_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["customers_max_fields"] = ResolversParentTypes["customers_max_fields"],
> = {
  created_at: Resolver<
    Maybe<ResolversTypes["timestamp"]>,
    ParentType,
    ContextType
  >;
  email: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  updated_at: Resolver<
    Maybe<ResolversTypes["timestamp"]>,
    ParentType,
    ContextType
  >;
  username: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type customers_min_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["customers_min_fields"] = ResolversParentTypes["customers_min_fields"],
> = {
  created_at: Resolver<
    Maybe<ResolversTypes["timestamp"]>,
    ParentType,
    ContextType
  >;
  email: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  updated_at: Resolver<
    Maybe<ResolversTypes["timestamp"]>,
    ParentType,
    ContextType
  >;
  username: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type customers_mutation_responseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["customers_mutation_response"] = ResolversParentTypes["customers_mutation_response"],
> = {
  affected_rows: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning: Resolver<
    Array<ResolversTypes["customers"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type customers_stddev_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["customers_stddev_fields"] = ResolversParentTypes["customers_stddev_fields"],
> = {
  id: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type customers_stddev_pop_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["customers_stddev_pop_fields"] = ResolversParentTypes["customers_stddev_pop_fields"],
> = {
  id: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type customers_stddev_samp_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["customers_stddev_samp_fields"] = ResolversParentTypes["customers_stddev_samp_fields"],
> = {
  id: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type customers_sum_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["customers_sum_fields"] = ResolversParentTypes["customers_sum_fields"],
> = {
  id: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type customers_var_pop_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["customers_var_pop_fields"] = ResolversParentTypes["customers_var_pop_fields"],
> = {
  id: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type customers_var_samp_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["customers_var_samp_fields"] = ResolversParentTypes["customers_var_samp_fields"],
> = {
  id: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type customers_variance_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["customers_variance_fields"] = ResolversParentTypes["customers_variance_fields"],
> = {
  id: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type mutation_rootResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["mutation_root"] = ResolversParentTypes["mutation_root"],
> = {
  delete_customers: Resolver<
    Maybe<ResolversTypes["customers_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<mutation_rootdelete_customersArgs, "where">
  >;
  delete_customers_by_pk: Resolver<
    Maybe<ResolversTypes["customers"]>,
    ParentType,
    ContextType,
    RequireFields<mutation_rootdelete_customers_by_pkArgs, "id">
  >;
  delete_tasks: Resolver<
    Maybe<ResolversTypes["tasks_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<mutation_rootdelete_tasksArgs, "where">
  >;
  delete_tasks_by_pk: Resolver<
    Maybe<ResolversTypes["tasks"]>,
    ParentType,
    ContextType,
    RequireFields<mutation_rootdelete_tasks_by_pkArgs, "id">
  >;
  insert_customers: Resolver<
    Maybe<ResolversTypes["customers_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<mutation_rootinsert_customersArgs, "objects">
  >;
  insert_customers_one: Resolver<
    Maybe<ResolversTypes["customers"]>,
    ParentType,
    ContextType,
    RequireFields<mutation_rootinsert_customers_oneArgs, "object">
  >;
  insert_tasks: Resolver<
    Maybe<ResolversTypes["tasks_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<mutation_rootinsert_tasksArgs, "objects">
  >;
  insert_tasks_one: Resolver<
    Maybe<ResolversTypes["tasks"]>,
    ParentType,
    ContextType,
    RequireFields<mutation_rootinsert_tasks_oneArgs, "object">
  >;
  update_customers: Resolver<
    Maybe<ResolversTypes["customers_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<mutation_rootupdate_customersArgs, "where">
  >;
  update_customers_by_pk: Resolver<
    Maybe<ResolversTypes["customers"]>,
    ParentType,
    ContextType,
    RequireFields<mutation_rootupdate_customers_by_pkArgs, "pk_columns">
  >;
  update_customers_many: Resolver<
    Maybe<Array<Maybe<ResolversTypes["customers_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<mutation_rootupdate_customers_manyArgs, "updates">
  >;
  update_tasks: Resolver<
    Maybe<ResolversTypes["tasks_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<mutation_rootupdate_tasksArgs, "where">
  >;
  update_tasks_by_pk: Resolver<
    Maybe<ResolversTypes["tasks"]>,
    ParentType,
    ContextType,
    RequireFields<mutation_rootupdate_tasks_by_pkArgs, "pk_columns">
  >;
  update_tasks_many: Resolver<
    Maybe<Array<Maybe<ResolversTypes["tasks_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<mutation_rootupdate_tasks_manyArgs, "updates">
  >;
};

export type query_rootResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["query_root"] = ResolversParentTypes["query_root"],
> = {
  _service: Resolver<ResolversTypes["_Service"], ParentType, ContextType>;
  customers: Resolver<
    Array<ResolversTypes["customers"]>,
    ParentType,
    ContextType,
    query_rootcustomersArgs
  >;
  customers_aggregate: Resolver<
    ResolversTypes["customers_aggregate"],
    ParentType,
    ContextType,
    query_rootcustomers_aggregateArgs
  >;
  customers_by_pk: Resolver<
    Maybe<ResolversTypes["customers"]>,
    ParentType,
    ContextType,
    RequireFields<query_rootcustomers_by_pkArgs, "id">
  >;
  getCustomer: Resolver<
    ResolversTypes["Customer"],
    ParentType,
    ContextType,
    RequireFields<query_rootgetCustomerArgs, "customerId">
  >;
  getTask: Resolver<
    ResolversTypes["Task"],
    ParentType,
    ContextType,
    RequireFields<query_rootgetTaskArgs, "taskId">
  >;
  tasks: Resolver<
    Array<ResolversTypes["tasks"]>,
    ParentType,
    ContextType,
    query_roottasksArgs
  >;
  tasks_aggregate: Resolver<
    ResolversTypes["tasks_aggregate"],
    ParentType,
    ContextType,
    query_roottasks_aggregateArgs
  >;
  tasks_by_pk: Resolver<
    Maybe<ResolversTypes["tasks"]>,
    ParentType,
    ContextType,
    RequireFields<query_roottasks_by_pkArgs, "id">
  >;
};

export type subscription_rootResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["subscription_root"] = ResolversParentTypes["subscription_root"],
> = {
  customers: SubscriptionResolver<
    Array<ResolversTypes["customers"]>,
    "customers",
    ParentType,
    ContextType,
    subscription_rootcustomersArgs
  >;
  customers_aggregate: SubscriptionResolver<
    ResolversTypes["customers_aggregate"],
    "customers_aggregate",
    ParentType,
    ContextType,
    subscription_rootcustomers_aggregateArgs
  >;
  customers_by_pk: SubscriptionResolver<
    Maybe<ResolversTypes["customers"]>,
    "customers_by_pk",
    ParentType,
    ContextType,
    RequireFields<subscription_rootcustomers_by_pkArgs, "id">
  >;
  customers_stream: SubscriptionResolver<
    Array<ResolversTypes["customers"]>,
    "customers_stream",
    ParentType,
    ContextType,
    RequireFields<
      subscription_rootcustomers_streamArgs,
      "batch_size" | "cursor"
    >
  >;
  tasks: SubscriptionResolver<
    Array<ResolversTypes["tasks"]>,
    "tasks",
    ParentType,
    ContextType,
    subscription_roottasksArgs
  >;
  tasks_aggregate: SubscriptionResolver<
    ResolversTypes["tasks_aggregate"],
    "tasks_aggregate",
    ParentType,
    ContextType,
    subscription_roottasks_aggregateArgs
  >;
  tasks_by_pk: SubscriptionResolver<
    Maybe<ResolversTypes["tasks"]>,
    "tasks_by_pk",
    ParentType,
    ContextType,
    RequireFields<subscription_roottasks_by_pkArgs, "id">
  >;
  tasks_stream: SubscriptionResolver<
    Array<ResolversTypes["tasks"]>,
    "tasks_stream",
    ParentType,
    ContextType,
    RequireFields<subscription_roottasks_streamArgs, "batch_size" | "cursor">
  >;
};

export type tasksResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["tasks"] = ResolversParentTypes["tasks"],
> = {
  created_at: Resolver<ResolversTypes["timestamp"], ParentType, ContextType>;
  customer: Resolver<
    Maybe<ResolversTypes["customers"]>,
    ParentType,
    ContextType
  >;
  customer_id: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  id: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  name: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updated_at: Resolver<ResolversTypes["timestamp"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type tasks_aggregateResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["tasks_aggregate"] = ResolversParentTypes["tasks_aggregate"],
> = {
  aggregate: Resolver<
    Maybe<ResolversTypes["tasks_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes: Resolver<Array<ResolversTypes["tasks"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type tasks_aggregate_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["tasks_aggregate_fields"] = ResolversParentTypes["tasks_aggregate_fields"],
> = {
  avg: Resolver<
    Maybe<ResolversTypes["tasks_avg_fields"]>,
    ParentType,
    ContextType
  >;
  count: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    tasks_aggregate_fieldscountArgs
  >;
  max: Resolver<
    Maybe<ResolversTypes["tasks_max_fields"]>,
    ParentType,
    ContextType
  >;
  min: Resolver<
    Maybe<ResolversTypes["tasks_min_fields"]>,
    ParentType,
    ContextType
  >;
  stddev: Resolver<
    Maybe<ResolversTypes["tasks_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop: Resolver<
    Maybe<ResolversTypes["tasks_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp: Resolver<
    Maybe<ResolversTypes["tasks_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum: Resolver<
    Maybe<ResolversTypes["tasks_sum_fields"]>,
    ParentType,
    ContextType
  >;
  var_pop: Resolver<
    Maybe<ResolversTypes["tasks_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp: Resolver<
    Maybe<ResolversTypes["tasks_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance: Resolver<
    Maybe<ResolversTypes["tasks_variance_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type tasks_avg_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["tasks_avg_fields"] = ResolversParentTypes["tasks_avg_fields"],
> = {
  customer_id: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type tasks_max_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["tasks_max_fields"] = ResolversParentTypes["tasks_max_fields"],
> = {
  created_at: Resolver<
    Maybe<ResolversTypes["timestamp"]>,
    ParentType,
    ContextType
  >;
  customer_id: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  id: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  name: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at: Resolver<
    Maybe<ResolversTypes["timestamp"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type tasks_min_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["tasks_min_fields"] = ResolversParentTypes["tasks_min_fields"],
> = {
  created_at: Resolver<
    Maybe<ResolversTypes["timestamp"]>,
    ParentType,
    ContextType
  >;
  customer_id: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  id: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  name: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at: Resolver<
    Maybe<ResolversTypes["timestamp"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type tasks_mutation_responseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["tasks_mutation_response"] = ResolversParentTypes["tasks_mutation_response"],
> = {
  affected_rows: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning: Resolver<Array<ResolversTypes["tasks"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type tasks_stddev_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["tasks_stddev_fields"] = ResolversParentTypes["tasks_stddev_fields"],
> = {
  customer_id: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type tasks_stddev_pop_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["tasks_stddev_pop_fields"] = ResolversParentTypes["tasks_stddev_pop_fields"],
> = {
  customer_id: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type tasks_stddev_samp_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["tasks_stddev_samp_fields"] = ResolversParentTypes["tasks_stddev_samp_fields"],
> = {
  customer_id: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type tasks_sum_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["tasks_sum_fields"] = ResolversParentTypes["tasks_sum_fields"],
> = {
  customer_id: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  id: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type tasks_var_pop_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["tasks_var_pop_fields"] = ResolversParentTypes["tasks_var_pop_fields"],
> = {
  customer_id: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type tasks_var_samp_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["tasks_var_samp_fields"] = ResolversParentTypes["tasks_var_samp_fields"],
> = {
  customer_id: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type tasks_variance_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["tasks_variance_fields"] = ResolversParentTypes["tasks_variance_fields"],
> = {
  customer_id: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface timestampScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["timestamp"], any> {
  name: "timestamp";
}

export type Resolvers<ContextType = any> = {
  Customer: CustomerResolvers<ContextType>;
  DateTime: GraphQLScalarType;
  Task: TaskResolvers<ContextType>;
  _Service: _ServiceResolvers<ContextType>;
  customers: customersResolvers<ContextType>;
  customers_aggregate: customers_aggregateResolvers<ContextType>;
  customers_aggregate_fields: customers_aggregate_fieldsResolvers<ContextType>;
  customers_avg_fields: customers_avg_fieldsResolvers<ContextType>;
  customers_max_fields: customers_max_fieldsResolvers<ContextType>;
  customers_min_fields: customers_min_fieldsResolvers<ContextType>;
  customers_mutation_response: customers_mutation_responseResolvers<ContextType>;
  customers_stddev_fields: customers_stddev_fieldsResolvers<ContextType>;
  customers_stddev_pop_fields: customers_stddev_pop_fieldsResolvers<ContextType>;
  customers_stddev_samp_fields: customers_stddev_samp_fieldsResolvers<ContextType>;
  customers_sum_fields: customers_sum_fieldsResolvers<ContextType>;
  customers_var_pop_fields: customers_var_pop_fieldsResolvers<ContextType>;
  customers_var_samp_fields: customers_var_samp_fieldsResolvers<ContextType>;
  customers_variance_fields: customers_variance_fieldsResolvers<ContextType>;
  mutation_root: mutation_rootResolvers<ContextType>;
  query_root: query_rootResolvers<ContextType>;
  subscription_root: subscription_rootResolvers<ContextType>;
  tasks: tasksResolvers<ContextType>;
  tasks_aggregate: tasks_aggregateResolvers<ContextType>;
  tasks_aggregate_fields: tasks_aggregate_fieldsResolvers<ContextType>;
  tasks_avg_fields: tasks_avg_fieldsResolvers<ContextType>;
  tasks_max_fields: tasks_max_fieldsResolvers<ContextType>;
  tasks_min_fields: tasks_min_fieldsResolvers<ContextType>;
  tasks_mutation_response: tasks_mutation_responseResolvers<ContextType>;
  tasks_stddev_fields: tasks_stddev_fieldsResolvers<ContextType>;
  tasks_stddev_pop_fields: tasks_stddev_pop_fieldsResolvers<ContextType>;
  tasks_stddev_samp_fields: tasks_stddev_samp_fieldsResolvers<ContextType>;
  tasks_sum_fields: tasks_sum_fieldsResolvers<ContextType>;
  tasks_var_pop_fields: tasks_var_pop_fieldsResolvers<ContextType>;
  tasks_var_samp_fields: tasks_var_samp_fieldsResolvers<ContextType>;
  tasks_variance_fields: tasks_variance_fieldsResolvers<ContextType>;
  timestamp: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
  cached: cachedDirectiveResolver<any, any, ContextType>;
};
