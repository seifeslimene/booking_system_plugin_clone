const fs = require("fs");
fs.rmSync("node_modules/@types", { recursive: true, force: true });
