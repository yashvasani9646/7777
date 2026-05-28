import { useState } from "react";

const Validation = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        age: "",
        gender: "",
        hobbies: [],
        city: "",
        course: "",
        dob: "",
        bio: "",
        resume: null,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked, files } =
            e.target;

        if (type === "checkbox") {

            let updatedHobbies = [
                ...formData.hobbies,
            ];

            if (checked) {
                updatedHobbies.push(value);
            } else {
                updatedHobbies =
                    updatedHobbies.filter(
                        (item) => item !== value
                    );
            }

            setFormData({
                ...formData,
                hobbies: updatedHobbies,
            });
        }

        else if (type === "file") {
            setFormData({
                ...formData,
                [name]: files[0],
            });
        }

        else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};

        const emailPattern =
            /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        const phonePattern = /^[0-9]{10}$/;

        const passwordPattern =
            /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;

        if (formData.firstName === "") {
            newErrors.firstName =
                "First Name is required";
        }

        if (formData.lastName === "") {
            newErrors.lastName =
                "Last Name is required";
        }

        if (formData.username === "") {
            newErrors.username =
                "Username is required";
        }
        else if (
            formData.username.length < 3
        ) {
            newErrors.username =
                "Username must be at least 3 characters";
        }

        if (formData.email === "") {
            newErrors.email =
                "Email is required";
        }
        else if (
            !emailPattern.test(
                formData.email
            )
        ) {
            newErrors.email =
                "Invalid Email Address";
        }

        // Phone
        if (formData.phone === "") {
            newErrors.phone =
                "Phone Number is required";
        }
        else if (
            !phonePattern.test(
                formData.phone
            )
        ) {
            newErrors.phone =
                "Phone Number must be 10 digits";
        }

        // Password
        if (formData.password === "") {
            newErrors.password =
                "Password is required";
        }
        else if (
            !passwordPattern.test(
                formData.password
            )
        ) {
            newErrors.password =
                "Password must contain 1 uppercase, 1 number and minimum 6 characters";
        }

        if (
            formData.confirmPassword === ""
        ) {
            newErrors.confirmPassword =
                "Confirm Password is required";
        }
        else if (
            formData.password !==
            formData.confirmPassword
        ) {
            newErrors.confirmPassword =
                "Passwords do not match";
        }

        // Age
        if (formData.age === "") {
            newErrors.age =
                "Age is required";
        }
        else if (formData.age < 18) {
            newErrors.age =
                "Age must be greater than 18";
        }

        if (formData.gender === "") {
            newErrors.gender =
                "Please select gender";
        }

        if (
            formData.hobbies.length === 0
        ) {
            newErrors.hobbies =
                "Please select hobbies";
        }

        if (formData.city === "") {
            newErrors.city =
                "City is required";
        }

        if (formData.course === "") {
            newErrors.course =
                "Please select course";
        }

        if (formData.dob === "") {
            newErrors.dob =
                "Please select date of birth";
        }

        if (formData.bio === "") {
            newErrors.bio =
                "Bio is required";
        }
        else if (
            formData.bio.length < 20
        ) {
            newErrors.bio =
                "Bio must be at least 20 characters";
        }

        // Resume
        if (!formData.resume) {
            newErrors.resume =
                "Please upload resume";
        }

        setErrors(newErrors);

        if (
            Object.keys(newErrors).length === 0
        ) {
            alert(
                "Form Submitted Successfully"
            );

            console.log(formData);

            setFormData({
                firstName: "",
                lastName: "",
                username: "",
                email: "",
                phone: "",
                password: "",
                confirmPassword: "",
                age: "",
                gender: "",
                hobbies: [],
                city: "",
                course: "",
                dob: "",
                bio: "",
                resume: null,
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-xl bg-white p-6 rounded-2xl shadow-lg space-y-4"
            >

                <h1 className="text-3xl font-bold text-center">
                    Custom Validation Form
                </h1>

                {/* First Name */}
                <div>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg"
                    />

                    {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.firstName}
                        </p>
                    )}
                </div>

                {/* Last Name */}
                <div>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg"
                    />

                    {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.lastName}
                        </p>
                    )}
                </div>

                {/* Username */}
                <div>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg"
                    />

                    {errors.username && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.username}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg"
                    />

                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.email}
                        </p>
                    )}
                </div>

                {/* Phone */}
                <div>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={10}
                        className="w-full border p-3 rounded-lg"
                    />

                    {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.phone}
                        </p>
                    )}
                </div>

                {/* Password */}
                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg"
                    />

                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.password}
                        </p>
                    )}
                </div>

                {/* Confirm Password */}
                <div>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={
                            formData.confirmPassword
                        }
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg"
                    />

                    {errors.confirmPassword && (
                        <p className="text-red-500 text-sm mt-1">
                            {
                                errors.confirmPassword
                            }
                        </p>
                    )}
                </div>

                {/* Age */}
                <div>
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg"
                    />

                    {errors.age && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.age}
                        </p>
                    )}
                </div>

                {/* Radio Button */}
                <div>
                    <p className="font-medium mb-2">
                        Gender
                    </p>

                    <div className="flex gap-4">

                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={
                                    formData.gender ===
                                    "Male"
                                }
                                onChange={
                                    handleChange
                                }
                            />
                            Male
                        </label>

                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={
                                    formData.gender ===
                                    "Female"
                                }
                                onChange={
                                    handleChange
                                }
                            />
                            Female
                        </label>
                    </div>

                    {errors.gender && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.gender}
                        </p>
                    )}
                </div>

                {/* Checkbox */}
                <div>
                    <p className="font-medium mb-2">
                        Hobbies
                    </p>

                    <div className="flex gap-4 flex-wrap">

                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                value="Cricket"
                                onChange={
                                    handleChange
                                }
                            />
                            Cricket
                        </label>

                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                value="Music"
                                onChange={
                                    handleChange
                                }
                            />
                            Music
                        </label>

                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                value="Coding"
                                onChange={
                                    handleChange
                                }
                            />
                            Coding
                        </label>
                    </div>

                    {errors.hobbies && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.hobbies}
                        </p>
                    )}
                </div>

                {/* City */}
                <div>
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg"
                    />

                    {errors.city && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.city}
                        </p>
                    )}
                </div>

                {/* Dropdown */}
                <div>
                    <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg"
                    >
                        <option value="">
                            Select Course
                        </option>

                        <option value="React JS">
                            React JS
                        </option>

                        <option value="Node JS">
                            Node JS
                        </option>

                        <option value="Full Stack">
                            Full Stack
                        </option>
                    </select>

                    {errors.course && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.course}
                        </p>
                    )}
                </div>

                {/* Date Picker */}
                <div>
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg"
                    />

                    {errors.dob && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.dob}
                        </p>
                    )}
                </div>

                {/* Textarea */}
                <div>
                    <textarea
                        name="bio"
                        placeholder="Enter Bio"
                        value={formData.bio}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg h-28"
                    />

                    {errors.bio && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.bio}
                        </p>
                    )}
                </div>

                {/* File Upload */}
                <div>
                    <input
                        type="file"
                        name="resume"
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg"
                    />

                    {errors.resume && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.resume}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Validation;