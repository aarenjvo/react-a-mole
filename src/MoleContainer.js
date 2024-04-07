import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

const MoleContainer = ({ score, setScore }) => {
    let [theMole, setTheMole] = useState(false)

    const handleClick = (e) => {
        setScore(score + 1)
        setTheMole(false)
    }

    let displayMole = theMole ? <Mole toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole} />

    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            { displayMole }
        </div>
    )
}

export default MoleContainer