import PropTypes from 'prop-types';

import { NavLink, } from 'react-router-dom';


const Navbar = () => {


    // all nav links
    const links =

        <>
            <ul className='flex flex-wrap lg:justify-center items-center lg:gap-[15%] w-full lg:flex-row gap-[4vh] uppercase font-semibold'>
                <NavLink to={'/'} className="lg:ml-0 ml-[8%]">Home</NavLink>
                <NavLink to={'/addContacts'} className="btn btn-ghost">Add Contacts</NavLink>
                <NavLink to={'/allContacts'} className="btn btn-ghost">All Contacts</NavLink>
            </ul>


        </>









    return (
        <>
            <div className="navbar sticky top-0 mb-[5vh]  backdrop-blur-3xl  z-50  bg-transparent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        {/* mobile nav */}
                        <ul tabIndex={0} className="menu menu-sm rounded-md shadow-xl dropdown-content mt-3 z-[1] p-2 pl-[7vw] md:pl-[4vw] pt-[4vh] bg-base-100  h-[40vh] w-52">
                            <div>
                                {links}
                            </div>

                        </ul>
                    </div>
                    {/* logo and website name */}
                    <div className='flex justify-center items-center gap-3 '>
                        <img className='w-[16%]'
                            src="https://multichannelworks.com/wp-content/uploads/2015/10/users.png"
                            alt=""

                        />
                        <p className=' 2xl:text-2xl text-xl md:w-auto w-[50vw] font-bold text-gradient '>User Hub</p>
                    </div>
                </div>
                {/* desktop nav */}
                <div className=" hidden navbar-center lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <div className='w-[40vw]'>
                            {links}
                        </div>

                    </ul>
                </div>
                <div className="navbar-end">

                </div>
            </div>

        </>

    )
}
Navbar.propTypes = {

    window: PropTypes.func,
};



export default Navbar;