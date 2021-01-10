require('dotenv').config()
const dbConnect = require('../config/db')
const Artist = require('../models/Artist');

dbConnect()
function seeder3() {
  Artist.insertMany([
    {
      name: 'Andrei Balandin',
      description: 'Тиражная работа',
    },
    {
      name: 'Dasha Kudinova',
      description: 'So beautiful!',
    },
    {
      name: 'Nickie Zimov',
      description: 'So beautiful!',
    },
    {
      name: 'Oleg Khvostov',
      description: 'So beautiful!',
    },
    {
      name: 'Pablo Radini',
      description: 'So beautiful!',
    },
    {
      name: 'Vandalweekend',
      description: 'So beautiful!',
    },
    {
      name: 'Yaksana',
      description: 'So beautiful!',
    },
    {
      name: 'Yusupov Ilia',
      description: 'So beautiful!',
    }
  ])
}
seeder3()

