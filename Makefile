DIRECTORIES = frontend backend
install: $(addprefix install-, $(DIRECTORIES))

init:
	sh commands/init.sh
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
create.model-%:
	cd backend && nest g mo ${@:create.model-%=%}
create.resolver-%:
	cd backend && nest g r ${@:create.resolver-%=%}
create.service-%:
	cd backend && nest g s ${@:create.service-%=%}
create.class-%:
	cd backend && nest g cl ${@:create.class-%=%}
create.config-%:
	cd backend && nest g config ${@:create.config-%=%}
create.controller-%:
	cd backend && nest g co ${@:create.controller-%=%}
create.decorator-%:
	cd backend && nest g d ${@:create.decorator-%=%}
create.filter-%:
	cd backend && nest g f ${@:create.filter-%=%}
create.gateway-%:
	cd backend && nest g ga ${@:create.gateway-%=%}
create.guard-%:
	cd backend && nest g gu ${@:create.guard-%=%}
create.interceptor-%:
	cd backend && nest g in ${@:create.interceptor-%=%}
create.interface-%:
	cd backend && nest g interface ${@:create.interface-%=%}
create.middleware-%:
	cd backend && nest g mi ${@:create.middleware-%=%}
create.pipe-%:
	cd backend && nest g pi ${@:create.pipe-%=%}
create.provider-%:
	cd backend && nest g pr ${@:create.provider-%=%}
create.library-%:
	cd backend && nest g lib ${@:create.library-%=%}
create.resource-%:
	cd backend && nest g res ${@:create.resource-%=%}
hasura.console:
	hasura --project hasura console
hasura.metadata-export:
	hasura --project hasura metadata export
hasura.metadata-apply:
	hasura --project hasura metadata apply
hasura.metadata-reload:
	hasura --project hasura metadata reload
hasura.seeds:
	hasura --project hasura seeds apply
hasura.create-seed-%:
	hasura --project hasura seed create ${@:hasura.create-seed-%=%}Seed --from-table ${@:hasura.create-seed-%=%}
hasura.create-migrate:
	hasura --project hasura migrate create init --sql-from-server
hasura.migrate-%:
	hasura --project hasura migrate apply --database-name ${@:hasura.migrate-%:%}
build.functions:
	cd functions && npm run build
emulators:
	@make build.functions
	firebase emulators:start
