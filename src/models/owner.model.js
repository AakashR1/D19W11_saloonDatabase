

module.exports = (sequelize,DataTypes)=>{
    const Owner = sequelize.define('Owner',{
        id:{
            type:DataTypes.INTEGER,
            unique:true,
            primaryKey:true,
            autoIncrement: true,
            allowNull: false
        },
        email:{
            type:DataTypes.STRING,
            unique:true,
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
            validate:{
                len:[6]
            },
            allowNull: false
        },
        mobileNumber:{
            type:DataTypes.STRING,
            validate:{
                len:{
                    args:[10],
                    msg: "mobile number should be greater then 10 digit"
                }
            },
            allowNull: false
        },
        role:{
            type:DataTypes.STRING,
            allowNull: false
        }
    },{timestamps: false});
    return Owner;
};

