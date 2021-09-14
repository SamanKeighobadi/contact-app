const yargs = require("yargs");
const chalk = require("chalk");

const { addContact, listContacts, removeContacts } = require("./contacts");

// Create new contact commad
yargs.command({
  aliases: ["c"],
  command: "create",
  describe: `${chalk.yellow("[create new contact]")}`,
  builder: {
    fullname: {
      alias: "f",
      describe: `${chalk.cyan("Contact Fullname")}`,
      demandOption: true,
      type: "string;",
    },
    email: {
      alias: "e",
      describe: `${chalk.cyan("Contact Email")} `,
      demandOption: true,
      type: "string",
    },
    phone: {
      alias: "p",
      describe: `${chalk.cyan("Contact Phone Number")}`,
      demandOption: true,
      type: "number",
    },
  },
  handler({ fullname, phone, email }) {
    //   let id = Math.floor(Math.random() * 1200)
    addContact(fullname, phone, email);
  },
});

// Listing exit contacts command
yargs.command({
  command: "list",
  aliases: ["l"],
  describe: `${chalk.yellow("[List of Contacts]")}`,
  handler() {
    listContacts();
  },
});

// Remove Contacts command
yargs.command({
  command: "remove",
  aliases: ["r"],
  describe: `${chalk.yellow("[Remove Contacts]")}`,
  builder: {
    fullname: {
      alias: "f",
      describe: `${chalk.yellow("Contact fullname ")}`,
    },
  },
  handler({fullname}) {
    removeContacts(fullname);
  },
});

yargs.parse();

// console.log(yargs.argv);
