import { useContext } from "react"
import { Link } from "react-router-dom"
import ListContext from "../../Context/ListContext"

const Header = () => {
    const { list, setList } = useContext(ListContext)
    const value = list
    console.log(value)
    return (
        <div>
            <Link to="/CryptoWorld/exchange" onClick={() => setList({ ...list, excActive: 'exc' })}>Exchange</Link>
            <Link to="/CryptoWorld/coin" onClick={() => setList({ ...list, coinActive: 'coin' })}>Coins</Link>
        </div>
    )
}

export default Header
