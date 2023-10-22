import express from 'express';
import catControllers from '../controllers/catControllers.js';
const routes = express.Router();
// add func from models
routes.get('/', catControllers.getAllCats);

routes.get('/:id', catControllers.getOneCat);
routes.post('/', catControllers.postCat);
routes.put('/:id', catControllers.updateCatById);
routes.delete('/:id', catControllers.deleteCat);

export default routes;
