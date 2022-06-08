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
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
