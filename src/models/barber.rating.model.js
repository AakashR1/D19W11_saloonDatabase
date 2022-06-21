module.exports = (sequelize,DataTypes)=>{
    const BarberRating = sequelize.define("BarberRating",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
        },
        barberId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references: {     
                model: 'Barbers',
                key: 'id'
            }
        },
        ratting:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        userId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references: {     
                model: 'Users',
                key: 'id'
            },
            onDelete:'CASCADE',
            onUpdate:'CASCADE'
        }
    });
    return BarberRating;
}
