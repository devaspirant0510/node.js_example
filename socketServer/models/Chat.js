module.exports = (sequelize,Sequelize)=>{
    return sequelize.define("Chat",{
        message:{
            type:Sequelize.STRING(300),
            allowNull:false,
        },
        createdAt:{
            type: Sequelize.DATEONLY,
            allowNull: true,
            defaultValue:Sequelize.NOW
        }
    },{
        timestamps:false
    });
}
