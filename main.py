from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="index")

@app.get("/", response_class=HTMLResponse)
async def read_root():
    with open("html/index.html", "r", encoding="utf-8") as file:
        return file.read()

@app.post("/submit_form")
async def handle_form_submission(request: Request):
    form_data = await request.form()
    
    name = form_data.get("name")
    email = form_data.get("email")
    age = form_data.get("age")

    print(f"Received form data: Name={name}, Email={email}, Age={age}")
    
    return JSONResponse(content={
        "message": "Form submitted successfully!",
        "received_data": {
            "name": name,
            "email": email,
            "age": age
        }
    })