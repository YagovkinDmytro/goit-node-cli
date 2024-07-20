import fs from "node:fs/promises";
import path from "node:path";
import DetectFileEncodingAndLanguage from "detect-file-encoding-and-language";

const contactsPath = "./db/contacts.json";

export async function listContacts() {
  // ...твій код. Повертає масив контактів.
  const { encoding } = await DetectFileEncodingAndLanguage(contactsPath);
  const contacts = await fs.readFile(contactsPath, encoding);
  return JSON.parse(contacts);
}

export async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

export async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

export async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}
