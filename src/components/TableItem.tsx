import React from "react"
// import  "./tableItem.css";

function TableItem({elem}) {
    return (
        <tr>
            <th >{elem.KTR}</th>
            <th>{elem.brand}</th>
            <th> {elem.energy_meter_number}</th>
            <th>{elem.final_readings}</th>
            <th>{elem.initial_readings}</th>
            <th>{elem.legal_entity}</th>
            <th>{elem.room_number}</th>
        </tr>
    )
}

export default TableItem
