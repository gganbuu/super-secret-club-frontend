import { Link } from "react-router"
import PrimaryButton from "../PrimaryButton/PrimaryButton"

const NavBar = ({isLoggedIn}) => {
    return (
        <header className='h-[4rem]'>
        {isLoggedIn 
        ? 
        (
        <nav>

        </nav>
        ) : (
        <nav className='max-w-7xl m-auto flex justify-end items-center gap-[1rem] p-[1rem]'>
            <Link to="/Login"> Login </Link>
            <Link to="/Sign Up"><PrimaryButton name="Sign Up"></PrimaryButton></Link>
        </nav>
        )}
        </header>
    )
}

export default NavBar