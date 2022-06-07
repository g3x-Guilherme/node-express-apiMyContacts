const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Heloisa',
    email: 'heloisa@gmail.com',
    fone: '3213213213',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
