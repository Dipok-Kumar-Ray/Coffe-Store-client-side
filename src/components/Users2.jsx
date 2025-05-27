import { useQuery } from '@tanstack/react-query';
// import React, { useEffect, useState } from 'react';

const Users2 = () => {
    const {data: users} = useQuery({
        queryKey:['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/user')
            return res.json();
        }
    })

    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     fetch('localhost://3000/user')
    //     .then(res => res.json())
    //     .then(data => {
    //         setUsers(data)
    //     })
    // },[])


    const handleDelete = id => {
        fetch(`http://localhost:3000/user/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deleteCount > 0){
                console.log('User deleted successfully');
                //remove the user from the UI
                // const remainingUsers = users.filter(user => user._id !== id);
                // setUsers(remainingUsers)
            }
        })
    }
    return (
          <div>
            {/* <h2 className="text-3xl">Users: {users.length}</h2> */}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                No
                            </th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user.photo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                            <div className="text-sm opacity-50">{user.address}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.phone}
                                </td>
                                <td>{user.email}</td>
                                <th>
                                    <button className="btn btn-xs">V</button>
                                    <button className="btn btn-xs">E</button>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-xs">X</button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Users2;