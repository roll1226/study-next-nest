SET check_function_bodies = false;
CREATE TABLE public.customers (
    id smallint NOT NULL,
    first_name text,
    last_name text,
    email text,
    phone text,
    username text,
    ip_address text
);
COMMENT ON COLUMN public.customers.id IS 'ID';
COMMENT ON COLUMN public.customers.first_name IS '名';
COMMENT ON COLUMN public.customers.last_name IS '姓';
COMMENT ON COLUMN public.customers.email IS 'メールアドレス';
COMMENT ON COLUMN public.customers.phone IS '電話番号';
COMMENT ON COLUMN public.customers.username IS 'ユーザーネーム';
COMMENT ON COLUMN public.customers.ip_address IS 'IPアドレス';
CREATE SEQUENCE public.customers_id_seq
    AS smallint
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.customers_id_seq OWNED BY public.customers.id;
CREATE TABLE public.orders (
    id smallint NOT NULL,
    transaction_id text,
    product text,
    purchase_price text,
    discount_price text,
    order_date text,
    customer_id smallint
);
COMMENT ON COLUMN public.orders.id IS 'ID';
COMMENT ON COLUMN public.orders.transaction_id IS '取引ID';
COMMENT ON COLUMN public.orders.product IS '商品';
COMMENT ON COLUMN public.orders.purchase_price IS '購入価格';
COMMENT ON COLUMN public.orders.discount_price IS '割引価格';
COMMENT ON COLUMN public.orders.order_date IS '購入日';
COMMENT ON COLUMN public.orders.customer_id IS 'ID';
CREATE SEQUENCE public.orders_id_seq
    AS smallint
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;
ALTER TABLE ONLY public.customers ALTER COLUMN id SET DEFAULT nextval('public.customers_id_seq'::regclass);
ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);
ALTER TABLE ONLY public.customers
    ADD CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY (id);
ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY (id);
ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "FK_772d0ce0473ac2ccfa26060dbe9" FOREIGN KEY (customer_id) REFERENCES public.customers(id);
