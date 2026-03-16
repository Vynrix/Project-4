
async function send(){

let cmd = document.getElementById("cmd").value

let res = await fetch("/api/ai",{
method:"POST",
headers:{ "Content-Type":"application/json"},
body:JSON.stringify({cmd})
})

let data = await res.json()

document.getElementById("chat").innerHTML += `<p>${data.reply}</p>`

}
