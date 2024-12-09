import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {
    
    const {user,signOutUser} = useContext(AuthContext);
    // console.log(user);


    const handleSignOut =() =>{
        signOutUser()
        .then(()=>{
          console.log("user logged out successfully")
        })
        .catch(error=>console.log("ERROR",error.message))
      }


     const links = <>
     <li><NavLink to="/">Home</NavLink></li>

     {
      user && <>
      <li><NavLink to ="/profile">MyProfile</NavLink></li>
     
      </>
    }

     
     </>

    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
            </ul>
          </div>
          <NavLink to ="/"className="btn btn-ghost text-xl">Carrer Hub</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
     

          {user && user?.email ? (
            <div className="flex flex-col gap-2">
              <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
              <p>{user.displayName}</p>
            </div>
          ) : (
            <img src={ ''} alt="" />
          )}
        {/* </div> */}
        {user && user?.email ? (
          <button   onClick={signOutUser} className="btn btn-neutral rounded-none">
           signOut
          </button>
        ) : (
          <Link to="/login" className="btn btn-neutral rounded-none">
            Login
          </Link>
        )}


        </div>
       </div>
    );
};

export default Navbar;