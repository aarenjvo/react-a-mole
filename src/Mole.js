import { useEffect } from 'react'
import moleImg from './mole.png'

const Mole = ({ toggle, handleClick }) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={ moleImg } onClick={handleClick} />
        </div>
    )
}

export default Mole