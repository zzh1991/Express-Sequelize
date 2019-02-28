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
