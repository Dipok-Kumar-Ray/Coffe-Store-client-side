import React, { useContext } from 'react';
import { AuthContext } from '../constexts/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    console.log(createUser);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const {email, password, ...restFormData} = Object.fromEntries(formData.entries());

       

        // console.log(email, password, userProfile);
        
        // const email = formData.get('email');
        // const password = formData.get('password');


        //create user in the firebase
        createUser(email, password)
        .then(result => {
            console.log(result.user);

            const userProfile = {
              email,
              ...restFormData,
              creationTime : result.user?.metadata?.creationTime,
              lastSignInTime : result.user?.metadata?.lastSignInTime,
            }

            //save profile info in the db
            fetch('http://localhost:3000/users', {
              method : 'POST',
              headers : {
                'content-type' : 'application/json'
              },
              body : JSON.stringify(userProfile)
            })
            .then(res => res.json())
            .then(data => {
             if(data.insertedId){
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your account is Created',
                showConfirmButton : false,
                timer: 2000
              })
             }
            })

        })
        .then(error => {
            console.log(error);
        })
    }
    return (
 
    <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>

        <form onSubmit={handleSignUp} className="form">
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Your Name" />
          <label className="label">Address</label>
          <input type="text" name='address' className="input" placeholder="Your Address" />
          <label className="label">Phone</label>
          <input type="text" name='phone' className="input" placeholder="Your Phone Number" />
          <label className="label">Photo URL</label>
          <input type="text" name='photo' className="input" placeholder="Your Photo URL" />
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Your Email  " />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
      </div>
    </div>

    );
};

export default SignUp;