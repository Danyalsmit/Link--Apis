(async function(){
const response = await fetch("https://dummyjson.com/products");
const products = await response.json();


const plc = document.getElementById("plc")
const btn = document.getElementById("btn")

function search(){
    const query = plc.value;
    console.log(query);

}
btn.addEventListener("click",search);

})();


            


  
