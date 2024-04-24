# Move to repository root
cd "$(git rev-parse --show-toplevel)" && echo "\033[32mMoved:\033[m Repository Root"

ln -sf "$(pwd)/.env" frontend/.env.test && echo "\033[32mLinked:\033[m frontend/.env"
ln -sf "$(pwd)/.env" backend/.env.test && echo "\033[32mLinked:\033[m backend/.env"
ln -sf "$(pwd)/.env" hasura/.env.test && echo "\033[32mLinked:\033[m hasura/.env"
