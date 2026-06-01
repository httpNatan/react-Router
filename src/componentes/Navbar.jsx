import { Link } from "react-router"

const Navbar = ()=>{

    return(<>
            <Link to={'/'} >Home</Link>
            <Link to={'about'}>about</Link>
    </>)
}

export default Navbar