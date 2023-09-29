
fetch('./products.json')
.then((res) => {
    return res.json();
})
.then((products) => {
    console.log(products);
    let data1 = ""; 
    products.products.map((values) => {
        data1 += `
        <div class="card" style="width: 18rem;">
          <img id="pic" src="${values.thumbnail}" height="200px" width="200px" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${values.title}</h5>
            <p class="card-text">${values.description}</p>
            <p class="card-text">${values.price}</p>
          </div>
        </div>`;
        const get = document.getElementById("container");
        get.innerHTML = data1;
    });
})



// (async function () {
//     const response = await fetch('./products.json');
//     const products = await response.json();
  
//     const inp = document.getElementById("input");
//     const dis = document.getElementById("display");
  
  
//     function dispResult(results) {
//       results.forEach(function (product) { 
//         let data1 = "";
//         data1 += `
//         <div class="card">
//           <img id="pic" src="${product.thumbnail}" class="card-img-top" alt="...">
//           <div class="card-body">
//             <h5 class="card-title">${product.title}</h5>
//             <p class="card-text">${product.description}</p>
//             <p class="card-text">$ ${product.price}</p>
//           </div>
//         </div>`;
//       });
  
//       const get = document.getElementById("container");
//       get.innerHTML = data1;
//     }
  
//     function search() {
//       const query = inp.value.toLowerCase();
//       const results = products.filter(function (product) {
//         return product.title.toLowerCase().includes(query);
//       });
  
//       dispResult(results); 
//     }
  
//     dis.addEventListener("click", search); 
  
//     search();
//   })().catch(error => {
//     console.log(error);
//   });



