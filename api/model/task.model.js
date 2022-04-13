module.exports = (sequelize, DataTypes, Model) => {

    class Tasks extends Model {}

    Tasks.init({
        // Model attributes are defined here
        task: {
          type: DataTypes.STRING,
          allowNull: false
        },
        assignee: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        status: {
          type: DataTypes.STRING
        },
        createdate: {
          type: DataTypes.DATE
          // allowNull defaults to true
        },
        updateddate: {
            type: DataTypes.DATE
            // allowNull defaults to true
        },
        createdby: {
            type: DataTypes.STRING
        },
        updatedby: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'tasks' // We need to choose the model name
      });
      
      return Tasks;
}