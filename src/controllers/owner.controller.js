const db = require('../DB/DB.connection');
const Owner = db.Owner;

const addOwner =async (req,res)=>{
    try {
        await Owner.create(req.body);
        res.status(201).json({message:"owner added successfully"});
    } catch (error) {
        console.log(error);
        res.send(error)
    }
};

const saloonWithRatingWithuser =async (req,res)=>{
    try {
        const data = await Owner.findAll({
            include:[
                {
                    model:db.Saloon,
                    key:"id",
                    include:{
                        model:db.SaloonRating,
                        key:"id",
                        as:"saloon_ratings",
                        include:{
                            model:db.User,
                            key:"id",
                            as:"user_detail"
                        }
                    }
                },
            ]
        });
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

module.exports = {
    addOwner,
    saloonWithRatingWithuser
}