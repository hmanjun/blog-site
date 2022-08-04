const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},
{
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'comment'
})

module.exports = Comment