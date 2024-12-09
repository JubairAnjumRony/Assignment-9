import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
   const navigate = useNavigate();
  const {signInUser,signInWithGoogle} = useContext(AuthContext)

  const handleGoogleSignIn =() =>{
    signInWithGoogle()
    .then(result =>{
      console.log(result.user);
      toast.success("login sucessful");
      navigate('/');
    })
    .catch(error=>{console.error("ERROR",error.message);
    toast.error("wrong credentials");
    });

  }

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        
        console.log(email,password);
        signInUser(email,password)
        .then(result=>{
          console.log(result.user)
          toast.success("login sucessful");
          e.target.reset();
          navigate('/');
        })
        .catch(error=>{console.log('ERROR',error.message);
        toast.error("wrong credentials");
        });

    }


    
    
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">Login now!</h1>
          
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" autoComplete='current-password'required />
                <label className="label">
                  <Link to="/forgetpass" className="label-text-alt link link-hover">Forgot password?</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
                <p>
                <button onClick={()=>handleGoogleSignIn()} className='btn'>Google</button>
                </p>
              </div>
            </form>
            <p className='p-2 text-center mb-2'>New to this Website.Please<Link to ="/register">Register</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;