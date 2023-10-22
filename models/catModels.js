import { v4 as newId } from 'uuid';

let cats = [
    {
        id: 1,
        name: 'Whiskers',
        age: '3',
        img: 'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 2,
        name: 'Fluffy',
        age: '5',
        img: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        id: 3,
        name: 'Buddy',
        age: '2',
        img: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg'
    },
    {
        id: 4,
        name: 'Leo',
        age: '7',
        img: 'https://cdn.pixabay.com/photo/2018/07/08/14/16/cat-3523992_640.jpg'
    },
    {
        id: 5,
        name: 'Spike',
        age: '1',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkL4WZvGAk07aV5n1YRnUnR0xGmciI1FLLZw&usqp=CAU'
    }
];

class Cat {
    constructor(name, age, img) {
        this.id = newId();
        this.name = name;
        this.age = age;
        this.img = img;
    }

    static getCats = () => {
        return cats;
    };

    static getCat = (id) => {
        return cats.find((cat) => cat.id == id);
    };

    addCat = () => {
        cats.push(this);
    };

    static updateCat = (id, updatedCat) => {
        const catExisted = cats.find((cat) => cat.id == id);
        if (catExisted) {
            console.log(cats);
            cats.forEach((cat, index) => {
                if (cat.id == id) {
                    cats[index] = updatedCat;
                }
            });
        }
        return cats;
    };

    static deleteCat = (id) => {
        const catExisted = cats.find((cat) => cat.id == id);
        if (catExisted) {
            cats = cats.filter((cat) => cat.id != id);
            return cats;
        }
        return null;
    };
}

export default Cat;
