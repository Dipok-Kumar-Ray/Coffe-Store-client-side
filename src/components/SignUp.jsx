import React from 'react';

const SignUp = () => {
    return (
 
    <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>

        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </fieldset>
      </div>
    </div>

    );
};

export default SignUp;