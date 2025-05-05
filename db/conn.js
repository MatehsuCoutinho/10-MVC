const { Sequelize } = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize('nodemvc', 'root', process.env.MYSQL_PASSWORD,{
    host: 'localhost',
    dialect: 'mysql',
})


try {
    sequelize.authenticate()
    console.log('MYSQL conectado')
} catch (error) {
    console.log(`Não foi possivel conectar: ${error}`)
}

exports.default = sequelize