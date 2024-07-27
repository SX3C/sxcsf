import React, { useRef } from "react";
import { db } from "../firebase/firebaseinit";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import toast from "react-hot-toast";

export default function Header() {
  const emailRef = useRef();

  const subscribe = async (e) => {
    e.preventDefault();
    if (!emailRef.current.value) {
      toast.error("Please enter an email");
      return;
    }
    const email = emailRef.current.value;

    // check if email has not already been sent
    const q = query(collection(db, "subscribers"), where("email", "==", email));
    if ((await getDocs(q)).docs.length > 0) {
      toast.error("Email already subscribed");
      return;
    }

    try {
      await addDoc(collection(db, "subscribers"), {
        email,
      });
      toast.success("Subscribed successfully");
    } catch (e) {
      toast.error(
        "There was an error subscribing you. Please try again later."
      );
    }
  };

  return (
    <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-52">
      <div className="absolute inset-0">
        {/* https://sxc.edu.np/uploads/gallery/P1196503-file-20230904091313-5.JPG */}
        <img
          className="object-cover w-full h-full md:scale-150 object-center"
          src="https://sxc.edu.np/uploads/gallery/P1196503-file-20230904091313-5.JPG "
          alt=""
        />
      </div>

      {/* <div className="absolute inset-0 hidden bg-gradient-to-t md:block from-black to-transparent"></div> */}
      <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

      <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center md:w-2/3 lg:w-1/2 xl:w-2/4 md:text-left">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            2<sup>nd</sup> SXC Science Fest
          </h2>
          <p className="mt-4 text-base text-gray-200">
            Be the first to get notified when registration opens.
          </p>

          <form
            action="#"
            method="POST"
            className="mt-8 lg:mt-12"
            onSubmit={(e) => subscribe(e)}
          >
            <div className="flex flex-col items-center sm:flex-row sm:justify-center">
              <div className="flex-1 w-full min-w-0 px-4 sm:px-0">
                <div className="relative text-gray-400 focus-within:text-gray-600">
                  <label for="email" className="sr-only"></label>
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                  <input
                    ref={emailRef}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email address"
                    className="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 rounded-md sm:rounded-r-none caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:mt-0 sm:rounded-l-none sm:w-auto hover:bg-blue-700 focus:bg-blue-700"
              >
                Subscribe
              </button>
            </div>
          </form>
          <div className="text-white mt-4">
            Results will be announced{" "}
            <a className="text-blue-500" href="/results">
              {" "}
              here{" "}
            </a>{" "}
            on Event Days (7th and 8th Sept)
          </div>
        </div>
      </div>
    </section>
  );
}
