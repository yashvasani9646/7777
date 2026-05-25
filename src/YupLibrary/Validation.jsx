import { useState } from "react";

const Validation = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setNameError("");
        setEmailError("");
        setPasswordError("");

        let isValid = true;

        if (name === "") {
            setNameError("Name is required");
            isValid = false;
        }


        if (email === "") {
            setEmailError("Email is required");
            isValid = false;
        }


        if (password === "") {
            setPasswordError("Password is required");
            isValid = false;
        }

        if (isValid) {
            alert("Form Submitted");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-xl shadow-md w-[350px]"
            >
                <h1 className="text-2xl font-bold text-center mb-4">
                    Simple Validation
                </h1>

                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border p-3 rounded-lg outline-none mb-1"
                />

                {nameError && (
                    <p className="text-red-500 text-sm mb-3">
                        {nameError}
                    </p>
                )}

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border p-3 rounded-lg outline-none mb-1"
                />

                {emailError && (
                    <p className="text-red-500 text-sm mb-3">
                        {emailError}
                    </p>
                )}

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border p-3 rounded-lg outline-none mb-1"
                />

                {passwordError && (
                    <p className="text-red-500 text-sm mb-3">
                        {passwordError}
                    </p>
                )}

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Validation;