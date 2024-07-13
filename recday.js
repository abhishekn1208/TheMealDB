import navbar from "./component/navbar.js";
let nav = document.getElementById("navbar")
nav.innerHTML = navbar()

let select = document.getElementById("category")
select.addEventListener("input",function(){
    fetchData()
})

async function fetchData(){
  try {
    let inputVal = select.value;
    console.log(inputVal);
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${inputVal}`)
    let data = await res.json()
    console.log(data.meals)
    displayData(data.meals)
  } catch (error) {
    console.log(error)
  }
}

function displayData(arr){
    let container = document.getElementById("main")
    container.innerHTML = "";
    arr.forEach((ele) => {
        let card  = document.createElement("div")

        let image = document.createElement("img")
        image.src = ele.strMealThumb;
        let title = document.createElement("h4")
        title.innerText = ele.strMeal;

        card.append(image,title)
        container.append(card)

    });
}