const { Command } = require("commander");
const pkg = require("../package.json"); // Assuming package.json is in the parent directory

const program = new Command();
program
  .version(pkg.version)
  .command("key", "Manage API key --> https://nomics.com")
  .command("check", "Check coin price Info")
  .parse(process.argv);
