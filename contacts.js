const fs = require("fs");

const chalk = require("chalk");

// Create contact
const addContact = (fullname, phone, email) => {
  const contacts = loadContacts();
  const duplicateContact = contacts.find(
    (contact) => contact.fullname === fullname
  );

  if (!duplicateContact) {
    contacts.push({ fullname, phone, email });
    saveContacts(contacts);
    console.log(chalk.green("Contact Saved"));
  } else {
    console.log(chalk.red("Contact already exist"));
  }
};

// Save contacts
saveContacts = (contacts) => {
  const data = JSON.stringify(contacts);
  fs.writeFileSync("contact.json", data);
};

// listing exsit contacts
const listContacts= () => {
    const contacts = loadContacts();
    if(contacts.length > 0) {
        console.log(chalk.yellow('your contacts: \n'))
        contacts.forEach(contact => {
            console.log(`\t ${chalk.green('Fullname')}: ${contact.fullname}`)
            console.log(`\t ${chalk.green('Phone')}: ${contact.phone}`)
            console.log(`\t ${chalk.green('Email')}: ${contact.email}`)
            console.log(chalk.blueBright('\t------------'))
        })
    }else{
        console.log(chalk.redBright('No Contact available'))
    }
}

const removeContacts = () => {}

// Read contact.json file 
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
  listContacts
};

