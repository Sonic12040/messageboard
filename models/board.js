module.exports = function(sequelize, DataTypes) {
    var Board = sequelize.define("Board", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //validations here
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //validations are sexy
            }
        },
        minimumUserLevel: {
            type: DataTypes.INTEGER,
            validate: {
                //validations here
            }
        }
    });
    
    return Board;
};