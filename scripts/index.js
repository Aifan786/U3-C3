// Store the wallet amount to your local storage with key "amount"
console.log("wallet")

function money(){

    // let wal = document.getElementById("wallet");
    let moneys = document.getElementById("amount");

    let total = moneys.reduce(function(sum,el){
        return sum+el;
    },0)

    console.log(total)

    document.querySelector("wallet").innerText = `${total}`

//     let div = document.createElement("div");
//     let rs = document.createElement("h1");
//     rs.innerText = moneys;
//     div.append(rs);
//     wal.append(div)

//     let price
}