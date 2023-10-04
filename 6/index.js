'use strict'

class PhoneBook {
    constructor() {
      this.contacts = [];
    }
  
    addContact(firstName, lastName, phone, email) {
      const contact = {
        firstName,
        lastName,
        phone,
        email,
      };
      this.contacts.push(contact);
    }
  
    editContact(index, newFirstName, newLastName, newPhone, newEmail) {
      if (index >= 0 && index < this.contacts.length) {
        this.contacts[index] = {
          firstName: newFirstName,
          lastName: newLastName,
          phone: newPhone,
          email: newEmail,
        };
      } else {
        console.error("Недійсний індекс контакту");
      }
    }
  
    deleteContact(index) {
      if (index >= 0 && index < this.contacts.length) {
        this.contacts.splice(index, 1);
      } else {
        console.error("Недійсний індекс контакту");
      }
    }
  
    listContacts() {
        document.write(`<h2>Your contacts</h2>`)
      this.contacts.forEach((contact, index) => {
        document.write(`<p>Contact #${index + 1}:</p>`);
        document.write(`<p>Name: ${contact.firstName}</p>`);
        document.write(`<p>Surname: ${contact.lastName}</p>`);
        document.write(`<p>Phone: ${contact.phone}</p>`);
        document.write(`<p>Email: ${contact.email}</p><br>`);
      });
    }
  }

  const phoneBook = new PhoneBook();
  
  phoneBook.addContact("Ivan", "Ivanov", "+123456789", "ivan@example.com");
  phoneBook.addContact("Maria", "Bereza", "+987654321", "maria@example.com");
  phoneBook.listContacts();
  
  phoneBook.editContact(0, "Alexey", "Trig", "+111111111", "Alexey@example.com");
  phoneBook.listContacts();
  
  phoneBook.deleteContact(1);
  phoneBook.listContacts();
  