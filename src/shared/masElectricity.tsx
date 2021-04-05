export interface masElectricity {
    [key: string]: electricity[]
}

export interface electricity {
    "KTR": number,
    "brand": string,
    "energy_meter_number": string,
    "final_readings": number,
    "id": number,
    "initial_readings": number,
    "legal_entity": string,
    "room_number": string
}
