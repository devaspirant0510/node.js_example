const Sequelize = require("sequelize");

module.exports = class Comment extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            id:{
                type: Sequelize.INTEGER,
                autoIncrement:true,
                primaryKey:true
            },
            comment:{
                type:Sequelize.STRING(300),
                allowNull:false,
            },
            createdAt:{
                type: Sequelize.DATEONLY,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            tableName:"comments",
            modelName:"Comment",
            charset:"utf8",
            collate: 'utf8_general_ci',
        });
    }
    static associate(db){
        db.Comment.belongsTo(db.User,{foreignKey:"commenterId",targetKey:"id"});
    }
}