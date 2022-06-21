const dotenv = require('dotenv').config();
const env = dotenv["parsed"]["NODE_ENV"]
const {Sequelize, DataTypes} = require('sequelize');
const config = require('../config/DB.config')[env]

const sequelize = new Sequelize(config.database,config.username,config.password,config);

const authentication = async ()=>{
    try {
        await sequelize.authenticate()
        .then(()=>{
            console.log('Connected...');
        })
    } catch (error) {
        console.log(error);
    }
}
authentication();

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Owner = require('../models/owner.model')(sequelize,DataTypes);
db.Saloon = require('../models/saloon.model')(sequelize,DataTypes);
db.Barber = require('../models/barber.model')(sequelize,DataTypes);
db.User= require('../models/user.model')(sequelize,DataTypes);
db.SaloonRating = require('../models/saloon.rating.model')(sequelize,DataTypes);
db.BarberRating = require('../models/barber.rating.model')(sequelize,DataTypes);

db.Saloon.hasMany(db.Barber,{foreignKey:"saloonId",as:"hasBarber"})
db.Barber.belongsTo(db.Saloon,{foreignKey:"saloonId",as:"Working in"});

db.Barber.hasMany(db.BarberRating,{foreignKey:"barberId", as:"Barber_details"});
db.BarberRating.belongsTo(db.Barber,{foreignKey:"barberId", as:"Barber_details"});

db.Saloon.hasMany(db.SaloonRating,{foreignKey:"saloonId", as:"saloon_ratings"});
db.SaloonRating.belongsTo(db.Saloon,{foreignKey:"saloonId", as:"saloon_details"});

db.User.hasMany(db.BarberRating,{foreignKey:"userId", as:"Rated_barbers", unique:false})
db.BarberRating.belongsTo(db.User,{foreignKey:"userId", as:"user_details", unique:false})

db.User.hasMany(db.SaloonRating,{foreignKey:"userId", as:"Rated_saloons", unique:false})
db.SaloonRating.belongsTo(db.User,{foreignKey:"userId", as:"user_detail", unique:false})

db.Owner.hasMany(db.Saloon,{foreignKey:"ownerId" , as:'has_saloon'});
db.Saloon.belongsTo(db.Owner,{foreignKey:"ownerId", as:'ownerOfSaloon'});

db.sequelize.sync({force:false}).then(()=>{
    console.log("not sync");
})


module.exports = db