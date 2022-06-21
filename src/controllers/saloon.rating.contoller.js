const db = require('../DB/DB.connection');
const SaloonRating = db.SaloonRating;
const helper = require('../helpers/saloon.rating.helper');
const rateSaloon =async (req,res)=>{
    try {
        await SaloonRating.create(req.body);

        const total= await SaloonRating.findAll({where:{saloonId:req.body.saloonId},
            attributes: {
                exclude: ['id',"ratting", "createdAt", "updatedAt","userId"],
                include:[[db.Sequelize.fn("COUNT", db.Sequelize.col("userId")),"count"],[db.sequelize.fn('SUM', db.sequelize.col('ratting')),"total"]],
                },
                group: ['saloonId'],
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
        await db.Saloon.update({ratting:avg},{where:{id:total[0].saloonId}});
        res.status(201).json({message:'Created successfully....'})
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

const saloonRatingWithUser =async (req,res)=>{
    try {
        const data = await SaloonRating.findAll({
            include:{
                model:db.Saloon,
                key:'id',
                as:'saloon_details'
            }
        });
        const finalData = await helper.groupBySaloonId(data)
        res.send(finalData)
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

module.exports = {
    rateSaloon,
    saloonRatingWithUser
}