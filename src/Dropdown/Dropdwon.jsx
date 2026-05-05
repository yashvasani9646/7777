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
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-100 via-gray-200 to-slate-300">
            <div className="flex gap-6">

                {/* SHOP */}
                <div className="relative w-52">
                    <button
                        onClick={() => toggleMenu("shop")}
                        className={`w-full flex items-center justify-between px-5 py-3 rounded-xl border transition-all duration-300
                        ${openMenu === "shop"
                                ? "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg shadow-indigo-200"
                                : "bg-white text-gray-700 border-gray-200 hover:bg-indigo-50 hover:text-indigo-600 shadow-sm"
                            }`}
                    >
                        <span className="flex items-center gap-2 font-medium">
                            <FaShoppingCart className={`${openMenu === "shop" ? "text-white" : "text-indigo-500"}`} />
                            Shop
                        </span>
                        <IoChevronDown className={`transition-transform duration-300 ${openMenu === "shop" ? "rotate-180" : ""}`} />
                    </button>

                    {openMenu === "shop" && (
                        <div className="absolute top-[87%] left-0 w-full bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-2xl p-2">

                            <div onClick={() => toggleSubMenu("electronics")}
                                className="px-3 py-2 flex justify-between items-center hover:bg-indigo-50 rounded-md cursor-pointer transition">
                                <span className="text-gray-700 font-medium">Electronics</span>
                                <IoChevronForward />

                                {subMenu === "electronics" && (
                                    <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 w-44 bg-white border border-gray-200 rounded-lg shadow-xl p-2 z-10">
                                        <div className="px-2 py-1 hover:bg-indigo-50 rounded">Laptops</div>
                                        <div className="px-2 py-1 hover:bg-indigo-50 rounded">Mobiles</div>
                                    </div>
                                )}
                            </div>

                            <div onClick={() => toggleSubMenu("fashion")}
                                className="px-3 py-2 flex justify-between items-center hover:bg-indigo-50 rounded-md cursor-pointer transition">
                                <span className="text-gray-700 font-medium">Fashion</span>
                                <IoChevronForward />

                                {subMenu === "fashion" && (
                                    <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 w-44 bg-white border border-gray-200 rounded-lg shadow-xl p-2 z-10">
                                        <div className="px-2 py-1 hover:bg-indigo-50 rounded">Men</div>
                                        <div className="px-2 py-1 hover:bg-indigo-50 rounded">Women</div>
                                    </div>
                                )}
                            </div>

                            <div className="px-3 py-2 hover:bg-indigo-50 rounded-md cursor-pointer font-medium text-gray-700">
                                Accessories
                            </div>
                        </div>
                    )}
                </div>

                {/* SERVICES */}
                <div className="relative w-52">
                    <button
                        onClick={() => toggleMenu("services")}
                        className={`w-full flex items-center justify-between px-5 py-3 rounded-xl border transition-all duration-300
                        ${openMenu === "services"
                                ? "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg shadow-indigo-200"
                                : "bg-white text-gray-700 border-gray-200 hover:bg-indigo-50 hover:text-indigo-600 shadow-sm"
                            }`}
                    >
                        <span className="flex items-center gap-2 font-medium">
                            <FaTools className={`${openMenu === "services" ? "text-white" : "text-indigo-500"}`} />
                            Services
                        </span>
                        <IoChevronDown className={`transition-transform duration-300 ${openMenu === "services" ? "rotate-180" : ""}`} />
                    </button>

                    {openMenu === "services" && (
                        <div className="absolute top-[87%] left-0 w-full bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-2xl p-2">

                            <div onClick={() => toggleSubMenu("repair")}
                                className="px-3 py-2 flex justify-between items-center hover:bg-indigo-50 rounded-md cursor-pointer transition">
                                <span className="text-gray-700 font-medium">Repair</span>
                                <IoChevronForward />

                                {subMenu === "repair" && (
                                    <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 w-44 bg-white border border-gray-200 rounded-lg shadow-xl p-2 z-10">
                                        <div className="px-2 py-1 hover:bg-indigo-50 rounded">Laptop</div>
                                        <div className="px-2 py-1 hover:bg-indigo-50 rounded">Mobile</div>
                                    </div>
                                )}
                            </div>

                            <div className="px-3 py-2 hover:bg-indigo-50 rounded-md cursor-pointer font-medium text-gray-700">
                                Consulting
                            </div>
                        </div>
                    )}
                </div>

                {/* COURSES */}
                <div className="relative w-52">
                    <button
                        onClick={() => toggleMenu("courses")}
                        className={`w-full flex items-center justify-between px-5 py-3 rounded-xl border transition-all duration-300
                        ${openMenu === "courses"
                                ? "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg shadow-indigo-200"
                                : "bg-white text-gray-700 border-gray-200 hover:bg-indigo-50 hover:text-indigo-600 shadow-sm"
                            }`}
                    >
                        <span className="flex items-center gap-2 font-medium">
                            <MdSchool className={`${openMenu === "courses" ? "text-white" : "text-indigo-500"}`} />
                            Courses
                        </span>
                        <IoChevronDown className={`transition-transform duration-300 ${openMenu === "courses" ? "rotate-180" : ""}`} />
                    </button>

                    {openMenu === "courses" && (
                        <div className="absolute top-[87%] left-0 w-full bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-2xl p-2">

                            <div onClick={() => toggleSubMenu("dev")}
                                className="px-3 py-2 flex justify-between items-center hover:bg-indigo-50 rounded-md cursor-pointer transition">
                                <span className="text-gray-700 font-medium">Development</span>
                                <IoChevronForward />

                                {subMenu === "dev" && (
                                    <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 w-44 bg-white border border-gray-200 rounded-lg shadow-xl p-2 z-10">
                                        <div className="px-2 py-1 hover:bg-indigo-50 rounded">React</div>
                                        <div className="px-2 py-1 hover:bg-indigo-50 rounded">Node</div>
                                    </div>
                                )}
                            </div>

                            <div className="px-3 py-2 hover:bg-indigo-50 rounded-md cursor-pointer font-medium text-gray-700">
                                Design
                            </div>
                        </div>
                    )}
                </div>

                {/* PROFILE */}
                <div className="relative w-52">
                    <button
                        onClick={() => toggleMenu("profile")}
                        className={`w-full flex items-center justify-between px-5 py-3 rounded-xl border transition-all duration-300
                        ${openMenu === "profile"
                                ? "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg shadow-indigo-200"
                                : "bg-white text-gray-700 border-gray-200 hover:bg-indigo-50 hover:text-indigo-600 shadow-sm"
                            }`}
                    >
                        <span className="flex items-center gap-2 font-medium">
                            <FaUser className={`${openMenu === "profile" ? "text-white" : "text-indigo-500"}`} />
                            Profile
                        </span>
                        <IoChevronDown className={`transition-transform duration-300 ${openMenu === "profile" ? "rotate-180" : ""}`} />
                    </button>

                    {openMenu === "profile" && (
                        <div className="absolute top-[87%] left-0 w-full bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-2xl p-2">
                            <div className="px-3 py-2 hover:bg-indigo-50 rounded-md cursor-pointer">My Account</div>
                            <div className="px-3 py-2 hover:bg-indigo-50 rounded-md cursor-pointer">Orders</div>
                            <div className="px-3 py-2 text-red-500 hover:bg-red-50 rounded-md cursor-pointer">Logout</div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Dropdwon;