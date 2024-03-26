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
  smallint: { input: any; output: any };
};

export type Customer = {
  __typename?: "Customer";
  email: Scalars["String"]["output"];
  first_name: Scalars["String"]["output"];
  id: Scalars["Float"]["output"];
  ip_address: Scalars["String"]["output"];
  last_name: Scalars["String"]["output"];
  orders: Array<Order>;
  phone: Scalars["String"]["output"];
  username: Scalars["String"]["output"];
};

export type FindCustomerDto = {
  id: Scalars["Float"]["input"];
};

export type FindOrderDto = {
  id: Scalars["Float"]["input"];
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

export type Order = {
  __typename?: "Order";
  customer: Customer;
  discount_price: Scalars["String"]["output"];
  id: Scalars["Float"]["output"];
  order_date: Scalars["String"]["output"];
  product: Scalars["String"]["output"];
  purchase_price: Scalars["String"]["output"];
  transaction_id: Scalars["String"]["output"];
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
  /** メールアドレス */
  email: Maybe<Scalars["String"]["output"]>;
  /** 名 */
  first_name: Maybe<Scalars["String"]["output"]>;
  /** ID */
  id: Scalars["smallint"]["output"];
  /** IPアドレス */
  ip_address: Maybe<Scalars["String"]["output"]>;
  /** 姓 */
  last_name: Maybe<Scalars["String"]["output"]>;
  /** An array relationship */
  orders: Array<orders>;
  /** An aggregate relationship */
  orders_aggregate: orders_aggregate;
  /** 電話番号 */
  phone: Maybe<Scalars["String"]["output"]>;
  /** ユーザーネーム */
  username: Maybe<Scalars["String"]["output"]>;
};

/** columns and relationships of "customers" */
export type customersordersArgs = {
  distinct_on: InputMaybe<Array<orders_select_column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<orders_order_by>>;
  where: InputMaybe<orders_bool_exp>;
};

/** columns and relationships of "customers" */
export type customersorders_aggregateArgs = {
  distinct_on: InputMaybe<Array<orders_select_column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<orders_order_by>>;
  where: InputMaybe<orders_bool_exp>;
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
  /** ID */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "customers". All fields are combined with a logical 'AND'. */
export type customers_bool_exp = {
  _and: InputMaybe<Array<customers_bool_exp>>;
  _not: InputMaybe<customers_bool_exp>;
  _or: InputMaybe<Array<customers_bool_exp>>;
  email: InputMaybe<String_comparison_exp>;
  first_name: InputMaybe<String_comparison_exp>;
  id: InputMaybe<smallint_comparison_exp>;
  ip_address: InputMaybe<String_comparison_exp>;
  last_name: InputMaybe<String_comparison_exp>;
  orders: InputMaybe<orders_bool_exp>;
  orders_aggregate: InputMaybe<orders_aggregate_bool_exp>;
  phone: InputMaybe<String_comparison_exp>;
  username: InputMaybe<String_comparison_exp>;
};

/** unique or primary key constraints on table "customers" */
export type customers_constraint =
  /** unique or primary key constraint on columns "id" */
  "PK_133ec679a801fab5e070f73d3ea";

/** input type for incrementing numeric columns in table "customers" */
export type customers_inc_input = {
  /** ID */
  id: InputMaybe<Scalars["smallint"]["input"]>;
};

/** input type for inserting data into table "customers" */
export type customers_insert_input = {
  /** メールアドレス */
  email: InputMaybe<Scalars["String"]["input"]>;
  /** 名 */
  first_name: InputMaybe<Scalars["String"]["input"]>;
  /** ID */
  id: InputMaybe<Scalars["smallint"]["input"]>;
  /** IPアドレス */
  ip_address: InputMaybe<Scalars["String"]["input"]>;
  /** 姓 */
  last_name: InputMaybe<Scalars["String"]["input"]>;
  orders: InputMaybe<orders_arr_rel_insert_input>;
  /** 電話番号 */
  phone: InputMaybe<Scalars["String"]["input"]>;
  /** ユーザーネーム */
  username: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type customers_max_fields = {
  __typename?: "customers_max_fields";
  /** メールアドレス */
  email: Maybe<Scalars["String"]["output"]>;
  /** 名 */
  first_name: Maybe<Scalars["String"]["output"]>;
  /** ID */
  id: Maybe<Scalars["smallint"]["output"]>;
  /** IPアドレス */
  ip_address: Maybe<Scalars["String"]["output"]>;
  /** 姓 */
  last_name: Maybe<Scalars["String"]["output"]>;
  /** 電話番号 */
  phone: Maybe<Scalars["String"]["output"]>;
  /** ユーザーネーム */
  username: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type customers_min_fields = {
  __typename?: "customers_min_fields";
  /** メールアドレス */
  email: Maybe<Scalars["String"]["output"]>;
  /** 名 */
  first_name: Maybe<Scalars["String"]["output"]>;
  /** ID */
  id: Maybe<Scalars["smallint"]["output"]>;
  /** IPアドレス */
  ip_address: Maybe<Scalars["String"]["output"]>;
  /** 姓 */
  last_name: Maybe<Scalars["String"]["output"]>;
  /** 電話番号 */
  phone: Maybe<Scalars["String"]["output"]>;
  /** ユーザーネーム */
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
  email: InputMaybe<order_by>;
  first_name: InputMaybe<order_by>;
  id: InputMaybe<order_by>;
  ip_address: InputMaybe<order_by>;
  last_name: InputMaybe<order_by>;
  orders_aggregate: InputMaybe<orders_aggregate_order_by>;
  phone: InputMaybe<order_by>;
  username: InputMaybe<order_by>;
};

/** primary key columns input for table: customers */
export type customers_pk_columns_input = {
  /** ID */
  id: Scalars["smallint"]["input"];
};

/** select columns of table "customers" */
export type customers_select_column =
  /** column name */
  | "email"
  /** column name */
  | "first_name"
  /** column name */
  | "id"
  /** column name */
  | "ip_address"
  /** column name */
  | "last_name"
  /** column name */
  | "phone"
  /** column name */
  | "username";

/** input type for updating data in table "customers" */
export type customers_set_input = {
  /** メールアドレス */
  email: InputMaybe<Scalars["String"]["input"]>;
  /** 名 */
  first_name: InputMaybe<Scalars["String"]["input"]>;
  /** ID */
  id: InputMaybe<Scalars["smallint"]["input"]>;
  /** IPアドレス */
  ip_address: InputMaybe<Scalars["String"]["input"]>;
  /** 姓 */
  last_name: InputMaybe<Scalars["String"]["input"]>;
  /** 電話番号 */
  phone: InputMaybe<Scalars["String"]["input"]>;
  /** ユーザーネーム */
  username: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type customers_stddev_fields = {
  __typename?: "customers_stddev_fields";
  /** ID */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type customers_stddev_pop_fields = {
  __typename?: "customers_stddev_pop_fields";
  /** ID */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type customers_stddev_samp_fields = {
  __typename?: "customers_stddev_samp_fields";
  /** ID */
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
  /** メールアドレス */
  email: InputMaybe<Scalars["String"]["input"]>;
  /** 名 */
  first_name: InputMaybe<Scalars["String"]["input"]>;
  /** ID */
  id: InputMaybe<Scalars["smallint"]["input"]>;
  /** IPアドレス */
  ip_address: InputMaybe<Scalars["String"]["input"]>;
  /** 姓 */
  last_name: InputMaybe<Scalars["String"]["input"]>;
  /** 電話番号 */
  phone: InputMaybe<Scalars["String"]["input"]>;
  /** ユーザーネーム */
  username: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type customers_sum_fields = {
  __typename?: "customers_sum_fields";
  /** ID */
  id: Maybe<Scalars["smallint"]["output"]>;
};

/** update columns of table "customers" */
export type customers_update_column =
  /** column name */
  | "email"
  /** column name */
  | "first_name"
  /** column name */
  | "id"
  /** column name */
  | "ip_address"
  /** column name */
  | "last_name"
  /** column name */
  | "phone"
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
  /** ID */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type customers_var_samp_fields = {
  __typename?: "customers_var_samp_fields";
  /** ID */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type customers_variance_fields = {
  __typename?: "customers_variance_fields";
  /** ID */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** mutation root */
export type mutation_root = {
  __typename?: "mutation_root";
  /** delete data from the table: "customers" */
  delete_customers: Maybe<customers_mutation_response>;
  /** delete single row from the table: "customers" */
  delete_customers_by_pk: Maybe<customers>;
  /** delete data from the table: "orders" */
  delete_orders: Maybe<orders_mutation_response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk: Maybe<orders>;
  /** insert data into the table: "customers" */
  insert_customers: Maybe<customers_mutation_response>;
  /** insert a single row into the table: "customers" */
  insert_customers_one: Maybe<customers>;
  /** insert data into the table: "orders" */
  insert_orders: Maybe<orders_mutation_response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one: Maybe<orders>;
  /** update data of the table: "customers" */
  update_customers: Maybe<customers_mutation_response>;
  /** update single row of the table: "customers" */
  update_customers_by_pk: Maybe<customers>;
  /** update multiples rows of table: "customers" */
  update_customers_many: Maybe<Array<Maybe<customers_mutation_response>>>;
  /** update data of the table: "orders" */
  update_orders: Maybe<orders_mutation_response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk: Maybe<orders>;
  /** update multiples rows of table: "orders" */
  update_orders_many: Maybe<Array<Maybe<orders_mutation_response>>>;
};

/** mutation root */
export type mutation_rootdelete_customersArgs = {
  where: customers_bool_exp;
};

/** mutation root */
export type mutation_rootdelete_customers_by_pkArgs = {
  id: Scalars["smallint"]["input"];
};

/** mutation root */
export type mutation_rootdelete_ordersArgs = {
  where: orders_bool_exp;
};

/** mutation root */
export type mutation_rootdelete_orders_by_pkArgs = {
  id: Scalars["smallint"]["input"];
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
export type mutation_rootinsert_ordersArgs = {
  objects: Array<orders_insert_input>;
  on_conflict: InputMaybe<orders_on_conflict>;
};

/** mutation root */
export type mutation_rootinsert_orders_oneArgs = {
  object: orders_insert_input;
  on_conflict: InputMaybe<orders_on_conflict>;
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
export type mutation_rootupdate_ordersArgs = {
  _inc: InputMaybe<orders_inc_input>;
  _set: InputMaybe<orders_set_input>;
  where: orders_bool_exp;
};

/** mutation root */
export type mutation_rootupdate_orders_by_pkArgs = {
  _inc: InputMaybe<orders_inc_input>;
  _set: InputMaybe<orders_set_input>;
  pk_columns: orders_pk_columns_input;
};

/** mutation root */
export type mutation_rootupdate_orders_manyArgs = {
  updates: Array<orders_updates>;
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

/** columns and relationships of "orders" */
export type orders = {
  __typename?: "orders";
  /** An object relationship */
  customer: Maybe<customers>;
  /** ID */
  customer_id: Maybe<Scalars["smallint"]["output"]>;
  /** 割引価格 */
  discount_price: Maybe<Scalars["String"]["output"]>;
  /** ID */
  id: Scalars["smallint"]["output"];
  /** 購入日 */
  order_date: Maybe<Scalars["String"]["output"]>;
  /** 商品 */
  product: Maybe<Scalars["String"]["output"]>;
  /** 購入価格 */
  purchase_price: Maybe<Scalars["String"]["output"]>;
  /** 取引ID */
  transaction_id: Maybe<Scalars["String"]["output"]>;
};

/** aggregated selection of "orders" */
export type orders_aggregate = {
  __typename?: "orders_aggregate";
  aggregate: Maybe<orders_aggregate_fields>;
  nodes: Array<orders>;
};

export type orders_aggregate_bool_exp = {
  count: InputMaybe<orders_aggregate_bool_exp_count>;
};

export type orders_aggregate_bool_exp_count = {
  arguments: InputMaybe<Array<orders_select_column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<orders_bool_exp>;
  predicate: Int_comparison_exp;
};

/** aggregate fields of "orders" */
export type orders_aggregate_fields = {
  __typename?: "orders_aggregate_fields";
  avg: Maybe<orders_avg_fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<orders_max_fields>;
  min: Maybe<orders_min_fields>;
  stddev: Maybe<orders_stddev_fields>;
  stddev_pop: Maybe<orders_stddev_pop_fields>;
  stddev_samp: Maybe<orders_stddev_samp_fields>;
  sum: Maybe<orders_sum_fields>;
  var_pop: Maybe<orders_var_pop_fields>;
  var_samp: Maybe<orders_var_samp_fields>;
  variance: Maybe<orders_variance_fields>;
};

/** aggregate fields of "orders" */
export type orders_aggregate_fieldscountArgs = {
  columns: InputMaybe<Array<orders_select_column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "orders" */
export type orders_aggregate_order_by = {
  avg: InputMaybe<orders_avg_order_by>;
  count: InputMaybe<order_by>;
  max: InputMaybe<orders_max_order_by>;
  min: InputMaybe<orders_min_order_by>;
  stddev: InputMaybe<orders_stddev_order_by>;
  stddev_pop: InputMaybe<orders_stddev_pop_order_by>;
  stddev_samp: InputMaybe<orders_stddev_samp_order_by>;
  sum: InputMaybe<orders_sum_order_by>;
  var_pop: InputMaybe<orders_var_pop_order_by>;
  var_samp: InputMaybe<orders_var_samp_order_by>;
  variance: InputMaybe<orders_variance_order_by>;
};

/** input type for inserting array relation for remote table "orders" */
export type orders_arr_rel_insert_input = {
  data: Array<orders_insert_input>;
  /** upsert condition */
  on_conflict: InputMaybe<orders_on_conflict>;
};

/** aggregate avg on columns */
export type orders_avg_fields = {
  __typename?: "orders_avg_fields";
  /** ID */
  customer_id: Maybe<Scalars["Float"]["output"]>;
  /** ID */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "orders" */
export type orders_avg_order_by = {
  /** ID */
  customer_id: InputMaybe<order_by>;
  /** ID */
  id: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type orders_bool_exp = {
  _and: InputMaybe<Array<orders_bool_exp>>;
  _not: InputMaybe<orders_bool_exp>;
  _or: InputMaybe<Array<orders_bool_exp>>;
  customer: InputMaybe<customers_bool_exp>;
  customer_id: InputMaybe<smallint_comparison_exp>;
  discount_price: InputMaybe<String_comparison_exp>;
  id: InputMaybe<smallint_comparison_exp>;
  order_date: InputMaybe<String_comparison_exp>;
  product: InputMaybe<String_comparison_exp>;
  purchase_price: InputMaybe<String_comparison_exp>;
  transaction_id: InputMaybe<String_comparison_exp>;
};

/** unique or primary key constraints on table "orders" */
export type orders_constraint =
  /** unique or primary key constraint on columns "id" */
  "PK_710e2d4957aa5878dfe94e4ac2f";

/** input type for incrementing numeric columns in table "orders" */
export type orders_inc_input = {
  /** ID */
  customer_id: InputMaybe<Scalars["smallint"]["input"]>;
  /** ID */
  id: InputMaybe<Scalars["smallint"]["input"]>;
};

/** input type for inserting data into table "orders" */
export type orders_insert_input = {
  customer: InputMaybe<customers_obj_rel_insert_input>;
  /** ID */
  customer_id: InputMaybe<Scalars["smallint"]["input"]>;
  /** 割引価格 */
  discount_price: InputMaybe<Scalars["String"]["input"]>;
  /** ID */
  id: InputMaybe<Scalars["smallint"]["input"]>;
  /** 購入日 */
  order_date: InputMaybe<Scalars["String"]["input"]>;
  /** 商品 */
  product: InputMaybe<Scalars["String"]["input"]>;
  /** 購入価格 */
  purchase_price: InputMaybe<Scalars["String"]["input"]>;
  /** 取引ID */
  transaction_id: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type orders_max_fields = {
  __typename?: "orders_max_fields";
  /** ID */
  customer_id: Maybe<Scalars["smallint"]["output"]>;
  /** 割引価格 */
  discount_price: Maybe<Scalars["String"]["output"]>;
  /** ID */
  id: Maybe<Scalars["smallint"]["output"]>;
  /** 購入日 */
  order_date: Maybe<Scalars["String"]["output"]>;
  /** 商品 */
  product: Maybe<Scalars["String"]["output"]>;
  /** 購入価格 */
  purchase_price: Maybe<Scalars["String"]["output"]>;
  /** 取引ID */
  transaction_id: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "orders" */
export type orders_max_order_by = {
  /** ID */
  customer_id: InputMaybe<order_by>;
  /** 割引価格 */
  discount_price: InputMaybe<order_by>;
  /** ID */
  id: InputMaybe<order_by>;
  /** 購入日 */
  order_date: InputMaybe<order_by>;
  /** 商品 */
  product: InputMaybe<order_by>;
  /** 購入価格 */
  purchase_price: InputMaybe<order_by>;
  /** 取引ID */
  transaction_id: InputMaybe<order_by>;
};

/** aggregate min on columns */
export type orders_min_fields = {
  __typename?: "orders_min_fields";
  /** ID */
  customer_id: Maybe<Scalars["smallint"]["output"]>;
  /** 割引価格 */
  discount_price: Maybe<Scalars["String"]["output"]>;
  /** ID */
  id: Maybe<Scalars["smallint"]["output"]>;
  /** 購入日 */
  order_date: Maybe<Scalars["String"]["output"]>;
  /** 商品 */
  product: Maybe<Scalars["String"]["output"]>;
  /** 購入価格 */
  purchase_price: Maybe<Scalars["String"]["output"]>;
  /** 取引ID */
  transaction_id: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "orders" */
export type orders_min_order_by = {
  /** ID */
  customer_id: InputMaybe<order_by>;
  /** 割引価格 */
  discount_price: InputMaybe<order_by>;
  /** ID */
  id: InputMaybe<order_by>;
  /** 購入日 */
  order_date: InputMaybe<order_by>;
  /** 商品 */
  product: InputMaybe<order_by>;
  /** 購入価格 */
  purchase_price: InputMaybe<order_by>;
  /** 取引ID */
  transaction_id: InputMaybe<order_by>;
};

/** response of any mutation on the table "orders" */
export type orders_mutation_response = {
  __typename?: "orders_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<orders>;
};

/** on_conflict condition type for table "orders" */
export type orders_on_conflict = {
  constraint: orders_constraint;
  update_columns: Array<orders_update_column>;
  where: InputMaybe<orders_bool_exp>;
};

/** Ordering options when selecting data from "orders". */
export type orders_order_by = {
  customer: InputMaybe<customers_order_by>;
  customer_id: InputMaybe<order_by>;
  discount_price: InputMaybe<order_by>;
  id: InputMaybe<order_by>;
  order_date: InputMaybe<order_by>;
  product: InputMaybe<order_by>;
  purchase_price: InputMaybe<order_by>;
  transaction_id: InputMaybe<order_by>;
};

/** primary key columns input for table: orders */
export type orders_pk_columns_input = {
  /** ID */
  id: Scalars["smallint"]["input"];
};

/** select columns of table "orders" */
export type orders_select_column =
  /** column name */
  | "customer_id"
  /** column name */
  | "discount_price"
  /** column name */
  | "id"
  /** column name */
  | "order_date"
  /** column name */
  | "product"
  /** column name */
  | "purchase_price"
  /** column name */
  | "transaction_id";

/** input type for updating data in table "orders" */
export type orders_set_input = {
  /** ID */
  customer_id: InputMaybe<Scalars["smallint"]["input"]>;
  /** 割引価格 */
  discount_price: InputMaybe<Scalars["String"]["input"]>;
  /** ID */
  id: InputMaybe<Scalars["smallint"]["input"]>;
  /** 購入日 */
  order_date: InputMaybe<Scalars["String"]["input"]>;
  /** 商品 */
  product: InputMaybe<Scalars["String"]["input"]>;
  /** 購入価格 */
  purchase_price: InputMaybe<Scalars["String"]["input"]>;
  /** 取引ID */
  transaction_id: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type orders_stddev_fields = {
  __typename?: "orders_stddev_fields";
  /** ID */
  customer_id: Maybe<Scalars["Float"]["output"]>;
  /** ID */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "orders" */
export type orders_stddev_order_by = {
  /** ID */
  customer_id: InputMaybe<order_by>;
  /** ID */
  id: InputMaybe<order_by>;
};

/** aggregate stddev_pop on columns */
export type orders_stddev_pop_fields = {
  __typename?: "orders_stddev_pop_fields";
  /** ID */
  customer_id: Maybe<Scalars["Float"]["output"]>;
  /** ID */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "orders" */
export type orders_stddev_pop_order_by = {
  /** ID */
  customer_id: InputMaybe<order_by>;
  /** ID */
  id: InputMaybe<order_by>;
};

/** aggregate stddev_samp on columns */
export type orders_stddev_samp_fields = {
  __typename?: "orders_stddev_samp_fields";
  /** ID */
  customer_id: Maybe<Scalars["Float"]["output"]>;
  /** ID */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "orders" */
export type orders_stddev_samp_order_by = {
  /** ID */
  customer_id: InputMaybe<order_by>;
  /** ID */
  id: InputMaybe<order_by>;
};

/** Streaming cursor of the table "orders" */
export type orders_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: orders_stream_cursor_value_input;
  /** cursor ordering */
  ordering: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type orders_stream_cursor_value_input = {
  /** ID */
  customer_id: InputMaybe<Scalars["smallint"]["input"]>;
  /** 割引価格 */
  discount_price: InputMaybe<Scalars["String"]["input"]>;
  /** ID */
  id: InputMaybe<Scalars["smallint"]["input"]>;
  /** 購入日 */
  order_date: InputMaybe<Scalars["String"]["input"]>;
  /** 商品 */
  product: InputMaybe<Scalars["String"]["input"]>;
  /** 購入価格 */
  purchase_price: InputMaybe<Scalars["String"]["input"]>;
  /** 取引ID */
  transaction_id: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type orders_sum_fields = {
  __typename?: "orders_sum_fields";
  /** ID */
  customer_id: Maybe<Scalars["smallint"]["output"]>;
  /** ID */
  id: Maybe<Scalars["smallint"]["output"]>;
};

/** order by sum() on columns of table "orders" */
export type orders_sum_order_by = {
  /** ID */
  customer_id: InputMaybe<order_by>;
  /** ID */
  id: InputMaybe<order_by>;
};

/** update columns of table "orders" */
export type orders_update_column =
  /** column name */
  | "customer_id"
  /** column name */
  | "discount_price"
  /** column name */
  | "id"
  /** column name */
  | "order_date"
  /** column name */
  | "product"
  /** column name */
  | "purchase_price"
  /** column name */
  | "transaction_id";

export type orders_updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<orders_inc_input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<orders_set_input>;
  /** filter the rows which have to be updated */
  where: orders_bool_exp;
};

/** aggregate var_pop on columns */
export type orders_var_pop_fields = {
  __typename?: "orders_var_pop_fields";
  /** ID */
  customer_id: Maybe<Scalars["Float"]["output"]>;
  /** ID */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "orders" */
export type orders_var_pop_order_by = {
  /** ID */
  customer_id: InputMaybe<order_by>;
  /** ID */
  id: InputMaybe<order_by>;
};

/** aggregate var_samp on columns */
export type orders_var_samp_fields = {
  __typename?: "orders_var_samp_fields";
  /** ID */
  customer_id: Maybe<Scalars["Float"]["output"]>;
  /** ID */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "orders" */
export type orders_var_samp_order_by = {
  /** ID */
  customer_id: InputMaybe<order_by>;
  /** ID */
  id: InputMaybe<order_by>;
};

/** aggregate variance on columns */
export type orders_variance_fields = {
  __typename?: "orders_variance_fields";
  /** ID */
  customer_id: Maybe<Scalars["Float"]["output"]>;
  /** ID */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "orders" */
export type orders_variance_order_by = {
  /** ID */
  customer_id: InputMaybe<order_by>;
  /** ID */
  id: InputMaybe<order_by>;
};

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
  getCustomerAll: Array<Customer>;
  getOrder: Order;
  /** An array relationship */
  orders: Array<orders>;
  /** An aggregate relationship */
  orders_aggregate: orders_aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk: Maybe<orders>;
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
  id: Scalars["smallint"]["input"];
};

export type query_rootgetCustomerArgs = {
  findCustomer: FindCustomerDto;
};

export type query_rootgetOrderArgs = {
  findOrder: FindOrderDto;
};

export type query_rootordersArgs = {
  distinct_on: InputMaybe<Array<orders_select_column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<orders_order_by>>;
  where: InputMaybe<orders_bool_exp>;
};

export type query_rootorders_aggregateArgs = {
  distinct_on: InputMaybe<Array<orders_select_column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<orders_order_by>>;
  where: InputMaybe<orders_bool_exp>;
};

export type query_rootorders_by_pkArgs = {
  id: Scalars["smallint"]["input"];
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type smallint_comparison_exp = {
  _eq: InputMaybe<Scalars["smallint"]["input"]>;
  _gt: InputMaybe<Scalars["smallint"]["input"]>;
  _gte: InputMaybe<Scalars["smallint"]["input"]>;
  _in: InputMaybe<Array<Scalars["smallint"]["input"]>>;
  _is_null: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt: InputMaybe<Scalars["smallint"]["input"]>;
  _lte: InputMaybe<Scalars["smallint"]["input"]>;
  _neq: InputMaybe<Scalars["smallint"]["input"]>;
  _nin: InputMaybe<Array<Scalars["smallint"]["input"]>>;
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
  orders: Array<orders>;
  /** An aggregate relationship */
  orders_aggregate: orders_aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk: Maybe<orders>;
  /** fetch data from the table in a streaming manner: "orders" */
  orders_stream: Array<orders>;
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
  id: Scalars["smallint"]["input"];
};

export type subscription_rootcustomers_streamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<customers_stream_cursor_input>>;
  where: InputMaybe<customers_bool_exp>;
};

export type subscription_rootordersArgs = {
  distinct_on: InputMaybe<Array<orders_select_column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<orders_order_by>>;
  where: InputMaybe<orders_bool_exp>;
};

export type subscription_rootorders_aggregateArgs = {
  distinct_on: InputMaybe<Array<orders_select_column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<orders_order_by>>;
  where: InputMaybe<orders_bool_exp>;
};

export type subscription_rootorders_by_pkArgs = {
  id: Scalars["smallint"]["input"];
};

export type subscription_rootorders_streamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<orders_stream_cursor_input>>;
  where: InputMaybe<orders_bool_exp>;
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
  FindCustomerDto: FindCustomerDto;
  FindOrderDto: FindOrderDto;
  Float: ResolverTypeWrapper<Scalars["Float"]["output"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  Int_comparison_exp: Int_comparison_exp;
  Order: ResolverTypeWrapper<Order>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  String_comparison_exp: String_comparison_exp;
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
  orders: ResolverTypeWrapper<orders>;
  orders_aggregate: ResolverTypeWrapper<orders_aggregate>;
  orders_aggregate_bool_exp: orders_aggregate_bool_exp;
  orders_aggregate_bool_exp_count: orders_aggregate_bool_exp_count;
  orders_aggregate_fields: ResolverTypeWrapper<orders_aggregate_fields>;
  orders_aggregate_order_by: orders_aggregate_order_by;
  orders_arr_rel_insert_input: orders_arr_rel_insert_input;
  orders_avg_fields: ResolverTypeWrapper<orders_avg_fields>;
  orders_avg_order_by: orders_avg_order_by;
  orders_bool_exp: orders_bool_exp;
  orders_constraint: orders_constraint;
  orders_inc_input: orders_inc_input;
  orders_insert_input: orders_insert_input;
  orders_max_fields: ResolverTypeWrapper<orders_max_fields>;
  orders_max_order_by: orders_max_order_by;
  orders_min_fields: ResolverTypeWrapper<orders_min_fields>;
  orders_min_order_by: orders_min_order_by;
  orders_mutation_response: ResolverTypeWrapper<orders_mutation_response>;
  orders_on_conflict: orders_on_conflict;
  orders_order_by: orders_order_by;
  orders_pk_columns_input: orders_pk_columns_input;
  orders_select_column: orders_select_column;
  orders_set_input: orders_set_input;
  orders_stddev_fields: ResolverTypeWrapper<orders_stddev_fields>;
  orders_stddev_order_by: orders_stddev_order_by;
  orders_stddev_pop_fields: ResolverTypeWrapper<orders_stddev_pop_fields>;
  orders_stddev_pop_order_by: orders_stddev_pop_order_by;
  orders_stddev_samp_fields: ResolverTypeWrapper<orders_stddev_samp_fields>;
  orders_stddev_samp_order_by: orders_stddev_samp_order_by;
  orders_stream_cursor_input: orders_stream_cursor_input;
  orders_stream_cursor_value_input: orders_stream_cursor_value_input;
  orders_sum_fields: ResolverTypeWrapper<orders_sum_fields>;
  orders_sum_order_by: orders_sum_order_by;
  orders_update_column: orders_update_column;
  orders_updates: orders_updates;
  orders_var_pop_fields: ResolverTypeWrapper<orders_var_pop_fields>;
  orders_var_pop_order_by: orders_var_pop_order_by;
  orders_var_samp_fields: ResolverTypeWrapper<orders_var_samp_fields>;
  orders_var_samp_order_by: orders_var_samp_order_by;
  orders_variance_fields: ResolverTypeWrapper<orders_variance_fields>;
  orders_variance_order_by: orders_variance_order_by;
  query_root: ResolverTypeWrapper<{}>;
  smallint: ResolverTypeWrapper<Scalars["smallint"]["output"]>;
  smallint_comparison_exp: smallint_comparison_exp;
  subscription_root: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"]["output"];
  Customer: Customer;
  FindCustomerDto: FindCustomerDto;
  FindOrderDto: FindOrderDto;
  Float: Scalars["Float"]["output"];
  Int: Scalars["Int"]["output"];
  Int_comparison_exp: Int_comparison_exp;
  Order: Order;
  String: Scalars["String"]["output"];
  String_comparison_exp: String_comparison_exp;
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
  orders: orders;
  orders_aggregate: orders_aggregate;
  orders_aggregate_bool_exp: orders_aggregate_bool_exp;
  orders_aggregate_bool_exp_count: orders_aggregate_bool_exp_count;
  orders_aggregate_fields: orders_aggregate_fields;
  orders_aggregate_order_by: orders_aggregate_order_by;
  orders_arr_rel_insert_input: orders_arr_rel_insert_input;
  orders_avg_fields: orders_avg_fields;
  orders_avg_order_by: orders_avg_order_by;
  orders_bool_exp: orders_bool_exp;
  orders_inc_input: orders_inc_input;
  orders_insert_input: orders_insert_input;
  orders_max_fields: orders_max_fields;
  orders_max_order_by: orders_max_order_by;
  orders_min_fields: orders_min_fields;
  orders_min_order_by: orders_min_order_by;
  orders_mutation_response: orders_mutation_response;
  orders_on_conflict: orders_on_conflict;
  orders_order_by: orders_order_by;
  orders_pk_columns_input: orders_pk_columns_input;
  orders_set_input: orders_set_input;
  orders_stddev_fields: orders_stddev_fields;
  orders_stddev_order_by: orders_stddev_order_by;
  orders_stddev_pop_fields: orders_stddev_pop_fields;
  orders_stddev_pop_order_by: orders_stddev_pop_order_by;
  orders_stddev_samp_fields: orders_stddev_samp_fields;
  orders_stddev_samp_order_by: orders_stddev_samp_order_by;
  orders_stream_cursor_input: orders_stream_cursor_input;
  orders_stream_cursor_value_input: orders_stream_cursor_value_input;
  orders_sum_fields: orders_sum_fields;
  orders_sum_order_by: orders_sum_order_by;
  orders_updates: orders_updates;
  orders_var_pop_fields: orders_var_pop_fields;
  orders_var_pop_order_by: orders_var_pop_order_by;
  orders_var_samp_fields: orders_var_samp_fields;
  orders_var_samp_order_by: orders_var_samp_order_by;
  orders_variance_fields: orders_variance_fields;
  orders_variance_order_by: orders_variance_order_by;
  query_root: {};
  smallint: Scalars["smallint"]["output"];
  smallint_comparison_exp: smallint_comparison_exp;
  subscription_root: {};
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
  email: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  first_name: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  ip_address: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  last_name: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  orders: Resolver<Array<ResolversTypes["Order"]>, ParentType, ContextType>;
  phone: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  username: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Order"] = ResolversParentTypes["Order"],
> = {
  customer: Resolver<ResolversTypes["Customer"], ParentType, ContextType>;
  discount_price: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  order_date: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  product: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  purchase_price: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  transaction_id: Resolver<ResolversTypes["String"], ParentType, ContextType>;
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
  email: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  first_name: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id: Resolver<ResolversTypes["smallint"], ParentType, ContextType>;
  ip_address: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  last_name: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  orders: Resolver<
    Array<ResolversTypes["orders"]>,
    ParentType,
    ContextType,
    customersordersArgs
  >;
  orders_aggregate: Resolver<
    ResolversTypes["orders_aggregate"],
    ParentType,
    ContextType,
    customersorders_aggregateArgs
  >;
  phone: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  username: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
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
  email: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  first_name: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id: Resolver<Maybe<ResolversTypes["smallint"]>, ParentType, ContextType>;
  ip_address: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  last_name: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  phone: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  username: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type customers_min_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["customers_min_fields"] = ResolversParentTypes["customers_min_fields"],
> = {
  email: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  first_name: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id: Resolver<Maybe<ResolversTypes["smallint"]>, ParentType, ContextType>;
  ip_address: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  last_name: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  phone: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
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
  id: Resolver<Maybe<ResolversTypes["smallint"]>, ParentType, ContextType>;
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
  delete_orders: Resolver<
    Maybe<ResolversTypes["orders_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<mutation_rootdelete_ordersArgs, "where">
  >;
  delete_orders_by_pk: Resolver<
    Maybe<ResolversTypes["orders"]>,
    ParentType,
    ContextType,
    RequireFields<mutation_rootdelete_orders_by_pkArgs, "id">
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
  insert_orders: Resolver<
    Maybe<ResolversTypes["orders_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<mutation_rootinsert_ordersArgs, "objects">
  >;
  insert_orders_one: Resolver<
    Maybe<ResolversTypes["orders"]>,
    ParentType,
    ContextType,
    RequireFields<mutation_rootinsert_orders_oneArgs, "object">
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
  update_orders: Resolver<
    Maybe<ResolversTypes["orders_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<mutation_rootupdate_ordersArgs, "where">
  >;
  update_orders_by_pk: Resolver<
    Maybe<ResolversTypes["orders"]>,
    ParentType,
    ContextType,
    RequireFields<mutation_rootupdate_orders_by_pkArgs, "pk_columns">
  >;
  update_orders_many: Resolver<
    Maybe<Array<Maybe<ResolversTypes["orders_mutation_response"]>>>,
    ParentType,
    ContextType,
    RequireFields<mutation_rootupdate_orders_manyArgs, "updates">
  >;
};

export type ordersResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["orders"] = ResolversParentTypes["orders"],
> = {
  customer: Resolver<
    Maybe<ResolversTypes["customers"]>,
    ParentType,
    ContextType
  >;
  customer_id: Resolver<
    Maybe<ResolversTypes["smallint"]>,
    ParentType,
    ContextType
  >;
  discount_price: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id: Resolver<ResolversTypes["smallint"], ParentType, ContextType>;
  order_date: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  product: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  purchase_price: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  transaction_id: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type orders_aggregateResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["orders_aggregate"] = ResolversParentTypes["orders_aggregate"],
> = {
  aggregate: Resolver<
    Maybe<ResolversTypes["orders_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes: Resolver<Array<ResolversTypes["orders"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type orders_aggregate_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["orders_aggregate_fields"] = ResolversParentTypes["orders_aggregate_fields"],
> = {
  avg: Resolver<
    Maybe<ResolversTypes["orders_avg_fields"]>,
    ParentType,
    ContextType
  >;
  count: Resolver<
    ResolversTypes["Int"],
    ParentType,
    ContextType,
    orders_aggregate_fieldscountArgs
  >;
  max: Resolver<
    Maybe<ResolversTypes["orders_max_fields"]>,
    ParentType,
    ContextType
  >;
  min: Resolver<
    Maybe<ResolversTypes["orders_min_fields"]>,
    ParentType,
    ContextType
  >;
  stddev: Resolver<
    Maybe<ResolversTypes["orders_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop: Resolver<
    Maybe<ResolversTypes["orders_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp: Resolver<
    Maybe<ResolversTypes["orders_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum: Resolver<
    Maybe<ResolversTypes["orders_sum_fields"]>,
    ParentType,
    ContextType
  >;
  var_pop: Resolver<
    Maybe<ResolversTypes["orders_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp: Resolver<
    Maybe<ResolversTypes["orders_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance: Resolver<
    Maybe<ResolversTypes["orders_variance_fields"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type orders_avg_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["orders_avg_fields"] = ResolversParentTypes["orders_avg_fields"],
> = {
  customer_id: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type orders_max_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["orders_max_fields"] = ResolversParentTypes["orders_max_fields"],
> = {
  customer_id: Resolver<
    Maybe<ResolversTypes["smallint"]>,
    ParentType,
    ContextType
  >;
  discount_price: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id: Resolver<Maybe<ResolversTypes["smallint"]>, ParentType, ContextType>;
  order_date: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  product: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  purchase_price: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  transaction_id: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type orders_min_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["orders_min_fields"] = ResolversParentTypes["orders_min_fields"],
> = {
  customer_id: Resolver<
    Maybe<ResolversTypes["smallint"]>,
    ParentType,
    ContextType
  >;
  discount_price: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id: Resolver<Maybe<ResolversTypes["smallint"]>, ParentType, ContextType>;
  order_date: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  product: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  purchase_price: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  transaction_id: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type orders_mutation_responseResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["orders_mutation_response"] = ResolversParentTypes["orders_mutation_response"],
> = {
  affected_rows: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning: Resolver<Array<ResolversTypes["orders"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type orders_stddev_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["orders_stddev_fields"] = ResolversParentTypes["orders_stddev_fields"],
> = {
  customer_id: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type orders_stddev_pop_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["orders_stddev_pop_fields"] = ResolversParentTypes["orders_stddev_pop_fields"],
> = {
  customer_id: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type orders_stddev_samp_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["orders_stddev_samp_fields"] = ResolversParentTypes["orders_stddev_samp_fields"],
> = {
  customer_id: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type orders_sum_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["orders_sum_fields"] = ResolversParentTypes["orders_sum_fields"],
> = {
  customer_id: Resolver<
    Maybe<ResolversTypes["smallint"]>,
    ParentType,
    ContextType
  >;
  id: Resolver<Maybe<ResolversTypes["smallint"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type orders_var_pop_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["orders_var_pop_fields"] = ResolversParentTypes["orders_var_pop_fields"],
> = {
  customer_id: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type orders_var_samp_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["orders_var_samp_fields"] = ResolversParentTypes["orders_var_samp_fields"],
> = {
  customer_id: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type orders_variance_fieldsResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["orders_variance_fields"] = ResolversParentTypes["orders_variance_fields"],
> = {
  customer_id: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
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
    RequireFields<query_rootgetCustomerArgs, "findCustomer">
  >;
  getCustomerAll: Resolver<
    Array<ResolversTypes["Customer"]>,
    ParentType,
    ContextType
  >;
  getOrder: Resolver<
    ResolversTypes["Order"],
    ParentType,
    ContextType,
    RequireFields<query_rootgetOrderArgs, "findOrder">
  >;
  orders: Resolver<
    Array<ResolversTypes["orders"]>,
    ParentType,
    ContextType,
    query_rootordersArgs
  >;
  orders_aggregate: Resolver<
    ResolversTypes["orders_aggregate"],
    ParentType,
    ContextType,
    query_rootorders_aggregateArgs
  >;
  orders_by_pk: Resolver<
    Maybe<ResolversTypes["orders"]>,
    ParentType,
    ContextType,
    RequireFields<query_rootorders_by_pkArgs, "id">
  >;
};

export interface smallintScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["smallint"], any> {
  name: "smallint";
}

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
  orders: SubscriptionResolver<
    Array<ResolversTypes["orders"]>,
    "orders",
    ParentType,
    ContextType,
    subscription_rootordersArgs
  >;
  orders_aggregate: SubscriptionResolver<
    ResolversTypes["orders_aggregate"],
    "orders_aggregate",
    ParentType,
    ContextType,
    subscription_rootorders_aggregateArgs
  >;
  orders_by_pk: SubscriptionResolver<
    Maybe<ResolversTypes["orders"]>,
    "orders_by_pk",
    ParentType,
    ContextType,
    RequireFields<subscription_rootorders_by_pkArgs, "id">
  >;
  orders_stream: SubscriptionResolver<
    Array<ResolversTypes["orders"]>,
    "orders_stream",
    ParentType,
    ContextType,
    RequireFields<subscription_rootorders_streamArgs, "batch_size" | "cursor">
  >;
};

export type Resolvers<ContextType = any> = {
  Customer: CustomerResolvers<ContextType>;
  Order: OrderResolvers<ContextType>;
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
  orders: ordersResolvers<ContextType>;
  orders_aggregate: orders_aggregateResolvers<ContextType>;
  orders_aggregate_fields: orders_aggregate_fieldsResolvers<ContextType>;
  orders_avg_fields: orders_avg_fieldsResolvers<ContextType>;
  orders_max_fields: orders_max_fieldsResolvers<ContextType>;
  orders_min_fields: orders_min_fieldsResolvers<ContextType>;
  orders_mutation_response: orders_mutation_responseResolvers<ContextType>;
  orders_stddev_fields: orders_stddev_fieldsResolvers<ContextType>;
  orders_stddev_pop_fields: orders_stddev_pop_fieldsResolvers<ContextType>;
  orders_stddev_samp_fields: orders_stddev_samp_fieldsResolvers<ContextType>;
  orders_sum_fields: orders_sum_fieldsResolvers<ContextType>;
  orders_var_pop_fields: orders_var_pop_fieldsResolvers<ContextType>;
  orders_var_samp_fields: orders_var_samp_fieldsResolvers<ContextType>;
  orders_variance_fields: orders_variance_fieldsResolvers<ContextType>;
  query_root: query_rootResolvers<ContextType>;
  smallint: GraphQLScalarType;
  subscription_root: subscription_rootResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  cached: cachedDirectiveResolver<any, any, ContextType>;
};
