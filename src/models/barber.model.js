module.exports = (sequelize,DataTypes)=>{
    const Barber = sequelize.define('Barber',{
        id:{
            type:DataTypes.INTEGER,
            unieque:true,
            primaryKey:true,
            autoIncrement: true,
            allowNull: false
        },
        saloonId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{    
                model: 'Saloons',
                key: 'id'
            }
        },
        firstName:{
            type:DataTypes.STRING,
            allowNull: false
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull: false
        },
        ratting:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
    },{timestamps: false});
    return Barber;
};

