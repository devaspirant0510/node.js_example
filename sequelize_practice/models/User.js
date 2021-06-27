const Sequelize = require("sequelize");


module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            id:{
                type:Sequelize.INTEGER,
                autoIncrement:true,
                primaryKey:true,
            },
            name:{
                type:Sequelize.STRING(30),
                allowNull:false,
            },
            userId:{
                type: Sequelize.STRING(30),
                allowNull: false,
            },age:{
                type:Sequelize.INTEGER,
                allowNull:false,
            },created:{
                type: Sequelize.DATEONLY,
                allowNull: true,
                defaultValue: Sequelize.NOW
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            tableName:"users",
            modelName:"User",
            charset:"utf8",
            collate: 'utf8_general_ci',
        });
    }
    static associate(db){
        db.User.hasMany(db.Comment,{foreignKey:"commenterId",sourceKey:"id"});
    }

}