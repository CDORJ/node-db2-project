const server = require("./api/server");

const port = process.env.PORT || 5000;
// first commit
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
