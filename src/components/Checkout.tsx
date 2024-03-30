import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

const Checkout: React.FC = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  //   const history = useHistory();

  return (
    // <form onSubmit={handleSubmit}>
    <div className=" flex flex-col p-5 items-center gap-5 ">
      <h3 className=" font-semibold text-black text-2xl">Checkout</h3>
      <div className="flex flex-col">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="fullname"
        >
          Full Name:
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          id="fullname"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="email"
        >
          Email:
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button
        className="w-full p-2 border border-black rounded bg-black text-white text-lg font-semibold  "
        type="submit"
      >
        Submit
      </button>
    </div>
    // </form>
  );
};

export default Checkout;
