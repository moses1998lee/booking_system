import React, { useEffect, useState } from "react";
import { fetchTimeSlots } from "../../api/index";
import Button from "../../components/button";
import { pushBooking } from "../../api/booking";

export default function BookingCalendar() {
  const [date, setDate] = useState<string>("");
  const [slots, setSlots] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string>("");

  // Pull slots and repull whenever date changes
  useEffect(() => {
    fetchTimeSlots(date)
      .then((data) => setSlots(data))
      .catch((err) => console.error("Failed to fetch services", err));
  }, [date]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  const slotOnClick = (value: React.ReactNode) => {
    //TODO: Consider if selectedSlot should be in parent node? As we might display it
    // to confirm the booking(?)
    if (value === "string") {
      setSelectedSlot(value as string);
    }
    pushBooking(date, selectedSlot); // selectedSlot in case required for confirmation
  };

  return (
    <div>
      <div>
        <title>Select Date</title>
        <label>
          <input type="date" value={date} onChange={handleChange} />
        </label>
      </div>

      <div>
        <h1>Available Time Slots</h1>
        {slots.map((slot) => (
          <li>
            <Button onClick={slotOnClick}>{slot}</Button>
          </li>
        ))}
      </div>
    </div>
  );
}
