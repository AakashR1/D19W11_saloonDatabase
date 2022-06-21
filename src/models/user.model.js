

module.exports = (sequelize,DataTypes)=>{
    const User = sequelize.define('User',{
        id:{
            type:DataTypes.INTEGER,
            unieque:true,
            primaryKey:true,
            autoIncrement: true,
            allowNull: false
        },
        email:{
            type:DataTypes.STRING,
            unieque:true,
            allowNull: false
        },
        firstName:{
            type:DataTypes.STRING,
            allowNull: false
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull: false
        },
        password:{
            type:DataTypes.STRING,
            min:[6,"password can not smaller then six digit"],
            allowNull: false
        },
        mobileNumber:{
            type:DataTypes.STRING,
            min:[10,"phone number can not smaller then 10 digit"],
            allowNull: false
        },
        role:{
            type:DataTypes.STRING,
            allowNull: false
        }
    },{timestamps: false});
    return User;
};

