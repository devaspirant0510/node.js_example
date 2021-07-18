module.exports = (sequelize, DataTypes) => {
    return sequelize.define("User", {
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        userName: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        gender: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    },{
        timestamps:false
    });
}
