const container = document.getElementById("products-container");
const loading = document.getElementById("loading");

fetch("https://dummyjson.com/products")
    .then(response => {
        return response.json();
    })
    .then(data => {
        loading.style.display = "none";

        data.products.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p><strong>Price:</strong> $${product.price}</p>
                <p><strong>Rating:</strong> ${product.rating}</p>
                <p><strong>Brand:</strong> ${product.brand}</p>
                <p><strong>Category:</strong> ${product.category}</p>
            `;

            container.appendChild(card);
        });
    })
    .catch(error => {
        loading.textContent = "Error loading products!";
        console.log(error);
    });