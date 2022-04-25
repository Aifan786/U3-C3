// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let check = document.getElementById("movie");

let book = JSON.parse(localStorage.getItem("movie"))

let div = document.createElement("div");
div.setAttribute("class","ctr")

let title = document.createElement("h2");
title.innerText = book.Title;

let image = document.createElement("img");
image.src = book.Poster;

div.append(title,image)
check.append(div)

function show(){

    alert("Booking Successfull!")
}