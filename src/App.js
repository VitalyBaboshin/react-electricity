import React, {useEffect} from 'react'
import TableList from "./components/TableList";

function App() {

    const todo = {
        "electricity": [
            {
                "KTR": 240,
                "brand": "ОКЕЙ",
                "energy_meter_number": "07927265",
                "final_readings": 67800,
                "id": 1,
                "initial_readings": 67433,
                "legal_entity": "ООО \"ОКЕЙ\"",
                "room_number": "0-01"
            },
            {
                "KTR": 240,
                "brand": "ОКЕЙ",
                "energy_meter_number": "07926824",
                "final_readings": 20318,
                "id": 2,
                "initial_readings": 20115,
                "legal_entity": "ООО \"ОКЕЙ\"",
                "room_number": "0-01"
            }
        ]
    }

    const [mas, setMas] = React.useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setMas(todos)
                    // setLoading(false)
                },2000)

            })
    }, [])

    console.log(todo.length)
    return (
        <div className="container pt-3">
            <p>123</p>
            <div className="row">
                {todo.electricity.length ?
                    <TableList todo={todo.electricity}/>
                    :
                    <p>Empty mas</p>
                }
            </div>
        </div>
    );
}

export default App;
