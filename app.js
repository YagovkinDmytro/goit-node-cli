import {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} from "./db/contacts.js";
import { program } from "commander";

const invokeAction = async ({ action, id, ...data }) => {
  switch (action) {
    case "list":
      const contactList = await listContacts();
      return console.table(contactList);
    case "get":
      const contact = await getContactById(id);
      return console.log(contact);
    case "add":
      const newContact = await addContact(data);
      return console.log(newContact);
    case "remove":
      const deleteContact = await removeContact(id);
      return console.log(deleteContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

invokeAction(options);
