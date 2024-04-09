SET check_function_bodies = false;
CREATE TABLE public.customers (
    id integer NOT NULL,
    username text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);
COMMENT ON COLUMN public.customers.id IS 'Customer ID';
COMMENT ON COLUMN public.customers.username IS 'ユーザーネーム';
COMMENT ON COLUMN public.customers.created_at IS '作成日時';
COMMENT ON COLUMN public.customers.updated_at IS '更新日時';
CREATE SEQUENCE public.customers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.customers_id_seq OWNED BY public.customers.id;
CREATE TABLE public.tasks (
    id integer NOT NULL,
    name text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    customer_id integer
);
COMMENT ON COLUMN public.tasks.id IS 'タスクID';
COMMENT ON COLUMN public.tasks.name IS 'タスク名';
COMMENT ON COLUMN public.tasks.created_at IS '作成日時';
COMMENT ON COLUMN public.tasks.updated_at IS '更新日時';
COMMENT ON COLUMN public.tasks.customer_id IS 'Customer ID';
CREATE SEQUENCE public.tasks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.tasks_id_seq OWNED BY public.tasks.id;
ALTER TABLE ONLY public.customers ALTER COLUMN id SET DEFAULT nextval('public.customers_id_seq'::regclass);
ALTER TABLE ONLY public.tasks ALTER COLUMN id SET DEFAULT nextval('public.tasks_id_seq'::regclass);
ALTER TABLE ONLY public.customers
    ADD CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY (id);
ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY (id);
ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT "FK_29772181f6dc10bb4b4a571eafc" FOREIGN KEY (customer_id) REFERENCES public.customers(id);
