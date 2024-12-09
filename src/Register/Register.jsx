import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();
  const [error,setError] = useState({});
  const notify = (message) => toast.error(message);

  const {createUser,setUser,updateUserProfile} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if(password.length<6){
            toast.error("password must be 6 words or more");
            return;

        }

        if (!/[A-Z]/.test(password)) {
             toast.error("Password must contain at least one uppercase letter.");
             return;
          }
          if (!/[a-z]/.test(password)) {
           toast.error("Password must contain at least one lowercase letter.");
           return ;
          }
          if (!/[0-9]/.test(password)) {
           toast.error("Password must contain at least one Number.");
           return ;
          }

       // Password validation regex for individual checks
      //  const passwordLengthRegex = /^.{6,}$/;
      //  const passwordLowercaseRegex = /[a-z]/;
      //  const passwordUppercaseRegex = /[A-Z]/;
      //  const passwordNumberRegex = /\d/;
      //  const passwordSpecialCharRegex = /[@$!%*?&]/;

      //  setError(""); // Clear previous errors

      //  // Password checks
      //  if (!passwordLengthRegex.test(password)) {
      //      setError("Password must be at least 6 characters long.");
      //      return;
      //  }

      //  if (!passwordLowercaseRegex.test(password)) {
      //      setError("Password must contain at least one lowercase letter.");
      //      return;
      //  }

      //  if (!passwordUppercaseRegex.test(password)) {
      //      setError("Password must contain at least one uppercase letter.");
      //      return;
      //  }

      //  if (!passwordNumberRegex.test(password)) {
      //      setError("Password must contain at least one number.");
      //      return;
      //  }

      //  if (!passwordSpecialCharRegex.test(password)) {
      //      setError("Password must contain at least one special character (@$!%*?&).");
      //      return;
      //  }

      //  if (!checkbox) {
      //      setError("You must agree to the terms and conditions.");
      //      return;
      //  }
       
    

    

        console.log(name,email,password,photo);
  //  create user

  //       createUser(email,password)
  //       .then(result =>{
  //         console.log(result.user);
  //         setUser(user);
  //         // e.target.reset();
  //           updateUserProfile(auth.currentUser,{displayName: name, photoURL: photo})
  //           // toast.success("profile updated successfully");
  //          .then(()=>{
  //           //  toast.success("user successfully  created");
  //            e.target.reset();
  //            navigate('/');
  //        }).catch(error => {
  //         setError(error.message);
  //         notify(error.message);
  //     });
  // })
  // .catch(error => {
  //     setError(error.message);
  //     notify(error.message);
  //       });

  //     };
  
  createUser(email, password)
  .then((result) => {
    const user = result.user;
    setUser(user);
    updateUserProfile({ displayName: name, photoURL: photo })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
    // ..
  });
};

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex">
  <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">Register Now!</h1>
          
          </div>
    <div className="card bg-base-100 w-full shrink-0 shadow-2xl p-4">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        {/*image url  */}
        <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo-url"
              className="input input-bordered"
              required
            />
          </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        {/* password input */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
     
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center font-semibold">
          Allready Have An Account ?{" "}
          <Link className="text-red-500" to="/login">
            Login
          </Link>
        </p>
    </div>
  </div>
</div>

        </div>
    );
};

export default Register;