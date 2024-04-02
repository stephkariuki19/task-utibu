"use client";
import { useState,useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import {prisma} from '@/app/lib/prisma'


export default function OrderPage() {

    useEffect(() => {
        const fetchData = async () => {
          const stockData = await fetchStock();
          if (stockData) {
            setStock(stockData);
          }
        };
    
        fetchData();
      }, []); 

  const [orderdata, setorderdata] = useState({
    med_id: 0,
    quantity: 0,
    email: "",
    drug_name:""
  });

  const [stock,setStock] = useState([])

  const fetchStock = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/stock'); // Replace with your actual endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch stock data');
      }
      const stockData = await response.json();
      console.log(stockData)
      return stockData;
    } catch (error) {
      console.error('Error fetching stock data:', error);
      return null;
    }
  };

  const makeOrder = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios.post('/api/makeOrder', orderdata)
        .then(() => {
            // Clear the orderdata state
            setorderdata({drug_name:'',quantity:0, email:'',med_id:0});
            // Log the success information to the console
            // Show a success toast message
            toast.success('Order Successful🎉');
        })
        .catch(() => {
            // Show an error toast message
            console.log('error');

            toast.error('Something went wrong😔!');
        });
};



  return (
    <>
      <div
        className="flex justify-center items-center min-h-screen bg-light-grey"
      >
        <div className="w-full sm:max-w-sm p-4 bg-light-grey rounded-lg bg-opacity-35">
          <h2 className="text-2xl font-bold text-brand-blue text-center mb-3">
            Make your order!
          </h2>

             <div className="stock bg-white p-4 rounded-md w-full">
                <h4 className="font-semibold text-black text-center">Medicines Available</h4>
             <table className="table-auto">
        <thead>
          <tr>
          <th className="px-4 py-2">Medicine ID</th>
            <th className="px-4 py-2">Medicine Name</th>
            <th className="px-4 py-2">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {stock.map(item => (
            <tr key={item.med_id}>
              <td className="border px-4 py-2">{item.med_id}</td>
              <td className="border px-4 py-2">{item.med_name}</td>
              <td className="border px-4 py-2">{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
             </div>
          <form className="mt-4 space-y-6 bg-brand-blue relative right-1" onSubmit={makeOrder}>
            <div className=" p-2">
              <label
                htmlFor="drug_name"
                className="block text-sm font-medium leading-6 text-white"
              >
                Drug Name
              </label>

              <div className="mt-1">
                <input
                  placeholder=" e.g. Glucophage"
                  id="drug_name"
                  name="drug_name"
                  type="text"
                  value={orderdata.drug_name}
                  onChange={(e) => setorderdata({ ...orderdata, drug_name: e.target.value })}
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
                Drug ID
              </label>

              <div className="mt-1">
                <input
                  placeholder=" e.g. 1"
                  id="med_id"
                  name="med_id"
                  type="number"
                  value={orderdata.med_id}
                  onChange={(e) => setorderdata({ ...orderdata, med_id: parseInt(e.target.value, 10) })}
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
                Amount of drug units
              </label>

              <div className="mt-1">
                <input
                  placeholder=" e.g. 3"
                  id="quantity"
                  name="number"
                  type="quantity"
                  value={orderdata.quantity}
                  onChange={(e) => setorderdata({ ...orderdata, quantity: parseInt(e.target.value, 10) })}
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

      

            <div>
              <button
                type="submit"
                className=" transition-transform transform-gpu hover:translate-y-1  w-full flex justify-center py-2 px-4 border border-transparent relative bottom-4 rounded-md shadow-sm text-sm font-semibold text-white bg-gray-900"
              >
                Make Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
