const server = require("./src/app.js");
const { sequelize } = require("./src/db.js");

const PORT = 3001;

server.listen(PORT, async () => {
  await sequelize.sync({ force: false });
  console.log(`Server listening on port:${PORT}`);
});
