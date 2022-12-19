let jokep = document.querySelector("#joke");
let category = document.querySelector("#category");
let btn = document.querySelector("#btn");

let loadData= () =>{
    fetch("https://api.chucknorris.io/jokes/random")
    .then((res)=>{
        return res.json();
    }).then((joke)=>

    {   
        jokep.innerHTML = joke.value;
        if(joke.categories[0] == undefined){
            category.innerHTML = ""
        }else{
        category.innerHTML = joke.categories[0];}

    })
}
btn.addEventListener("click", loadData)

loadData()
