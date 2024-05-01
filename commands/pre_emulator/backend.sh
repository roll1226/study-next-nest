rm -f ./backend/.env && echo "\033[32mRemoved:\033[m frontend/.env"
touch ./backend/.env && echo "$(grep ^NESTJS ./envs/.env.development.local)" >> ./backend/.env && echo "\033[32mCreated:\033[m backend  /.env"
