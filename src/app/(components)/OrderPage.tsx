"use client";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import {prisma} from '@/app/lib/prisma'


export default function OrderPage() {
  const [orderdata, setorderdata] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [stock,setStock] = useState('')


const fetchUsers = async () => {
  try {
    // Fetch all users
    const users = await prisma.user.findMany();

    // Log users to the console
    console.log('Current Users:');
    users.forEach((user: { patient_id: any; first_name: any; last_name: any; email: any; }) => {
      console.log(`ID: ${user.patient_id}, Name: ${user.first_name} ${user.last_name}, Email: ${user.email}`);
    });
  } catch (error) {
    console.error('Error fetching users:', error);
  } finally {
    await prisma.$disconnect();
  }
};




  const fillDb = async()=>{


  }

  const fetchStock = async()=>{


  }
  const makeOrder = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios.post('/api/registerApi', orderdata)
        .then(() => {
            // Clear the orderdata state
            setorderdata({first_name:'',last_name:'', email:'',password:''});
            // Log the success information to the console
            console.log('Registration successful! Proceed to login.');
            // Show a success toast message
            toast.success('Registration is successful! Proceed to login🎉');
        })
        .catch(() => {
            // Show an error toast message
            console.log('error');

            toast.error('Something went wrong😔!');
        });
};



  return (
    <>
    <button onClick={fetchUsers}>SHOW USERS</button>
      <div
        className="flex justify-center items-center min-h-screen bg-light-grey"
      >
        <div className="w-full sm:max-w-sm p-4 bg-light-grey rounded-lg bg-opacity-35">
          <h2 className="text-2xl font-bold text-brand-blue text-center mb-3">
            Make your order!
          </h2>

             <div className="stock">
                <h4 className="text-black text-center">Medicines available</h4>
             </div>
          <form className="mt-4 space-y-6" onSubmit={makeOrder}>
            <div className=" p-2">
              <label
                htmlFor="first_name"
                className="block text-sm font-medium leading-6 text-white"
              >
                First Name
              </label>

              <div className="mt-1">
                <input
                  placeholder=" e.g. John"
                  id="first_name"
                  name="first_name"
                  type="text"
                  value={orderdata.first_name}
                  onChange={(e) => setorderdata({ ...orderdata, first_name: e.target.value })}
                  required
                  className="h-6 block w-full rounded-sm border-gray-300 shadow-sm placeholder-gray-400 sm:text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                />
              </div>
            </div>

            <div className=" p-2">
              <label
                htmlFor="text"
                className="block text-sm font-medium leading-6 text-white"
              >
                Last Name
              </label>

              <div className="mt-1">
                <input
                  placeholder=" e.g. Doe"
                  id="last_name"
                  name="last_name"
                  type="last_name"
                  value={orderdata.last_name}
                  onChange={(e) => setorderdata({ ...orderdata, last_name: e.target.value })}
                  required
                  className="h-6 block w-full rounded-sm border-gray-300 shadow-sm placeholder-gray-400 sm:text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                />
              </div>
            </div>

            <div className="p-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Email address
              </label>

              <div className="mt-1">
                <input
                  placeholder=" e.g. johndoe@gmail.com"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={orderdata.email}
                  onChange={(e) => setorderdata({ ...orderdata, email: e.target.value })}
                  required
                  className="h-6 block w-full rounded-sm border-gray-300 shadow-sm placeholder-gray-400 sm:text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                />
              </div>
            </div>

            <div className="p-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-white"
              >
                Password
              </label>

              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={orderdata.password}
                  onChange={(e) =>
                    setorderdata({ ...orderdata, password: e.target.value })
                  }
                  className="h-6 block w-full rounded-sm border-gray-300 shadow-sm placeholder-gray-400 sm:text-sm focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className=" transition-transform transform-gpu hover:translate-y-1  w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-brand-blue"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
