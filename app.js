const dis = document.getElementById("display")
const inp = document.getElementById("input")
fetch('./products.json').then((data)=>{
    
      return data.json();
    }).then((products)=>{

        
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
            function check(products){
              retutrn
            }
        })

        


    }).catch(error =>{
        console.log(error);
    })






