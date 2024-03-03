DIRECTORIES = frontend backend
install: $(addprefix install-, $(DIRECTORIES))

install-%:
	cd ${@:install-%=%} && npm i
up:
	docker compose up -d
down:
	docker compose down
restart:
	@make down
	@make up
codegen:
	cd frontend && npm run codegen
postgres:
	docker compose exec postgres bash
