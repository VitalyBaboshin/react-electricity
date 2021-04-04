import React, {useEffect} from 'react'
import './index.css';
import TableList from "./components/TableList";
import Loader from './shared/loader'
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
            },
            {
                "KTR": 240,
                "brand": "ОКЕЙ",
                "energy_meter_number": "07926824",
                "final_readings": 20318,
                "id": 3,
                "initial_readings": 20115,
                "legal_entity": "ООО \"ОКЕЙ\"",
                "room_number": "0-01"
            },
            {
                "KTR": 240,
                "brand": "ОКЕЙ",
                "energy_meter_number": "07926824",
                "final_readings": 20318,
                "id": 4,
                "initial_readings": 20115,
                "legal_entity": "ООО \"ОКЕЙ\"",
                "room_number": "0-01"
            },
            {
                "KTR": 240,
                "brand": "ОКЕЙ",
                "energy_meter_number": "07926824",
                "final_readings": 20318,
                "id": 5,
                "initial_readings": 20115,
                "legal_entity": "ООО \"ОКЕЙ\"",
                "room_number": "0-01"
            }
        ]
    }

    const [mas, setMas] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    // const url = ''

    useEffect(() => {
        Promise.resolve(todo)
        // fetch(url)
        //     .then(response => response.json())
            .then(elems => {
                setTimeout(() => {
                    setMas(elems)
                    setLoading(false)
                },2000)
            })
    }, [])

    return (
        <div className="container pt-3">
            <div className="row">
                {loading && <Loader />}
                {(mas.length !== 0 && mas.electricity && mas.electricity.length !== 0) ?
                    <TableList todo={mas.electricity}/>
                    :
                    loading ? null : mas.electricity ?
                        <p style={{textAlign: 'center'}}>Empty mas</p>
                        :
                        <p style={{textAlign: 'center'}}>Не найдено поле electricity</p>
                }
            </div>
        </div>
    );
}

export default App;
