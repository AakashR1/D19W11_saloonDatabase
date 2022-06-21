module.exports = (sequelize,DataTypes)=>{
    const Saloon = sequelize.define("Saloon",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
        },
        ownerId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{    
                model: 'Owners',
                key: 'id'
            }
        },
        saloonName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        mobileNumber:{
            type:DataTypes.STRING,
            allowNull:false
        },
        ratting:{
            type:DataTypes.STRING,
            allowNull:true,
        }
    });
    return Saloon;
}