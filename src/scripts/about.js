const RESTAURANT_NAME = 'NgocLe'
const ESTABLISHED_YEAR = 2014
const LOCATION = 'District 1, HCMC, Viet Nam'
const FOUNDER = 'Ngoc Le'

const createSection = (index, content) => {
    const div = document.createElement('div');
    div.className = 'section';
    div.id = `section-${index}`;

    const heading = document.createElement('h2');
    const contentText = document.createElement('p');

    heading.innerText = content.heading;
    contentText.innerText = content.content;

    div.appendChild(heading);
    div.appendChild(contentText);

    return div;
}

export default function aboutModule() {
    const div = document.createElement('div');
    const pageName = document.createElement('h1');
    pageName.innerText = 'ABOUT';
    div.appendChild(pageName);

    const welcomeText = document.createElement('h1');
    welcomeText.innerText = `Welcome to ${RESTAURANT_NAME}!\nAt ${RESTAURANT_NAME}, we are passionate about bringing people together through the love of food. Established in ${ESTABLISHED_YEAR}, our restaurant has become a beloved destination for locals and visitors alike in ${LOCATION}.`;
    
    div.appendChild(createSection(1,{
        heading: 'Our Story',
        content: `${RESTAURANT_NAME} was founded by ${FOUNDER}, who have a deep-rooted passion for Italian cuisine. Inspired by their grandmother's traditional recipes from Tuscany, we set out to create a dining experience that combines authentic flavors with a modern twist.
\nFrom our humble beginnings, we have grown into a vibrant community hub where friends and families gather to enjoy delicious meals and create lasting memories.`
    }));
    div.appendChild(createSection(2,{
        heading: 'Our Mission',
        content: `Our mission is to provide exceptional food and service in a warm and   welcoming environment. We believe that every meal should be a celebration, and we strive to make each dining experience memorable. We are committed to using only the        freshest, locally sourced ingredients to create dishes that not only taste great but also reflect our love for Italian cuisine.`
    }));
    div.appendChild(createSection(3,{
        heading: 'Meet Our Team',
        content: `Our talented team is the heart of Bella Cucina. Led by our head chef,        Marco Bellini, who brings over 15 years of culinary experience, our kitchen staff is dedicated to crafting each dish with care and creativity.\nOur front-of-house team is equally passionate about providing outstanding service, ensuring that every guest feels like part of our family. Together, we work hard to create a dining experience that exceeds your expectations.`
    }));

    return div;
}