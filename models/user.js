module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User",{
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //validation
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //validation 
            }
        },
        karma: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                //validation
            }
        },
        userLevel: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
                //validation
            }
        }
    })
    return User;
};