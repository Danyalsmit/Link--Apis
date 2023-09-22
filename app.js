   
   (async function(){
   const response =await  fetch('./products.json');
   const products = await response.json();

   const inp = document.getElementById("input")
   const dis = document.getElementById("display")
   function dispResult(results){
    results.forEach(function (product) {
      data1+=`
      <div class="card">
        <img id="pic" src="${values.thumbnail}"  class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${values.title}</h5>
          <p class="card-text">${values.description}</p>
          <p class="card-text">$ ${values.price}</p>
        </div>
      </div>`;

      
    })
   }

   function serch(){
    const query=inp.value;
    const results= products.filter(function(product){
      return product.title.toLowerCase().includes(query)
     
    });

   }
  
        
        let data1="";
        
        products.products.map((values)=>{
            data1+=`
            <div class="card">
              <img id="pic" src="${values.thumbnail}"  class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${values.title}</h5>
                <p class="card-text">${values.description}</p>
                <p class="card-text">$ ${values.price}</p>
              </div>
            </div>`
            const get = document.getElementById("container")
            get.innerHTML=data1;
           

    
        
    


    }).catch(error =>{
        console.log(error);
    })

  })




