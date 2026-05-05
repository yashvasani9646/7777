import React, { useState } from "react";
import { FaShoppingCart, FaTools, FaUser } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { IoChevronForward, IoChevronDown } from "react-icons/io5";

const Dropdwon = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const [subMenu, setSubMenu] = useState(null);

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
        setSubMenu(null);
    };

    const toggleSubMenu = (menu) => {
        setSubMenu(subMenu === menu ? null : menu);
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="flex gap-6">


                <div className="relative">
                    <button
                        onClick={() => toggleMenu("shop")}
                        className="flex items-center justify-between gap-2 px-5 py-3 bg-white border rounded-xl shadow-sm hover:shadow-md hover:bg-gray-50 transition"
                    >
                        <span className="flex items-center gap-2">
                            <FaShoppingCart /> Shop
                        </span>
                        <IoChevronDown />
                    </button>

                    {openMenu === "shop" && (
                        <div className="absolute top-full left-0 mt-2 w-52 bg-white border rounded-xl shadow-md p-2">

                            <div
                                onClick={() => toggleSubMenu("electronics")}
                                className="px-3 py-2 flex justify-between items-center hover:bg-gray-100 rounded-md cursor-pointer"
                            >
                                Electronics <IoChevronForward />

                                {subMenu === "electronics" && (
                                    <div className="absolute left-full ml-2 top-0 w-40 bg-white border rounded-lg shadow p-2">
                                        <div className="px-2 py-1 hover:bg-gray-100 rounded">Laptops</div>
                                        <div className="px-2 py-1 hover:bg-gray-100 rounded">Mobiles</div>
                                    </div>
                                )}
                            </div>

                            <div
                                onClick={() => toggleSubMenu("fashion")}
                                className="px-3 py-2 flex justify-between items-center hover:bg-gray-100 rounded-md cursor-pointer"
                            >
                                Fashion <IoChevronForward />

                                {subMenu === "fashion" && (
                                    <div className="absolute left-full ml-2 top-0 w-40 bg-white border rounded-lg shadow p-2">
                                        <div className="px-2 py-1 hover:bg-gray-100 rounded">Men</div>
                                        <div className="px-2 py-1 hover:bg-gray-100 rounded">Women</div>
                                    </div>
                                )}
                            </div>

                            <div className="px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                                Accessories
                            </div>
                        </div>
                    )}
                </div>

                <div className="relative">
                    <button
                        onClick={() => toggleMenu("services")}
                        className="flex items-center justify-between gap-2 px-5 py-3 bg-white border rounded-xl shadow-sm hover:shadow-md hover:bg-gray-50 transition"
                    >
                        <span className="flex items-center gap-2">
                            <FaTools /> Services
                        </span>
                        <IoChevronDown />
                    </button>

                    {openMenu === "services" && (
                        <div className="absolute top-full left-0 mt-2 w-52 bg-white border rounded-xl shadow-md p-2">
                            <div
                                onClick={() => toggleSubMenu("repair")}
                                className="px-3 py-2 flex justify-between items-center hover:bg-gray-100 rounded-md cursor-pointer"
                            >
                                Repair <IoChevronForward />

                                {subMenu === "repair" && (
                                    <div className="absolute left-full ml-2 top-0 w-40 bg-white border rounded-lg shadow p-2">
                                        <div className="px-2 py-1 hover:bg-gray-100 rounded">Laptop</div>
                                        <div className="px-2 py-1 hover:bg-gray-100 rounded">Mobile</div>
                                    </div>
                                )}
                            </div>

                            <div className="px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                                Consulting
                            </div>
                        </div>
                    )}
                </div>

                <div className="relative">
                    <button
                        onClick={() => toggleMenu("courses")}
                        className="flex items-center justify-between gap-2 px-5 py-3 bg-white border rounded-xl shadow-sm hover:shadow-md hover:bg-gray-50 transition"
                    >
                        <span className="flex items-center gap-2">
                            <MdSchool /> Courses
                        </span>
                        <IoChevronDown />
                    </button>

                    {openMenu === "courses" && (
                        <div className="absolute top-full left-0 mt-2 w-52 bg-white border rounded-xl shadow-md p-2">
                            <div
                                onClick={() => toggleSubMenu("dev")}
                                className="px-3 py-2 flex justify-between items-center hover:bg-gray-100 rounded-md cursor-pointer"
                            >
                                Development <IoChevronForward />

                                {subMenu === "dev" && (
                                    <div className="absolute left-full ml-2 top-0 w-40 bg-white border rounded-lg shadow p-2">
                                        <div className="px-2 py-1 hover:bg-gray-100 rounded">React</div>
                                        <div className="px-2 py-1 hover:bg-gray-100 rounded">Node</div>
                                    </div>
                                )}
                            </div>

                            <div className="px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                                Design
                            </div>
                        </div>
                    )}
                </div>

                <div className="relative">
                    <button
                        onClick={() => toggleMenu("profile")}
                        className="flex items-center justify-between gap-2 px-5 py-3 bg-white border rounded-xl shadow-sm hover:shadow-md hover:bg-gray-50 transition"
                    >
                        <span className="flex items-center gap-2">
                            <FaUser /> Profile
                        </span>
                        <IoChevronDown />
                    </button>

                    {openMenu === "profile" && (
                        <div className="absolute top-full left-0 mt-2 w-52 bg-white border rounded-xl shadow-md p-2">
                            <div className="px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">My Account</div>
                            <div className="px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">Orders</div>
                            <div className="px-3 py-2 text-red-500 hover:bg-red-50 rounded-md cursor-pointer">Logout</div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Dropdwon;