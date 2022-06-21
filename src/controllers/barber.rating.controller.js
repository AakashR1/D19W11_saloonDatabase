const db = require('../DB/DB.connection');
const BarberRating = db.BarberRating;
const helper = require('../helpers/barber.rating.helper');
const ratingToBarber =async (req,res)=>{
    try {

        await BarberRating.create(req.body);
        const total= await BarberRating.findAll({where:{barberId:req.body.barberId},
            attributes: {
                exclude: ['id',"ratting", "createdAt", "updatedAt","userId"],
                include:[[db.Sequelize.fn("COUNT", db.Sequelize.col("userId")),"count"],[db.sequelize.fn('SUM', db.sequelize.col('ratting')),"total"]],
                },
                group: ['barberId'],
                raw: true
        });
    
        let avg = Number(total[0].total)/Number(total[0].count);
        avg= String(avg);
        if(avg.includes(".")){
            avg = avg.split(".");
            let first = avg[0]
            let decimal = avg[1].split("");
            avg= `${first}.${decimal[0]}`;
        }
        if(avg.includes(".")){
            avg = avg.split(".");
            avg= `${avg[0]}.${[avg[1]]}`;
        }
        await db.Barber.update({ratting:avg},{where:{id:total[0].barberId}});
        res.status(201).json({message:'Created successfully....'});
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

const ratingGivenByUsers = async(req,res)=>{
    try {
        console.log(req.query);
        const data =await BarberRating.findAll({
            attributes: ["barberId", "ratting", "userId"],
            include:[{
                model:db.Barber,
                key:"id",
                as:"Barber_details"
            },
            {
                model:db.User,
                key:"id",
                as:"user_details"
            }],
        });
        const finalData =await helper.groupByBarberId(data);
        res.send(finalData)
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

module.exports = {
    ratingToBarber,
    ratingGivenByUsers
}
