import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./contacts.js";

const invokeAction = async ({ action, id, ...data }) => {
  switch (action) {
    case "list":
      const contactList = await listContacts();
      return console.log(contactList);
    case "get":
      const contact = await getContactById(id);
      return console.log(contact);
    case "add":
      const newContact = await addContact(data);
      return console.log(newContact);
    case "reamove":
      return;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

//invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "rsKkOQUi80UsgVPCcLZZW" });
// invokeAction({
//   action: "add",
//   name: "Alex",
//   email: "alex@gmail.com",
//   phone: "(992) 914-8892",
// });

/////////////////////////////////////////////////

// import { program } from "commander";
// program
//   .option("-a, --action <type>", "choose action")
//   .option("-i, --id <type>", "user id")
//   .option("-n, --name <type>", "user name")
//   .option("-e, --email <type>", "user email")
//   .option("-p, --phone <type>", "user phone");

// program.parse();

// const options = program.opts();

// // TODO: рефакторити
// async function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case "list":
//       // ...
//       break;

//     case "get":
//       // ... id
//       break;

//     case "add":
//       // ... name email phone
//       break;

//     case "remove":
//       // ... id
//       break;

//     default:
//       console.warn("\x1B[31m Unknown action type!");
//   }
// }

// invokeAction(options);
