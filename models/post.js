module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        content: {
            type: DataTypes.TEXT,
            validate: {
                //validation here
            }
        },
        user: {
            //associate with user who created it
            //includes and associations?
        }
    });
    return Post;
};