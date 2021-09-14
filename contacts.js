const fs = require("fs");

const chalk = require("chalk");

const addContact = (fullname, phone, email) => {
  const contacts = loadContacts();
  const duplicateContact = contacts.find(
    (contact) => contact.fullname === fullname
  );

  if (!duplicateContact) {
    contacts.push({ fullname, phone, email });
    console.log(chalk.green("Contact Saved"));
  } else {
    console.log(chalk.red("Contact already exist"));
  }
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
  addContact,
};
