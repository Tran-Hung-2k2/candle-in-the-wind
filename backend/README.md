- Step 1: git clone https://github.com/tranlamm/backend_cnpm.git
- Step 2: move to backend_cnpm (cd backend_cnpm) and run npm install
- Step 3: create database named "backend_cnpm" and config database like src/config/config.json (development)
- Step 4: move to src (cd src) and run "npx sequelize-cli db:migrate:undo:all"
- Step 5: run "npx sequelize-cli db:migrate"
- Step 6: open file backend_cnpm.sql and run to create example data
- Step 7: run "npm start" and enjoy the api

(Make sure you have installed git, npm, xampp or mysql, ...)

After run backend_cnpm.sql we will have:
- Account admin: 
email: admin@gmail.com
password: admin
- Account user:
email: tester@gmail.com
password: tester