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
npx sequelize-cli model:generate --name Student
--attributes username:string, password:string, email:string, image: string, role:string

npx sequelize-cli model:generate --name Academic --attributes nim:string,category:string,price:integer,stock:integer,image:string,UserId:integer

```

5. Migrate dari migrations

```

npx sequelize-cli db:migrate
