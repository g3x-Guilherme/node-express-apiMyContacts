const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // listar todos os registros
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    // obter um registro
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404 not found
      return response.status(404).json({ error: 'Contact not found' });
    }

    response.json(contact);
  }

  store() {
    // criar novo registro
  }

  update() {
    // atualizar um registro
  }

  async delete(request, response) {
    // deletar um registro
    const { id } = request.params;

    const deletedContact = await ContactsRepository.findById(id);

    if (!deletedContact) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    await ContactsRepository.delete(id);
    // 204: no content
    response.sendStatus(204);
  }
}

// singleton
module.exports = new ContactController();
