<template>
    <div id="body">
        <header>
            <div class="navbar-left">
                <img src="/images/logo.png" alt="logo" id="logo" />
                <nav>
                    <router-link to="/">Home</router-link>
                    <router-link to="/shop">Shop</router-link>
                    <router-link to="/admin">Admin</router-link>
                </nav>
            </div>
            <div class="navbar-right">
                <button class="login-btn" @click="Login">Log In</button>
            </div>
        </header>

        <div class="container">
            <h2 class="title">Manage Products</h2>
            <button @click="showAddProductModal" class="add-product-btn">Add Product</button>
            <div class="product-list">
                <div class="product" v-for="product in products" :key="product.id">
                    <img :src="product.images" alt="Product Image" />
                    <h2>{{ product.name }}</h2>
                    <p>{{ product.description }}</p>
                    <p class="price">{{ product.price }}</p>
                    <p class="category">{{ product.category }}</p>
                    <button @click="editProduct(product)">Update</button>
                    <button @click="deleteProduct(product.id)">Delete</button>
                </div>
            </div>
        </div>

        <ProductModeling v-if="isModalVisible" :product="selectedProduct" @close="closeModal" @save="saveProduct" />
    </div>
</template>

<script>
import ProductModeling from "@/components/ProductModeling.vue";

export default {
    name: "AdminView",
    components: {
        ProductModeling,
    },
    data() {
        return {
            products: [],
            selectedProduct: null,
            isModalVisible: false,
        };
    },
    methods: {

        async fetchProducts() {
            // Dummy data for testing
            this.products = [
                {
                    id: 1,
                    name: "Adjustable Dumbbell Set",
                    description: "This is the description for product 1.",
                    price: "R10.00",
                    category: "Electronics",
                    images: "/images/products/Gym-Equipment/adjustable dumbell.jpg",
                },
                {
                    id: 2,
                    name: "Adjustable Bench",
                    description: "This is the description for product 2.",
                    price: "R20.00",
                    category: "Clothing",
                    images: "/images/products/Gym-Equipment/adjustable-bench.jpg",
                },
                {
                    id: 3,
                    name: "Horizon 3.0SC Indoor Cycle",
                    description: "This is the description for product 3.",
                    price: "R30.00",
                    category: "Books",
                    images: "/images/products/Gym-Equipment/horizon.jpg",
                },
                {
                    id: 4,
                    name: "Horizon EX59 Elliptical",
                    description: "This is the description for product 4.",
                    price: "R40.00",
                    category: "Accessories",
                    images: "/images/products/Gym-Equipment/horizon_ex59.jpg",
                },
            ];
        },
        showAddProductModal() {
            this.selectedProduct = { id: null, title: "", price: "", image: "" };
            this.isModalVisible = true;
        },
        editProduct(product) {
            this.selectedProduct = { ...product };
            this.isModalVisible = true;
        },

        async deleteProduct(productId) {
            this.products = this.products.filter((p) => p.id !== productId);
        },

        async saveProduct(product) {
            try {
                if (product.id) {
                    // Update product logic here (if needed)
                } else {
                    // Add new product logic here (if needed)
                    product.id = this.products.length + 1; // Simulate adding a new product
                    this.products.push(product);
                }
                this.closeModal();
            } catch (error) {
                console.error("Error saving product:", error);
            }
        },
        closeModal() {
            this.isModalVisible = false;
            this.selectedProduct = null;
        },
    },
    mounted() {
        this.fetchProducts(); // Load dummy data on component mount
    },
};
</script>


<style scoped>
#body {
    font-family: Arial, sans-serif;
    background-color: #333;
    margin: 0;
    padding: 0;
}

.title {
    color: white;
    font-size: 2em;
    margin-bottom: 20px;
}

header {
    background-color: #333;
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
}

#logo {
    height: 80px;
    width: 80px;
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    object-fit: cover;
}

.navbar-left {
    display: flex;
    color: white;
    align-items: center;
}

nav {
    margin-left: 20px;
}

nav a {
    margin: 0 15px;
    display: inline-block;
    padding: 10px 20px;
    text-decoration: none;
    color: white;
    border-radius: 20px;
    transition: background-color 0.3s ease, color 0.3s ease;
}

nav a:hover {
    background-color: white;
    color: crimson;
    border-radius: 20px;
}

.navbar-right {
    display: flex;
    align-items: center;
}

.navbar-right button {
    margin-left: 10px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2em;
}

.navbar-right .login-btn {
    background-color: black;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
}

.container {
    max-width: 1200px;
    margin: 20px auto;
    background-color: #444;
    border-radius: 8px;
    padding: 30px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.product-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.product {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    color: black;
    border: 2px solid crimson;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.product img {
    border-radius: 10px;
    width: 100%;
    height: auto;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    object-fit: cover;
}

.product .price {
 font-weight: bold;
 color: crimson;
}

.product .category {
    font-weight: bold;
    font-size:120%;
}

.product button {
    margin-top: 10px;
    padding: 10px 15px;
    background-color: crimson;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    transition: background-color 0.3s ease;
}

.product button:hover {
    background-color: #333;
    color: white;
    border: 1px solid crimson;
}

.add-product-btn {
    background-color: crimson;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 20px;
    transition: background-color 0.3s ease;
}

.add-product-btn:hover {
    background-color: #333;
    color: white;
    border: 1px solid white;
}
</style>