module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        content: {
            type: DataTypes.TEXT,
            validate: {
                //validation here
            }
        },
    });

    Post.associate = function(models) {
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    //Post Belongs to Topic
    return Post;
};