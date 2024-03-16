DIRECTORIES = frontend backend
install: $(addprefix install-, $(DIRECTORIES))

install-%:
	cd ${@:install-%=%} && npm i
up:
	docker compose up
up-build:
	docker compose up --build
up-background:
	docker compose up -d
down:
	docker compose down
restart:
	@make down
	@make up-background
ps:
	docker compose ps
codegen:
	cd frontend && npm run codegen
postgres:
	docker compose exec postgres bash
hasura-console:
	cd backend/hasura && hasura console
