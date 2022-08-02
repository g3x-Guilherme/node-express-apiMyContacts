const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoriesRepository.findAll();

    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;

    const category = await CategoriesRepository.findById(id);

    if (!category) {
      // 404 not found
      return response.status(404).json({ error: 'Contact not found' });
    }

    response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    await CategoriesRepository.delete(id);

    response.sendStatus(204);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoriesRepository.create({ name });

    response.json(category);
  }

  update(request, response) {
    response.json({ message: 'update' });
  }
}

module.exports = new CategoryController();
