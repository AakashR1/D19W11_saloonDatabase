module.exports = (sequelize,DataTypes)=>{
    const SaloonRating = sequelize.define("SaloonRating",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
        },
        saloonId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{    
                model: 'Saloons',
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
            unique:false,
            references:{    
                model: 'Users',
                key: 'id'
            }
        }
    });
    return SaloonRating;
}