# Move to repository root
cd "$(git rev-parse --show-toplevel)" && echo "Moved: Repository Root"

ln -sf "$(pwd)/.env" frontend/.env.test && echo 'Linked: frontend/.env'
ln -sf "$(pwd)/.env" backend/.env.test && echo 'Linked: backend/.env'
ln -sf "$(pwd)/.env" hasura/.env.test && echo 'Linked: hasura/.env'
