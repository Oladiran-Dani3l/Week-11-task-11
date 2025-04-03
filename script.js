const products = [
    { id: 1, name: "Get lost", price: 4.93, image: "/Images/written insults-1.jpg",},

    { id: 2, name: "Loser", price: 4.97, image: "/Images/written insults-2.jpg",},

    { id: 3, name: "In your dreams", price: 4.92, image: "/Images/written insults-3.jpg",},

    { id: 4, name: "Say to hand", price: 4.95, image: "/Images/written insults-4.jpg",},

    { id: 5, name: "Whatever", price: 4.95, image: "/Images/written insults-5.jpg",},

    { id: 6, name: "Not missing you", price: 4.97, image: "/Images/written insults-6.jpg",},

    { id: 7, name: "Go Away", price: 4.93, image: "/Images/written insults-7.jpg",},

    { id: 8, name: "Jerk", price: 4.95, image: "/Images/written insults-8.jpg",},

    { id: 9, name: "Mumu man", price: 5.99, image: "/Images/written insults-9.jpg",},

    { id: 10, name: "Suprise Note", price: 6.99, image: "/Images/written insults-10.jpg",}
]


const cartButtonArray = Array.from(document.getElementsByClassName("cart-btn"));
const cart = [];
let cartElement = null;
let mainElement = document.getElementById('main')

// Record each button that adds to cart
cartButtonArray.forEach((cartBtn, indx) => {

    cartBtn.addEventListener('click', () => {
        addToCart(indx + 1);
    })
});


function addToCart(num) {
    const product = products.find(product => product.id === num);
    // Checking for if a product has been added before
    const cartProduct = cart.find(cartProduct => cartProduct.id === num)
    if(cartProduct){
        console.log(`You've added this to cart before`);
        cartProduct.itemCount++;
    }else if(product) {
        const cartItems = {
            name: product.name,
            price: product.price,
            id: product.id,
            itemCount: 1
        }
        cart.push(cartItems);
    }

    showCart();
}

function showCart() {
    // Cart should be created only when an item is added to it
    if(!cartElement){
    cartElement = document.createElement('section');
    cartElement.classList.add('cart-container');
    mainElement.appendChild(cartElement);
    }

    let cartItem = cart.map(item => `
        <li>${item.name} - ${item.price} x ${item.itemCount}</li>
        `).join("");


    let totalPrice = cart.reduce((sum, item) => sum + item.price * item.itemCount, 0).toFixed(2);

   cartElement.innerHTML = `
       <h1>Cart</h1>
            <ul class="cart-list">
                ${cartItem}
                <li class="price-total"><b>Total: $${totalPrice}</b></li>
            </ul>

            
        <button class="confirm-btn checkout-btn"><a href="checkout.html">Proceed to checkout</a></button>
    `
}


// CHECKOUT FORM

let formName = document.getElementById("checkout-name");
let formEmail = document.getElementById("checkout-email");
let formAddress = document.getElementById("checkout-address");
const form = document.getElementById('form');


form.addEventListener('submit', function(event) {
    event.preventDefault();

    alert("Order has been placed! :)");
})