// fetch('./products.json') // Assuming products.json is in the same directory as your HTML file
//     .then(res => {
//         return res.json();
//     })
//     .then(data => {
//         const product = data.products; // Assuming you want to display the first product

//         // Select elements by their IDs
//         const pic = document.getElementById("pic");
//         const des = document.getElementById("des");
//         const tex = document.getElementById("tex");

//         // Update card elements with product data
//         pic.src = product.thumbnail;
//         des.textContent = product.title;
//         tex.textContent = product.description;
//     })
//     .catch(error => console.log(error));

fetch('./products.json')
    .then(res => {
        return res.json();
    })
    .then(data => {
        const products = data.products;
        const productInfoContainer = document.getElementById('product-info-container');


        // Iterate over the products array
        products.forEach(product => {
            // Access individual product properties here
            const productId = product.id;
            const productTitle = product.title;
            const productDescription = product.description;
            const productPrice = product.price;
            const productImages = product.thumbnail;

            // ... and so on for other properties
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `
                <p>Product ID: ${productId}</p>
                <p>Product Title: ${productTitle}</p>
                <p>Product Description: ${productDescription}</p>
                <p>Product Price: $${productPrice}</p>
                <img src="${productImages}" /> 
                <hr>
            `;

            // Append the product information to the container
            productInfoContainer.appendChild(productDiv);
        });
    })
    .catch(error => console.log(error));






