import { Link, useLoaderData, Form } from "react-router"
import PrimaryButton from "../PrimaryButton/PrimaryButton"

const NavBar = ({user}) => {
    const {username, admin, member} = user || {};
    return (
        <header className='h-[4rem]'>
        {user
        ? 
        (
        <nav className='max-w-7xl m-auto flex justify-between items-center p-[1rem]'>
            <Link to="/code">
                <PrimaryButton name='Enter code'/>
            </Link>
            <div className='flex flex-row items-center gap-[1rem]'>
                {user.username}
                <Form method='POST' action='/logout'>
                    <PrimaryButton type='submit' name='Logout'/>
                </Form>
            </div>
        </nav>
        ) : (
        <nav className='max-w-7xl m-auto flex justify-end items-center gap-[1rem] p-[1rem]'>
            <Link to="/login"> Login </Link>
            <Link to="/signup"><PrimaryButton name="Sign Up"></PrimaryButton></Link>
        </nav>
        )}
        </header>
    )
}

export default NavBar