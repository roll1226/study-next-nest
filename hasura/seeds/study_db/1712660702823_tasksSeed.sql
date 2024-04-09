SET check_function_bodies = false;
INSERT INTO public.tasks (id, name, created_at, updated_at, customer_id) VALUES (2, 'test1', '2024-04-09 19:59:40.112493', '2024-04-09 19:59:40.112493', 1);
INSERT INTO public.tasks (id, name, created_at, updated_at, customer_id) VALUES (3, 'test2', '2024-04-09 20:02:32.037836', '2024-04-09 20:02:32.037836', 1);
SELECT pg_catalog.setval('public.tasks_id_seq', 3, true);
