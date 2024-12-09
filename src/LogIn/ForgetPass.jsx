import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const ForgetPass = () => {

    let location = useLocation();
    let ReceivedEmail = location.state?.userEmail;
  
    let { resetPass } = useContext(AuthContext);
  
    function handleReset(e) {
      e.preventDefault();
      let email = e.target.email.value;
      resetPass(email)
        .then((res) => {
          toast.success("Password reset email sent");
  
          window.location.href = "https://gmail.com";
        })
        .catch((err) => toast.error(err.message));
    }

    return (
        <div>
            <Helmet>
                <title>Reset Password || Career Hub</title>
            </Helmet>
            <div className="hero svg-background min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-white bg-opacity-5 w-full max-w-md shrink-0 shadow-2xl">
            <h2 className="text-center text-white text-2xl font-bold pt-5">
              Sucess Blueprint
            </h2>
            <form onSubmit={handleReset} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  value={ReceivedEmail}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-success-primary-400 border-none text-white hover:bg-success-primary-500">
                  Reset Email
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default ForgetPass;