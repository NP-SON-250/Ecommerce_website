import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { FaCartShopping } from "react-icons/fa6";
import Defaultpc from "../../../assets/images/mine.jpeg";

const Profile = () => {
  const [userDetails, setUserDetails] = useState({
    id: "",
    name: "",
    profile: "",
    role: "",
  });

  useEffect(() => {
    // Fetch user details from localStorage
    const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));

    if (storedUserDetails) {
      setUserDetails({
        id: storedUserDetails.id || "",
        name: storedUserDetails.firstName || "",
        profile: storedUserDetails.profile || "",
        role: storedUserDetails.role || "",
      });
      console.log(role);
    }
  }, []);

  return (
    <>
      <div className="flex md:gap-40 lg:gap-4 gap-40 dark:bg-transparent-900 dark:text-white duration-200">
        <button
          type="button"
          className="relative rounded-full text-black dark:text-white p-1 hover:text-green "
        >
          <span className="absolute -inset-1.5" />
          <span className="sr-only">View notifications</span>
          <BellIcon
            className="md:h-8 md:w-8 lg:h-6 lg:w-6 h-5 w-5"
            aria-hidden="true"
          />
          <div className="absolute -right-2 md:-top-2 lg:-top-2 -top-3 text-center w-6 h-6 bg-primary rounded-full">
            <span className="absolute text-white right-1 -top-0.5">20</span>
          </div>
        </button>

        {/* Profile dropdown */}
        <Menu as="div" className="relative ml-3">
          <div>
            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-1 focus:ring-gray focus:ring-offset-0">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <img
                className="md:h-9 md:w-9 lg:h-9 lg:w-9 w-6 h-6 rounded-full"
                src={userDetails.profile || Defaultpc}
                alt="profile"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 bg-white md:w-[400px] lg:w-[400px] z-50 mt-2 w-80 -mr-8 origin-top-right rounded-md  py-5 px-5 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "text-gray-900" : "",
                      "block px-4 py-2 text-xl  text-gray-700 hover:text-primary"
                    )}
                  >
                    <div className="flex items-center justify-start gap-3">
                      <img
                        src={userDetails.profile || Defaultpc}
                        alt=""
                        className="md:h-9 md:w-9 lg:h-12 lg:w-12 w-6 h-6 rounded-full border border-gray-900"
                      />
                      <div>
                        <h1>Hello, {userDetails.name || "Guest"}</h1>
                        <h1 className="text-sm text-slate-500">
                          {userDetails.role || "Guest"}
                        </h1>
                      </div>
                    </div>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "text-gray-900" : "",
                      "block px-4 py-2 text-xl text-gray-700 hover:text-primary"
                    )}
                  >
                    Settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "text-gray-900" : "",
                      "block px-4 py-2 text-xl text-gray-700 hover:text-primary"
                    )}
                  >
                    Sign out
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
        <div className="absolute md:right-28 right-20 md:top-1">
          <button className=" transition-all duration-200  py-1 px-4 rounded-full flex items-center gap-3 group">
            <FaCartShopping className="text-xl duration-200 drop-shadow-sm cursor-pointer" />
            <div className="absolute right-0 -top-3 text-center w-6 h-6 bg-primary rounded-full">
              <span className="absolute text-white right-1 -top-0.5">20</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
