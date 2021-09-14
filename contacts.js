const fs = require("fs");

const chalk = require("chalk");

const addContact = (fullname, phone, email) => {
    const contacts = loadContacts()

    contacts.push({fullname,phone,email})
    console.log(chalk.green('Contact Saved'))
};

const loadContacts = () => {
  try {
    const dataBuffer = fs.readFileSync("contact.json");
    const contacts = dataBuffer.toString();
    return JSON.parse(contacts);
  } catch (error) {
    console.log(error);
    return [];
  }
};

module.exports = {
    addContact
};