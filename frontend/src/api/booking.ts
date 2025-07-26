export async function fetchTimeSlots(date: string): Promise<string[]> {
    const response = await fetch(`http://localhost:8000/slots/${date}`);
    if (!response.ok) throw new Error("Failed to fetch");
    return await response.json();
}

export async function fetchServices(): Promise<string[]> {
    // Placeholder for fetching services, if needed
    return ["Service 1", "Service 2", "Service 3"];
}

export async function pushBooking(date: string, slot: string): Promise<void> {
    await fetch(`http://localhost:8000/select_slot/${date}/${slot}`, {
        method: 'PUT'
    })
};