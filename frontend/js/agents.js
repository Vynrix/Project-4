
async function loadAgents(){

let res = await fetch("/api/agents")
let agents = await res.json()

let html=""

agents.forEach(a=>{
html+=`<div>${a.name} - ${a.status}</div>`
})

document.getElementById("agents").innerHTML=html

}

setInterval(loadAgents,5000)
