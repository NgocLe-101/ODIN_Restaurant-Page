const RESTAURANT_NAME = 'NgocLe'

const createMenuElement = (info) => {
    const div = document.createElement('div');
    Object.entries(info).forEach(([key,value]) => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'section-container';
        const header = document.createElement('h2');
        header.innerText = key;
        const dishDiv = document.createElement('div');
        value.forEach(dish => {
            const div = document.createElement('div');
            div.className = 'dish-decript';
            const dishName = document.createElement('h3');
            const description = document.createElement('p');
            const price = document.createElement('h3');

            dishName.innerText = dish.name;
            description.innerText = dish.description;
            price.innerText = `Price: \$${dish.price}`;
            div.appendChild(dishName);
            div.appendChild(description);
            div.appendChild(price);
            dishDiv.appendChild(div);
        });
        sectionDiv.appendChild(header);
        sectionDiv.appendChild(dishDiv);
        div.appendChild(sectionDiv);
    });
    return div;
}

const dishInfos = {
    'Appetizers': [
        {
            name: 'Bruschetta',
            description: 'Toasted bread topped with fresh tomatoes, basil, and mozzarella.',
            price: 8.00
        },
        {
            name: 'Stuffed Mushrooms',
            description: 'Mushrooms filled with a savory blend of cheese, herbs, and breadcrumbs.',
            price: 10.00
        },
        {
            name: 'Calamari Fritti',
            description: 'Crispy fried calamari served with marinara sauce.',
            price: 12.00
        },  
    ],
    'Main Courses':[
        {
            name: 'Grilled Salmon',
            description: 'Fresh salmon fillet grilled to perfection, served with seasonal vegetables.',
            price: 22.00
        },
        {
            name: 'Pasta Primavera',
            description: 'A medley of fresh vegetables tossed with pasta in a light garlic sauce.',
            price: 18.00
        },
        {
            name: 'Ribeye Steak',
            description: 'Juicy ribeye steak cooked to your liking, served with mashed potatoes and asparagus.',
            price: 28.00
        }, 
    ],
    'Desserts': [
        {
            name: 'Tiramisu',
            description: 'Classic Italian dessert made with coffee-soaked ladyfingers and mascarpone cheese.',
            price: 7.00
        },
        {
            name: 'Chocolate Lava Cake',
            description: 'Warm chocolate cake with a gooey center, served with vanilla ice cream.',
            price: 9.00
        },
    ],
    'Beverages': [
        {
            name: 'House Wine',
            description: 'A selection of red and white wines by the glass.',
            price: 7.00
        },
        {
            name: 'Craft Beer',
            description: 'Local craft beers on tap.',
            price: 6.00
        },
        {
            name: 'Soft Drinks',
            description: 'A variety of sodas and juices.',
            price: 3.00
        }, 
    ]
}

export default function menuModule() {
    const div = document.createElement('div');
    const pageName = document.createElement('h1');
    pageName.innerText = 'MENU';
    div.appendChild(pageName);

    const welcomeText = document.createElement('h3');
    welcomeText.innerText = `Welcome to ${RESTAURANT_NAME} Menu\nAt ${RESTAURANT_NAME}, we take pride in offering a diverse selection of dishes made from the finest ingredients. Explore our menu below and discover your new favorite meal!`;
    
    const dishInfoContent = createMenuElement(dishInfos);
    div.appendChild(welcomeText);
    div.appendChild(dishInfoContent);

    return div;
}