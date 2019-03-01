## Initialize Express App
```bash
mkdir app_directory
cd app_directory

npm install express express-generator
node_modules/.bin/express --no-view . -f
npm install

npm start
```

## support hot replacement
```bash
npm install --save-dev nodemon
```

## Install Sequelize
```bash
npm install --save sequelize pg pg-hstore
npm install --save-dev sequelize-cli

mkdir app
mv bin config migrations models public routes views app.js seeders app/
```

### Initialize Sequelize
```bash
node_modules/.bin/sequelize init

# change config setting
# add
"define": {
  "freezeTableName": true,
  "timestamps": false,
  "underscored": true,
}
```

### Add model

## Support ES6
```
npm install --save-dev @babel/core @babel/register @babel/preset-env @babel/cli

"scripts": {
  "start": "node ./build/bin/www",
  "dev": "nodemon ./app/bin/www",
  "build": "rm -rf ./build && mkdir build && babel --out-dir ./build --source-maps --copy-files ./app"
},
```

### macOS Docker Host
> host.docker.internal

```bash
docker run -d --name express -p 3000:3000 -e HOST=host.docker.internal  express-sequelize:20190301.0000
```

## 更多阅读
- [Manual | Sequelize | The node.js ORM for PostgreSQL, MySQL, SQLite and MSSQL](http://docs.sequelizejs.com/)
- [Express "Hello World" example](https://expressjs.com/en/starter/hello-world.html)
