module.exports = function(sequelize, DataTypes) {
    var Topic = sequelize.define("Topic", {
        topicName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //validation
            }
        },
        creator: {
            //use includes and associations
        }
        //Associated Board!
    });
    return Topic;
};