import React from "react"
import PropTypes from "prop-types"
import TableItem from "./TableItem";


const styles = {
    ul: {
        listStyle: "none",
        margin: 0,
        padding: 0
    }
}
function TodoList(props) {
    return (
        <ul style={styles.ul}>
            { props.todo.map((elem, index) => {
                return <TableItem elem={elem} key={elem.id} index={index}/>
            }) }
        </ul>
    )
}

// TodoList.propTypes = {
//     todos: PropTypes.arrayOf(PropTypes.object).isRequired
// }

export default TodoList
