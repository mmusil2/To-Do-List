module.exports = function(sequelize, DataTypes) {
    var Todo = sequelize.define("Todo", {
      text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {len: [1,140]}
      },
      complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
        // isFalse() {
        //     this.complete = true;
        // }
        // this.complete = false
      }
    });
    return Todo;
  };