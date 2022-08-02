const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoriesRepository.findAll();

    response.json(categories);
  }

  // Error Handler (Middleware express) --> Manipulador de erros

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

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const category = await CategoriesRepository.findById(id);

    if (!category) {
      // 404 not found
      return response.status(404).json({ error: 'Contact not found' });
    }

    const updatedCategory = await CategoriesRepository.update({ name, id });

    response.json(updatedCategory);
  }
}

module.exports = new CategoryController();
