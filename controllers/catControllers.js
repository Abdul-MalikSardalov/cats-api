import Cat from '../models/catModels.js';
const catControllers = {
    getAllCats: (req, res) => {
        const cats = Cat.getCats();
        res.status(200).render('cats', { cats: cats });
        console.log(cats);
    },

    getOneCat: (req, res) => {
        const id = req.params.id;
        const cats = Cat.getCat(id);
        if (cats) {
            res.status(200).render('cats', { cats: [cats] });
        } else {
            res.status(404).render('404', {
                errorStatus: '404',
                title: 'Page not found',
                message: `This page doesn't exist`
            });
        }
    },

    postCat: (req, res) => {
        const { name, age, img } = req.body;
        const newCat = new Cat(name, age, img);
        newCat.addCat();

        if (newCat) {
            res.status(200).json(newCat);
        } else {
            res.status(404).render('404', {
                errorStatus: '404',
                title: 'Page not found',
                message: `This page doesn't exist`
            });
        }
    },

    updateCatById: (req, res) => {
        const { id } = req.params;
        const { name, age, img } = req.body;
        const updatedCat = {
            name: name,
            age: age,
            img: img
        };
        const newCatsList = Cat.updateCat(id, updatedCat);
        res.status(201).render('cats', { cats: newCatsList });
    },

    deleteCat: (req, res) => {
        const { id } = req.params;
        const deletedCats = Cat.deleteCat(id);
        if (deletedCats) {
            res.status(200).render('cats', { cats: deletedCats });
        } else {
            res.send(`<h1>Cat with this id doesn't exist</h1>`);
        }
    }
};

export default catControllers;
