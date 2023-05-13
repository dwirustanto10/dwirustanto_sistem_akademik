# server

# Database configuration with Sequelize

1. MEmbuat konfigurasi sequelize dan pg awal

...
npx sequelize-cli init
....

2. setting `config.json`

3. membuat database
   .....
   npx sequelize-cli db:create
   ....

4. membuat migration dan table

...
npx sequelize-cli model:generate --name User
--attributes username:string, password:string, email:string, image: string
