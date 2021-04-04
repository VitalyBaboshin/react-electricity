import React, {useContext} from "react"
import PropTypes from "prop-types"
// import Context from '../context'

const styles = {
    li: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({elem, index}) {

    return (
        <li style={styles.li}>
            <p>{elem.KTR}</p>
            <p>{elem.brand}</p>
            <p>{elem.energy_meter_number}</p>
            <p>{elem.final_readings}</p>
            <p>{elem.initial_readings}</p>
            <p>{elem.legal_entity}</p>
            <p>{elem.room_number}</p>
        </li>
    )
}

export default TodoItem
