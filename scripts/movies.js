// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let id;
let Movies = document.getElementById("movies")

async function searchMovies(){

    try{
        let movies_name = document.getElementById("search").value;
        let out = await fetch(`https://www.omdbapi.com/?apikey=20b4886&s=${movies_name}`)
        let collect = await out.json();
        console.log('collect:', collect)
        console.log(collect.Search)
        let Amovies = collect.Search;
        return Amovies;
    }
    catch(err){
        console.log('err:', err)
        
    }
}

function appendMovies(data){

    Movies.innerHTML = null
    data.forEach(function({Poster,Title}){

        let div = document.createElement("div");
        div.setAttribute("class","divs")

        let image = document.createElement("img");
        image.src = Poster;

        let title = document.createElement("h4");
        title.innerText = Title;

        let btn = document.createElement("button");
        btn.innerText = "Book now";

        let info = {
            Poster,
            Title,
        }
        btn.onclick = ()=>{
            bookMovies(info)
        }

        div.append(image,title,btn)
        Movies.append(div)
    })

    function bookMovies(d){
        window.location.href = "checkout.html"
        localStorage.setItem("movie", JSON.stringify(d))
    }
}





async function main(){

    let data = await searchMovies();
    if(data===undefined){

        return false;
    }

    appendMovies(data);

}


function debounce(func,delay){
  
   if(id){
       clearTimeout(id);
   }
   id = setTimeout(function(){

       func();

   },delay)
}