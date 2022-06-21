const res = require('express/lib/response');
const db = require('../DB/DB.connection');
const User = db.User

const addUser =async(req,res)=>{
    try {
        await User.create(req.body);
        res.status(201).json({message:'Created successfully....'})
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

const userWithRatingWithBarberOrSaloon = async (req,res)=>{
    try {
        const data = await User.findAll({
            include:[
                {
                    model:db.BarberRating,
                    key:'id',
                    as:"Rated_barbers",
                    include:{
                        model:db.Barber,
                        key:'id',
                        as:"Barber_details",
                        include:{
                            model:db.Saloon,
                            key:'id',
                            as:"Working in"
                        }
                    }
                },
                {
                    model:db.SaloonRating,
                    key:'id',
                    as:"Rated_saloons",
                    include:{
                        model:db.Saloon,
                        key:'id',
                        as:"saloon_details",
                        include:{
                            model:db.Owner,
                            key:'id',
                            as:"ownerOfSaloon"
                        }
                    }
                },
            ]
        });
        res.send(data);

    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

module.exports = {
    addUser,
    userWithRatingWithBarberOrSaloon
}