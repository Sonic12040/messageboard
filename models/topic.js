module.exports = function(sequelize, DataTypes) {
    var Topic = sequelize.define("Topic", {
        topicName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //validation
            }
        },
        //Topic belongs to User, Board
        //Post Belongs to Topic
    });

    Topic.associate = function(models) {
        Topic.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        }),
        Topic.belongsTo(models.Board, {
            foreignKey: {
                allowNull: false
            }
        }),
        Topic.hasMany(models.Post, {
            onDelete: "cascade"
        })
    }
    return Topic;
};