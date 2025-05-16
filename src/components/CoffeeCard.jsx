import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, photo, name, price, quantity } = coffee;

  const handleDelete = () => {
    console.log(_id);

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        console.log(result.isConfirmed);

        //start deleting the coffee
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has beeb deleted",
                icon: "success",
              });
              //remove the coffee from the state
              const remainingCoffees = coffees.filter(cof => cof._id !== _id );
              setCoffees(remainingCoffees)
            }
          });

      });
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm border-2">
        <figure>
          <img src={photo} alt="Coffe" />
        </figure>
        <div className="flex justify-around w-full mt-10">
          <div>
            <h2 className=""> Name : {name}</h2>
            <p>Price {price}</p>
            <p>Quantity: {quantity}</p>
          </div>
          <div className="card-actions justify-end space-x-2">
            <div className="join join-vertical">
            <Link to={`/coffee/${_id}`} >
              <button className="btn join-item">View</button>
            
            </Link>

            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn join-item">Edit</button>
            
            </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn join-item"
              >
                x
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
