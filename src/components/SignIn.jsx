// import React, { useContext } from 'react';
// import { AuthContext } from '../contexts/AuthContext'; // ✅ ঠিক path দিও
// import axios from 'axios';

import { useContext } from "react";
import { AuthContext } from "../constexts/AuthContext";
import axios from "axios";

// import { useContext } from "react";
// import { AuthContext } from "../constexts/AuthContext";
// import axios from "axios";

const SignIn = () => {
    const users = useContext(AuthContext)
    // const { signInUser } = useContext(AuthContext);

const handleSignIn = async (e) => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;

  console.log("Trying to sign in with:", email, password); 

  axios.patch('http://localhost:3000/user',users)
  .then(data => {
    console.log(data.data);
  })


}

    // const handleSignIn = async (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const email = form.email.value;
    //     const password = form.password.value;

    //     try {
    //         // Firebase এ লগইন রিকুয়েস্ট
    //         const result = await signInUser(email, password);
    //         const user = result.user;
    //         console.log("Firebase logged in user:", user);

    //         const signInInfo = {
    //             email,
    //             lastSignInTime: user.metadata?.lastSignInTime,
    //         };

    //         // ডেটাবেজে ইউজার আপডেট (PATCH)
    //         const res = await axios.patch('http://localhost:3000/users', signInInfo);
    //         console.log('Updated user in DB:', res.data);
    //     } catch (error) {
    //         console.error("Login failed:", error.message);
    //     }
    // };

    return (
        <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl mt-10">
            <div className="card-body">
                <h1 className="text-3xl font-bold mb-4">Sign In</h1>

                <form onSubmit={handleSignIn}>
                    <div className="mb-4">
                        <label className="label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="input input-bordered w-full"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="input input-bordered w-full"
                            placeholder="Password"
                            required
                        />
                    </div>

                    <div className="text-sm mb-2">
                        <a className="link link-hover text-blue-500">Forgot password?</a>
                    </div>

                    <button type="submit" className="btn btn-neutral w-full">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;








// import React, { useContext } from 'react';
// import { AuthContext } from '../constexts/AuthContext';
// import axios from 'axios';
// import { useLoaderData } from 'react-router';

// const SignIn = () => {
//     const {signInUser} = useContext(AuthContext);
//     const users = useLoaderData();

//     const handleSignIn = e => {
//         e.preventDefault();
//         const form = e.target;
//         const  email  = form.email.value;
//         const  password   = form.password.value;
//         console.log(email, password);

//         //firebase sign in send

// axios.patch('http://localhost:3000/users', signInInfo)
//   .then(data => {
//     console.log(data.data);
//   });

            //update last sign in to the database
        //     fetch('http://localhost:3000/users', {
        //         method : 'PATCH',
        //     headers: {
        //         'content-type' : 'application/json'
        //     },
        //     body: JSON.stringify(signInInfo)   
        //    })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log('after update patch', data);
        //     })

        //  })
        //  .catch(error => {
        //     console.log(error);
        //  })

//     }
//     return (
//          <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl">
//       <div className="card-body">
//       <h1 className="text-5xl font-bold">Sign In now!</h1>

//         <form onSubmit={handleSignIn} className="form">
//           <label className="label">Email</label>
//           <input type="email" name='email' className="input" placeholder="Your Email  " required/>
//           <label className="label">Password</label>
//           <input type="password" name='password' className="input" placeholder="Password" required/>
//           <div><a className="link link-hover">Forgot password?</a></div>
//           <button className="btn btn-neutral mt-4">Sign In</button>
//         </form>
//       </div>
//     </div>
//     );
// };

// export default SignIn;