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
create-model:
	cd backend && nest g mo ${name}
create-resolver:
	cd backend && nest g r ${name}
create-service:
	cd backend && nest g s ${name}
create-class:
	cd backend && nest g cl ${name}
create-config:
	cd backend && nest g config ${name}
create-controller:
	cd backend && nest g co ${name}
create-decorator:
	cd backend && nest g d ${name}
create-filter:
	cd backend && nest g f ${name}
create-gateway:
	cd backend && nest g ga ${name}
create-guard:
	cd backend && nest g gu ${name}
create-interceptor:
	cd backend && nest g in ${name}
create-interface:
	cd backend && nest g interface ${name}
create-middleware:
	cd backend && nest g mi ${name}
create-pipe:
	cd backend && nest g pi ${name}
create-provider:
	cd backend && nest g pr ${name}
create-library:
	cd backend && nest g lib ${name}
create-resource:
	cd backend && nest g res ${name}
hasura-console:
	hasura --project hasura console
hasura-metadata-export:
	hasura --project hasura metadata export
hasura-metadata-apply:
	hasura --project hasura metadata apply
hasura-metadata-reload:
	hasura --project hasura metadata reload
hasura-seeds:
	hasura --project hasura seeds apply
hasura-create-seed:
	hasura --project hasura create ${name}
hasura-create-migrate:
	hasura --project hasura migrate create init --sql-from-server
hasura-migrate:
	hasura --project hasura migrate apply --database-name nest_next
