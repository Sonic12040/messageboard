module.exports = function(sequelize, DataTypes) {
    var Board = sequelize.define("board", {
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

    Board.associate = function(models) {
        Board.hasMany(models.Topic, {
            onDelete: "cascade"
        });
    }
    
    return Board;
};