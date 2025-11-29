// Product Data
const products = [
    {
        id: 1,
        name: "Jaqueta Bomber Urbana",
        category: "Casacos",
        price: 299.90,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Camiseta Minimalista",
        category: "Camisetas",
        price: 89.90,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Calça Jeans Slim",
        category: "Calças",
        price: 199.90,
        image: "https://images.unsplash.com/photo-1542272617-08f08630329e?q=80&w=1974&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Tênis Streetwear",
        category: "Calçados",
        price: 459.90,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop"
    },
    {
        id: 5,
        name: "Vestido Floral Verão",
        category: "Vestidos",
        price: 159.90,
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1946&auto=format&fit=crop"
    },
    {
        id: 6,
        name: "Óculos de Sol Retro",
        category: "Acessórios",
        price: 129.90,
        image: "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 7,
        name: "Blazer Casual",
        category: "Casacos",
        price: 359.90,
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
    },
    {
        id: 8,
        name: "Relógio Clássico",
        category: "Acessórios",
        price: 599.90,
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop"
    },
    {
        id: 9,
        name: "teste",
        category: "Acessórios",
        price: 599.90,
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop"
    }

];

// Cart State
let cart = [];

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const cartCount = document.querySelector('.cart-count');
const cartBtn = document.getElementById('cart-btn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();
});

// Render Products
function renderProducts() {
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    Adicionar ao Carrinho
                </button>
            </div>
        </div>
    `).join('');
}

// Add to Cart
window.addToCart = function (productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();

        // Visual feedback
        const btn = event.target;
        const originalText = btn.innerText;
        btn.innerText = "Adicionado!";
        btn.style.backgroundColor = "var(--primary-color)";
        btn.style.color = "white";

        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = "";
            btn.style.color = "";
        }, 1000);
    }
};

// Update Cart Count
function updateCartCount() {
    cartCount.innerText = cart.length;

    // Animate badge
    cartCount.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartCount.style.transform = 'scale(1)';
    }, 200);
}

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
