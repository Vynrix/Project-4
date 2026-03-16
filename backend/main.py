
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Cmd(BaseModel):
    cmd:str

@app.get("/api/leads")
def leads():
    return [
        {"id":1,"name":"Royal Salon","city":"Kochi"},
        {"id":2,"name":"Green Cafe","city":"Ernakulam"}
    ]

@app.get("/api/agents")
def agents():
    return [
        {"name":"LeadScanner","status":"running"},
        {"name":"PrototypeBuilder","status":"idle"}
    ]

@app.post("/api/ai")
def ai(c:Cmd):
    return {"reply":f"AI received: {c.cmd}"}

@app.get("/api/revenue")
def revenue():
    return {"total":42000}
