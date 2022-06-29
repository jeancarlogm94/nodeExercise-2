const { app } = require('./app');

// Models
const { User } = require('./models/user.model');
const { Task } = require('./models/task.model');

// Utils
const { db } = require('./utils/database.util');

// Autehticate db
db.authenticate()
  .then(() => console.log('Db authenticate'))
  .catch((error) => console.log(error));

// Moldels relations
// 1 User -> M Task
User.hasMany(Task, { foreignKey: 'userId' });
Task.belongsTo(User);

// Sync db
db.sync()
  .then(() => console.log('Db synced'))
  .catch((error) => console.log(error));

// Listen app
app.listen(4000, () => {
  console.log('Express app running!');
});
