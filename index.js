const yargs = require("yargs");

const { addContact,listContacts } = require("./contacts");

// Create new contact commad 
yargs.command({
    aliases:['c'],
  command: "create",
  describe: "[create new contact]",
  builder: {
    fullname: {
      alias: "f",
      describe: "Contact Fullname",
      demandOption: true,
      type: "string;",
    },
    email: {
      alias: "e",
      describe: "Contact Email",
      demandOption: true,
      type: "string",
    },
    phone: {
      alias: "p",
      describe: "Contact Phone Number",
      demandOption: true,
      type: "number",
    },
  },
  handler({ fullname, phone,email }) {
    addContact(fullname, phone, email);
  },
});

// Listing exit contacts command
yargs.command = ({
    command:'list',
    aliases:['l'],
    describe:'[List of Contacts]',
    handler() {
        listContacts()
    }
})

// Remove Contacts command


yargs.parse();

// console.log(yargs.argv);
