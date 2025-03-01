/**
 * this is products section imgs
 */
const Products = [
    './img/products/f1.jpg',
    './img/products/f2.jpg',
    './img/products/f3.jpg',
    './img/products/f4.jpg',
    './img/products/f5.jpg',
    './img/products/f6.jpg',
    './img/products/f7.jpg',
    './img/products/f8.jpg'
]

/**
 * this is arrivals section 
 */
const arrivalsProducts = [
    './img/products/n1.jpg',
    './img/products/n2.jpg',
    './img/products/n3.jpg',
    './img/products/n4.jpg',
    './img/products/n5.jpg',
    './img/products/n6.jpg',
    './img/products/n7.jpg',
    './img/products/n8.jpg',
]

Products.forEach(product => {
    document.querySelector('.pro-container').append(productsCreator(product));
});

arrivalsProducts.forEach(product => {
    document.querySelector('.products-arrivals').append(productsCreator(product));
});


function productsCreator(product){
    const productParent = document.createElement('div');
    const img = document.createElement('img');
    const description = document.createElement('div');
    const span = document.createElement('span');
    const h5 = document.createElement('h5');
    const starContainer = document.createElement('div');
    const h4 = document.createElement('h4');
    const a = document.createElement('a');

    productParent.classList.add('pro');
    img.src = product;

    description.classList.add('des');
    span.textContent = 'Adidas';
    h5.textContent = 'Cartoon Astronaut T-Shirts';
    h4.textContent = '$44';
    
    for( let i = 0; i < 5; i++){
        let star = document.createElement('i');
        star.classList.add('fas', 'fa-star');
        starContainer.append(star);
    }

    description.append(span, h5, starContainer, h4);
    productParent.append(img, description, a);
    return productParent;
};
