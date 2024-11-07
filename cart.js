

function initializeCart() {
  //Clear local Storage
  localStorage.clear();
  //Define initial Cart items
  const initailCart = [
    {
      id: 1,
      name: "laptop",
      price: 4,
      quantity: 1,
      image: "https://via.placeholder.com/400x300?text=+Leather+Laptop",
    },
    {
      id: 2,
      name: "laptop",
      price: 4,
      quantity: 1,
      image: "https://via.placeholder.com/400x300?text=+Leather+Laptop",
    },
    {
      id: 3,
      name: "laptop",
      price: 4,
      quantity: 1,
      image: "https://via.placeholder.com/400x300?text=+Leather+Laptop",
    },
    {
      id: 4,
      name: "laptop",
      price: 4,
      quantity: 1,
      image: "https://via.placeholder.com/400x300?text=+Leather+Laptop",
    },
    {
      id: 5,
      name: "laptop",
      price: 4,
      quantity: 1,
      image: "https://via.placeholder.com/400x300?text=+Leather+Laptop",
    },
    {
      id: 6,
      name: "laptop",
      price: 4,
      quantity: 1,
      image: "https://via.placeholder.com/400x300?text=+Leather+Laptop",
    },
    {
      id: 7,
      name: "laptop",
      price: 4,
      quantity: 1,
      image: "https://via.placeholder.com/400x300?text=+Leather+Laptop",
    },
  ];

  //Check if the cart is already in local Storage

  if (!localStorage.getItem("cart")) {
    // if not , store the initial cart items in the storage

    localStorage.setItem("cart", JSON.stringify(initailCart));
  }
}

initializeCart();

document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  const checkoutButton = document.getElementById('checkout-button');

  // Function to load cart items from localStorage and display them in the cart
  function loadCartItems() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      if (cart.length > 0) {
          cartItemsContainer.innerHTML = ''; // Clear any existing items

          cart.forEach((product, index) => {
              const cartItem = document.createElement('div');
              cartItem.className = 'cart-item';

              cartItem.innerHTML = `
                  <img src="${product.image}" alt="${product.name}">
                  <div class="cart-item-details">
                      <h3 class="cart-item-title">${product.name}</h3>
                      <p class="cart-item-price">$${product.price.toFixed(2)}</p>
                      <div class="cart-item-actions">
                          <input type="number" value="${product.quantity}" min="1" class="quantity-input">
                          <button class="remove-button">Remove</button>
                      </div>
                  </div>
              `;

              cartItemsContainer.appendChild(cartItem);

              // Add event listeners
              const removeButton = cartItem.querySelector('.remove-button');
              const quantityInput = cartItem.querySelector('.quantity-input');

              removeButton.addEventListener('click', () => {
                  cart.splice(index, 1);
                  localStorage.setItem('cart', JSON.stringify(cart));
                  loadCartItems();
              });

              quantityInput.addEventListener('change', (event) => {
                  product.quantity = parseInt(event.target.value);
                  localStorage.setItem('cart', JSON.stringify(cart));
                  updateCartTotal();
              });
          });

          updateCartTotal();
      } else {
          cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
      }
  }

  // Function to update the cart total
  function updateCartTotal() {
      let total = 0;
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.forEach(item => {
          total += item.price * item.quantity;
      });
      cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
  }

  // Initialize cart items
  loadCartItems();

  // Handle checkout button click
  checkoutButton.addEventListener('click', () => {
      alert('Proceeding to checkout');
  });
});
