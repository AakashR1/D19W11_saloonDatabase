const db = require('../DB/DB.connection');
const Saloon = db.Saloon;

const addSaloon =async (req,res)=>{
    try {
        await Saloon.create(req.body);
        res.status(201).json({message:'Created successfully....'})
    } catch (error) {
        console.log(error);
        res.send(error)
    }
};

const saloonWithBarberOwner = async(req,res)=>{
    try {
        const data = await Saloon.findAll({
            include:[
                {
                    model:db.Owner,
                    key:'id',
                    as:'ownerOfSaloon'
                },
                {
                    model:db.Barber,
                    key:'id',
                    as:'hasBarber'
                },
                {
                    model:db.SaloonRating,
                    key:'id',
                    as:'saloon_ratings'
                }
            ]
        });
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

module.exports = {
    addSaloon,
    saloonWithBarberOwner
}