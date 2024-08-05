import RestaurantImg from '../assets/restaurant.jpg';

export default function homepageModule() {
    const div = document.createElement('div');
    const pageName = document.createElement('h1');
    pageName.innerText = 'HOMEPAGE';
    div.appendChild(pageName);
    const img = new Image();
    img.src = RestaurantImg;
    div.appendChild(img);

    const restaurantName = 'NgocLe';
    const restaurantLocation = 'District 1, HCMC, Viet Nam'
    const h1 = document.createElement('h1');
    h1.innerText = `Welcome to ${restaurantName}!`;
    const p_1 = document.createElement('p');
    const p_2 = document.createElement('p');
    const p_3 = document.createElement('p');

    p_1.innerHTML = `At <strong>${restaurantName}</strong>, we believe that dining is not just about food; it's about creating unforgettable experiences. Nestled in the heart of <strong>${restaurantLocation}</strong>, our restaurant offers a warm and inviting atmosphere where friends and family can gather to enjoy exquisite dishes crafted from the freshest ingredients.`;

    p_2.innerText = `Our talented chefs are dedicated to bringing you a menu that celebrates Pho, Bun Bo Hue, Banh Mi,... featuring both classic favorites and innovative creations. Whether you're here for a casual lunch, a romantic dinner, or a special celebration, we promise to provide exceptional service and a memorable dining experience.`;

    p_3.innerText = `Join us today and discover why ${restaurantName} is the perfect place for food lovers!`;

    div.appendChild(h1);
    div.appendChild(p_1);
    div.appendChild(p_2);
    div.appendChild(p_3);
    return div;
};