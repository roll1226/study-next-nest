# Move to repository root
cd "$(git rev-parse --show-toplevel)" && echo "\033[32mMoved:\033[m Repository Root"

rm -f ./frontend/.env && echo "\033[32mRemoved:\033[m frontend/.env"
rm -f ./backend/.env && echo "\033[32mRemoved:\033[m frontend/.env"

cp ./envs/.env.development.local ./frontend/.env && echo "\033[32mCopied:\033[m frontend/.env"
cp ./envs/.env.development.local ./backend/.env && echo "\033[32mCopied:\033[m backend/.env"
