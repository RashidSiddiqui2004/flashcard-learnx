
import db from '../config/dbConfig.js';

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    db.DB,
    db.USER,
    db.PASSWORD, {
    host: db.HOST,
    dialect: db.dialect,
    operatorsAliases: false,
}
)

sequelize.authenticate()
    .then(() => {
        console.log('connected..')
    })
    .catch(err => {
        console.log('Error' + err)
    })

const db2 = {}

db2.Sequelize = Sequelize
db2.sequelize = sequelize

db2.flashcards = require('./Flashcard.js')(sequelize, DataTypes)

db2.sequelize.sync({ force: false })
    .then(() => {
        console.log('Sync done!')
    })

export default db;

module.exports = db2