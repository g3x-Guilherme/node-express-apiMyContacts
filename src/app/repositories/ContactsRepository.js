const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Heloisa',
    email: 'heloisa@gmail.com',
    fone: '3213213213',
    category_id: v4(),
  },

  {
    id: v4(),
    name: 'Guilherme',
    email: 'gui@gmail.com',
    fone: '4589325263',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.email === email));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create({
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };

      contacts.push(newContact);
      resolve(newContact);
    });
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const contactIndex = contacts.findIndex((contact) => contact.id === id);

      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts[contactIndex] = updatedContact;
      resolve(updatedContact);
    });
  }
}

module.exports = new ContactsRepository();
