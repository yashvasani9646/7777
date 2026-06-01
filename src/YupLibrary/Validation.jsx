import { useState } from "react";
import CommonInput from "./CommanInput";
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

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));

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

            setErrors((prev) => ({
                ...prev,
                hobbies: "",
            }));
        }

        else if (type === "file") {
            setFormData({
                ...formData,
                [name]: files[0],
            });
        }

        else {

            if (name === "phone") {
                const onlyNumbers = value.replace(/\D/g, "");

                if (onlyNumbers.length > 10) {
                    return;
                }

                setFormData({
                    ...formData,
                    phone: onlyNumbers,
                });

                return;
            }

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
        <div className="min-h-screen bg-slate-100 py-10 px-4">

            <form
                onSubmit={handleSubmit}
                noValidate
                className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10"
            >
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-slate-900">
                        Create Your Account
                    </h1>
                    <p className="text-slate-500 mt-2">
                        Fill in your information to get started
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <CommonInput
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        error={errors.firstName}
                    />



                    <CommonInput
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        error={errors.lastName}
                    />



                    <CommonInput
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        error={errors.username}
                    />




                    <CommonInput
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                    />




                    <CommonInput
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        error={errors.phone}
                    />



                    <CommonInput
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        error={errors.password}
                    />




                    <CommonInput
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        error={errors.confirmPassword}
                    />



                    <CommonInput
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={formData.age}
                        onChange={handleChange}
                        error={errors.age}
                    />
                </div>

                <div
                    className={`mt-6 rounded-2xl p-4 transition-all ${errors.hobbies
                            ? "border-2 border-red-500 bg-red-50"
                            : "border border-slate-200 bg-white"
                        }`}
                >
                    <h3 className="text-sm font-semibold text-slate-700 mb-3">
                        Gender
                    </h3>

                    <div className="flex gap-6 mt-3">
                        <label className="flex items-center gap-2">
                            <CommonInput
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
                            <CommonInput
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={formData.gender === "Female"}
                                onChange={handleChange}
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

                <div
                    className={`mt-6 rounded-2xl p-4 transition-all ${errors.gender
                        ? "border-2 border-red-500 bg-red-50"
                        : "border border-slate-200 bg-white"
                        }`}
                >
                    <h3 className="text-sm font-semibold text-slate-700 mb-3">
                        Hobbies
                    </h3>

                    <div className="flex flex-wrap gap-6">
                        <label className="flex items-center gap-2">
                            <CommonInput
                                type="checkbox"
                                name="hobbies"
                                value="Cricket"
                                onChange={handleChange}
                            />
                            Cricket
                        </label>

                        <label className="flex items-center gap-2">
                            <CommonInput
                                type="checkbox"
                                name="hobbies"
                                value="Music"
                                onChange={
                                    handleChange
                                }
                            />
                            Music
                        </label>

                        <label className="flex items-center gap-2">
                            <CommonInput
                                type="checkbox"
                                name="hobbies"
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



                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                    <CommonInput
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        error={errors.city}
                    />

                    <CommonInput
                        type="select"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        error={errors.course}
                        options={[
                            "Select Course",
                            "React JS",
                            "Node JS",
                            "Full Stack",
                        ]}
                    />
                </div>

                <div className="mt-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        Date of Birth
                    </label>

                    <CommonInput
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        error={errors.dob}
                    />
                </div>
                <div className="mt-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        Bio
                    </label>
                    <CommonInput
                        type="textarea"
                        name="bio"
                        placeholder="Enter Bio"
                        value={formData.bio}
                        onChange={handleChange}
                        error={errors.bio}
                    />


                </div>

                <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center mt-6 bg-slate-50">
                    <div className="text-4xl mb-2">📄</div>

                    <h3 className="font-semibold text-slate-700">
                        Upload Resume
                    </h3>

                    <p className="text-sm text-slate-500 mt-1 mb-4">
                        Drag & Drop or Click to Select File
                    </p>

                    <CommonInput
                        type="file"
                        name="resume"
                        onChange={handleChange}
                        error={errors.resume}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full mt-8 bg-slate-900 text-white py-4 rounded-2xl font-medium hover:bg-slate-800 transition"
                >
                    Create Account
                </button>
            </form >
        </div >
    );
};

export default Validation;