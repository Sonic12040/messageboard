module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user",{
        username: {
            type: DataTypes.STRING,
            // allowNull: false,
            validate: {
                //validation
            }
        },
        password: {
            type: DataTypes.STRING,
            // allowNull: false,
            validate: {
                //validation 
            }
        },
        karma: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                //validation
            },
            defaultValue: 0
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
    User.associate = function(models) {
        User.hasMany(models.Post, {
            onDelete: "cascade"
        }),
        User.hasMany(models.Topic, {
            onDelete: "cascade"
        })
    }
    return User;
};


