
async function loadRevenue(){

let res = await fetch("/api/revenue")
let data = await res.json()

document.getElementById("rev").innerHTML = "₹"+data.total

}

loadRevenue()
