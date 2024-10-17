document.addEventListener('DOMContentLoaded',function(){
    const productList= document.getElementById("product-list");
    for(let product of products){
        const card = document.createElement('div');
        card.classList.add('col-lg-3','col-md-4','col-sm-6','mb-4')

        card.innerHTML = `
                    <div class="card h-100"> <!-- Ensure cards are of equal height -->
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body"> <!-- Use flexbox for vertical alignment -->
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text font-weight-bold">$${product.price.toFixed(2)}</p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                `;
    productList.appendChild(card);
}
})


const products=[
    {
        "name": "Premium Leather Bag",
        "description": "Handcrafted leather bag with multiple compartments and adjustable strap. Ideal for daily use or travel.",
        "price": 129.99,
        "image": "https://via.placeholder.com/400x300?text=Premium+Leather+Bag"
    },
    {
        "name": "Smart Watch Series 5",
        "description": "Advanced smartwatch with GPS, heart rate monitoring, and waterproof design. Comes in multiple colors.",
        "price": 199.99,
        "image": "https://via.placeholder.com/400x300?text=Smart+Watch+Series+5"
    },
    {
        "name": "Wireless Noise Cancellation Headphones",
        "description": "High-fidelity wireless headphones with active noise cancellation and up to 30 hours of battery life.",
        "price": 299.99,
        "image": "https://via.placeholder.com/400x300?text=Wireless+Headphones"
    },
    {
        "name": "Designer UV Sunglasses",
        "description": "Fashionable sunglasses with UV protection and scratch-resistant lenses. Available in various styles.",
        "price": 79.99,
        "image": "https://via.placeholder.com/400x300?text=Designer+Sunglasses"
    },
    {
        "name": "Gourmet Coffee Gift Set",
        "description": "A curated selection of gourmet coffee beans from around the world. Perfect gift for coffee lovers.",
        "price": 49.99,
        "image": "https://via.placeholder.com/400x300?text=Gourmet+Coffee+Gift+Set"
    },
    {
        "name": "Fitness Tracker Bracelet",
        "description": "Waterproof fitness tracker with heart rate monitor, sleep tracking, and smartphone notifications.",
        "price": 89.99,
        "image": "https://via.placeholder.com/400x300?text=Fitness+Tracker+Bracelet"
    },
    {
        "name": "Portable Bluetooth Speaker",
        "description": "Compact Bluetooth speaker with powerful sound and built-in microphone for hands-free calls.",
        "price": 59.99,
        "image": "https://via.placeholder.com/400x300?text=Bluetooth+Speaker"
    },
    {
        "name": "Professional Chef's Knife",
        "description": "High-quality chef's knife made from Damascus steel. Perfect for slicing and dicing in the kitchen.",
        "price": 149.99,
        "image": "https://via.placeholder.com/400x300?text=Professional+Chef's+Knife"
    }
]
