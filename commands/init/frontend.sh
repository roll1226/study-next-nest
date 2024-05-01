touch ./frontend/.env && echo "$(grep ^NEXT_ ./envs/.env.development.local)" >> ./frontend/.env && echo "\033[32mCreated:\033[m frontend/.env"
