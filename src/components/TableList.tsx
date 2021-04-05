import React from "react"
import TableItem from "./TableItem";
import  "./tableList.css";
import {electricity} from "../shared/masElectricity";

function TableList(props: electricity[]) {
    return (
        <div>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">KTR</th>
                    <th scope="col">brand</th>
                    <th scope="col">energy_meter_number</th>
                    <th scope="col">final_readings</th>
                    <th scope="col">initial_readings</th>
                    <th scope="col">legal_entity</th>
                    <th scope="col">room_number</th>
                </tr>
                </thead>
                <tbody>
                { props.map((elem: electricity) => {
                    return <TableItem elem={elem} key={elem.id}/>
                }) }
                </tbody>
            </table>
        </div>
    )
}

export default TableList
