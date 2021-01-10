require('dotenv').config()
const dbConnect = require('../config/db')
const UserModel = require('../models/User');

dbConnect()
function seeder2() {
  UserModel.insertMany([
    {
      firstname: 'Ольга',
      email: 'olga@mail.ru',
      password: '1234',
      admin: true,
      purchases: ['5fdb6828d84ff98db1b6a76a', '5fdb6828d84ff98db1b6a76b'],
      favourites: ['5fdb6828d84ff98db1b6a76c','5fdb6828d84ff98db1b6a76c'] 
    },
    {
      firstname: 'Ivan',
      email: 'ivan@mail.ru',
      password: '1234',
      admin: false,
      purchases: ['5fdb6828d84ff98db1b6a76c', '5fdb6828d84ff98db1b6a768'],
      favourites: ['5fdb6828d84ff98db1b6a76a','5fdb6828d84ff98db1b6a766'] 
    },
    {
      firstname: 'Маша',
      email: 'mania@mail.ru',
      password: '1234',
      admin: false,
      purchases: ['5fdb6828d84ff98db1b6a766', '5fdb6828d84ff98db1b6a767'],
      favourites: ['5fdb6828d84ff98db1b6a769','5fdb6828d84ff98db1b6a766'] 
    }
  ])
}
seeder2()
