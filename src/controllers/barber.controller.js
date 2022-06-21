const db = require('../DB/DB.connection');
const Barber = db.Barber;

const addBarber = async (req,res)=>{
    try {
        await Barber.create(req.body);
        res.status(201).json({message:'Created successfully....'})
    } catch (error) {
        console.log(error);
        res.send(error)
    }
};

const barberWithSaloonAndRating = async(req,res)=>{
    try {
        const data = await Barber.findAll({
            include:[
                { model: db.Saloon, as: 'Working in' },
                {model:db.BarberRating,as:"Ratings"}
            ]
        })
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

module.exports = {
    addBarber,
    barberWithSaloonAndRating
}