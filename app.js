
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


Products.forEach(product => {
    let ProductContainer = document.querySelector('.pro-container');
    ProductContainer.innerHTML += `
    <div class="pro">
        <img src="${product}">
    <div class="des">
        <span>Adidas</span>
        <h5>Cartoon Astronaut T-Shirts </h5>
    <div class="star">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </div>
        <h4>$44</h4>
    </div>
        <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
    </div>

    `
} )