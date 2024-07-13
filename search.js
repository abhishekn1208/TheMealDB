import navbar from "./component/navbar.js";
let nav = document.getElementById("navbar")
nav.innerHTML = navbar();



let btn = document.getElementById("search")
btn.addEventListener("click", function(){
    
   
    fetchData();
})

async function fetchData(){
    let inputVal = document.getElementById("input1").value;
    console.log(inputVal)
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputVal}`);
    let data = await res.json();
    console.log(data.meals)
    displayData(data.meals)
}

function  displayData(arr){
    let container =document.getElementById("main");
    container.innerHTML = "";
    arr.forEach((ele) => {
        let card = document.createElement("div")

        let image = document.createElement("img")
        image.src = ele.strMealThumb;

        let name = document.createElement("h4")
        name.innerText = ele.strMeal;

        let desc = document.createElement("p")
        desc.innerText = ele.strInstructions;

        card.append(image,name,desc)
        container.append(card)
    });
}