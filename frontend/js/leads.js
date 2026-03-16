
async function loadLeads(){

let res = await fetch("/api/leads")
let data = await res.json()

let html=""

data.forEach(l=>{
html+=`
<div class='lead-card'>
<h3>${l.name}</h3>
<p>${l.city}</p>
<button>Generate Website</button>
</div>
`
})

document.getElementById("leads").innerHTML=html

}

loadLeads()
