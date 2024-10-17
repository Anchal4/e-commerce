console.log("Test");

function initializeCart() {
  //Clear local Storage
  localStorage.clear();
  //Define initial Cart items
  const initailCart = [
    {
      id: 1,
      name: "laptop",
      price: 87000,
      quantity: 1,
      image: "https://via.placeholder.com/400x300?text=+Leather+Laptop",
    },
    {
      id: 2,
      name: "laptop",
      price: 87000,
      quantity: 1,
      image: "https://via.placeholder.com/400x300?text=+Leather+Laptop",
    },
    {
      id: 3,
      name: "laptop",
      price: 87000,
      quantity: 1,
      image: "https://via.placeholder.com/400x300?text=+Leather+Laptop",
    },
    {
      id: 4,
      name: "laptop",
      price: 87000,
      quantity: 1,
      image: "https://via.placeholder.com/400x300?text=+Leather+Laptop",
    },
    {
      id: 5,
      name: "laptop",
      price: 87000,
      quantity: 1,
      image: "https://via.placeholder.com/400x300?text=+Leather+Laptop",
    },
    {
      id: 6,
      name: "laptop",
      price: 87000,
      quantity: 1,
      image: "https://via.placeholder.com/400x300?text=+Leather+Laptop",
    },
    {
      id: 7,
      name: "laptop",
      price: 87000,
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

document.addEventListener("DOMContentLoaded", () => {
  initializeCart();

  const cartItemContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartitem = document.getElementById("cart-items");

  loadCartItems()

  function loadCartItems() {
    const cart = JSON.parse(localStorage.getItem("cart") || []);
    console.log('cart', cart, cart.length)
    if (cart.length > 0) {
      cartItemContainer.innerHTML = ""; //clear ant existing items
      cart.forEach((product, index) => {
        console.log('product,', product)
        const cartItem = document.createElement("div");
        cartItem.className = "cart-items";

        cartItem.innerHTML = `
            <img src="${product.image} " alt="${product.name}">
            <div class="cart-item-details">
                <h3 class="cart-item-title">${product.name}</h3>
                <p class="cart-item-price">$${product.price.toFixed(2)}</p>
                <div class="cart-item-actions">
                    <input type="number" value="${
                      product.quantity
                    }" min="1" class="quantity-input">
                    <button class="remove-button">Remove</button>
                </div>
            </div>
        `;
        console.log('cartItem', cartItem)
        cartItemContainer.appendChild(cartItem);

        // add event Listener

        const removeBtn = document.querySelector(".remove-button");
        const quantityInput = document.querySelector(".quantity-input");

        removeBtn.addEventListener("click", () => {
          cart.splice(index, 1);
          localStorage.setItem("cart", JSON.stringify(cart));
        //   loadCartItems();
        });

        quantityInput?.addEventListener("change", (e) => console.log(e.target?.value));
      });
    }
  }
});
