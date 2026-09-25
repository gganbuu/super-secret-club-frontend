import { Link, Form, useRouteLoaderData } from "react-router"
import PrimaryButton from "../PrimaryButton/PrimaryButton"

const NavBar = () => {
    const { user } = useRouteLoaderData("root") ?? {};
    return (
        <header className='h-[4rem]'>
        {user
        ? 
        (
        <nav className='max-w-7xl m-auto flex justify-between items-center p-[1rem]'>
            <div className='flex flex-row items-center gap-[1rem]'>
                <Link to="/">Home</Link>
                <Link to="/code">
                    <PrimaryButton name='Enter code'/>
                </Link>
            </div>
            <div className='flex flex-row items-center gap-[1rem]'>
                {user.username}
                <Form method='POST' action='/logout'>
                    <PrimaryButton type='submit' name='Logout'/>
                </Form>
            </div>
        </nav>
        ) : (
        <nav className='max-w-7xl m-auto flex justify-between items-center gap-[1rem] p-[1rem]'>
            <div className='flex flex-row items-center gap-[1rem]'>
                <Link to="/">Home</Link>
            </div>
            
            <div className='flex flex-row items-center gap-[1rem]'>
                <Link to="/login"> Login </Link>
                <Link to="/signup"><PrimaryButton name="Sign Up"></PrimaryButton></Link>
            </div>
        </nav>
        )}
        </header>
    )
}

export default NavBar