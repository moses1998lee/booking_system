from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # restrict this in production
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/slots/{date}")
def get_slots(date: str):
    print(f"Date received: {date}")
    return (
        ["09:00", "10:30", "14:00"]
        if date.endswith("01") or date.endswith("02")
        else []
    )


@app.put("/select_slot/{date}/{slot_time}")
def select_slot(date: str, slot_time: str):
    print(f"Slot selected: {slot_time} on {date}")
    return {"message": f"Slot {slot_time} on {date} selected successfully."}
