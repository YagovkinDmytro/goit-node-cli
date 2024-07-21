import fs from "node:fs/promises";
import path from "node:path";
import DetectFileEncodingAndLanguage from "detect-file-encoding-and-language";

const contactsPath = path.resolve("db", "contacts.json");

export async function listContacts() {
  // ...твій код. Повертає масив контактів.
  try {
    const { encoding } = await DetectFileEncodingAndLanguage(contactsPath);
    const contactsData = await fs.readFile(contactsPath, encoding);
    const contacts = JSON.parse(contactsData);
    return contacts;
  } catch (error) {
    console.log("\x1B[31m Error parsing JSON:", error);
    throw error;
  }
}

export async function getContactById(id) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === id);
  return result;
}

export async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

export async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}
