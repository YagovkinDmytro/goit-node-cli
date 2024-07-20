import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./contacts.js";

const invokeAction = async ({ action }) => {
  switch (action) {
    case "list":
      const contactList = await listContacts();
      return console.log(contactList);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction({ action: "list" });

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
