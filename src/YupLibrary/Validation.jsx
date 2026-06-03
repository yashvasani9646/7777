import { useState, useEffect } from "react";
import CommonInput from "./CommanInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";

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
        dob: null,
        bio: "",
        resume: null,
    });


    const [errors, setErrors] = useState({});
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const savedUsers = localStorage.getItem("users");

        if (savedUsers) {
            setUsers(JSON.parse(savedUsers));
        }
    }, []);

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

            if (files[0]) {
                setPreview(URL.createObjectURL(files[0]));
            }
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
    const handleEdit = (index) => {
        setFormData(users[index]);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        const updatedUsers = users.filter(
            (_, i) => i !== index
        );

        setUsers(updatedUsers);

        localStorage.setItem(
            "users",
            JSON.stringify(updatedUsers)
        );
    };



    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};

        const emailPattern =
            /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        const phonePattern = /^[0-9]{10}$/;

        const passwordPattern =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

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
        else if (formData.password.length < 8) {
            newErrors.password =
                "Password must be at least 8 characters";
        }
        else if (!passwordPattern.test(formData.password)) {
            newErrors.password =
                "Password must contain uppercase, lowercase, number and special character";
        }
        if (formData.confirmPassword === "") {
            newErrors.confirmPassword =
                "Confirm Password is required";
        }
        else if (
            formData.password !== formData.confirmPassword
        ) {
            newErrors.confirmPassword =
                "Passwords do not match";
        }




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

        if (!formData.dob) {
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
            toast.success('Successfully toasted!')



            if (editIndex !== null) {

                const updatedUsers = [...users];

                updatedUsers[editIndex] = formData;

                setUsers(updatedUsers);

                setEditIndex(null);


                localStorage.setItem(
                    "users",
                    JSON.stringify(updatedUsers)
                );

            } else {

                const updatedUsers = [
                    ...users,
                    formData,
                ];

                setUsers(updatedUsers);

                localStorage.setItem(
                    "users",
                    JSON.stringify(updatedUsers)
                );
            }

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
                dob: null,
                bio: "",
                resume: null,

            });
            setFileKey((prev) => prev + 1);
            setPreview(null);
        }
    };

    const [preview, setPreview] = useState(null);
    const [editIndex, setEditIndex] = useState(null);
    const [fileKey, setFileKey] = useState(0);
    return (

        <div className="min-h-screen bg-slate-100 py-10 px-4">
            <Toaster />

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

                    <div>
                        <label className="block mb-2 text-sm font-medium text-slate-700">
                            First Name
                        </label>
                        <CommonInput
                            type="text"
                            name="firstName"
                            placeholder="Enter First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            error={errors.firstName}
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-slate-700">
                            Last Name
                        </label>
                        <CommonInput
                            type="text"
                            name="lastName"
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            error={errors.lastName}
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-slate-700">
                            Username
                        </label>
                        <CommonInput
                            type="text"
                            name="username"
                            placeholder="Enter Username"
                            value={formData.username}
                            onChange={handleChange}
                            error={errors.username}
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-slate-700">
                            Email Address
                        </label>
                        <CommonInput
                            type="text"
                            name="email"
                            placeholder="Enter Email"
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email}
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-slate-700">
                            Phone Number
                        </label>
                        <CommonInput
                            type="text"
                            name="phone"
                            placeholder="Enter Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            error={errors.phone}
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-slate-700">
                            Password
                        </label>
                        <CommonInput
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            value={formData.password}
                            onChange={handleChange}
                            error={errors.password}
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-slate-700">
                            Confirm Password
                        </label>
                        <CommonInput
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            error={errors.confirmPassword}
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-slate-700">
                            Age
                        </label>
                        <CommonInput
                            type="number"
                            name="age"
                            placeholder="Enter Age"
                            value={formData.age}
                            onChange={handleChange}
                            error={errors.age}
                        />
                    </div>

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
                                value="Music"
                                onChange={handleChange}
                                checked={formData.hobbies.includes("Music")}

                            />
                            Music
                        </label>

                        <label className="flex items-center gap-2">
                            <CommonInput
                                type="checkbox"
                                name="hobbies"
                                value="Cricket"
                                checked={formData.hobbies.includes("Cricket")}

                                onChange={handleChange}
                            />
                            Cricket
                        </label>

                        <label className="flex items-center gap-2">
                            <CommonInput
                                type="checkbox"
                                name="hobbies"
                                value="Traveling"
                                checked={formData.hobbies.includes("Traveling")}
                                onChange={handleChange}
                            />
                            Traveling
                        </label>

                        <label className="flex items-center gap-2">
                            <CommonInput
                                type="checkbox"
                                name="hobbies"
                                value="Coding"
                                checked={formData.hobbies.includes("Coding")}
                                onChange={handleChange}
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

                    <div>
                        <label className="block mb-2 text-sm font-medium text-slate-700">
                            City
                        </label>
                        <CommonInput
                            type="text"
                            name="city"
                            placeholder="Enter City"
                            value={formData.city}
                            onChange={handleChange}
                            error={errors.city}
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-slate-700">
                            Course
                        </label>
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

                </div>

                <div className="mt-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                        Date of Birth
                    </label>

                    <DatePicker
                        selected={formData.dob}
                        onChange={(date) =>
                            setFormData({
                                ...formData,
                                dob: date,
                            })
                        }
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select Date of Birth"
                        className={`w-full bg-white px-4 py-3 rounded-2xl text-slate-700 shadow-sm outline-none transition-all duration-300 ${errors.dob
                            ? "border-2 border-red-500"
                            : "border border-slate-300"
                            }`}
                    />
                    {errors.dob && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.dob}
                        </p>
                    )}
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
                        key={fileKey}
                        type="file"
                        name="resume"
                        onChange={handleChange}
                        error={errors.resume}
                    />

                    {preview && (
                        <div className="mt-4">
                            <img
                                src={preview}
                                alt="Preview"
                                className="w-40 h-40 object-cover rounded-xl border mx-auto"
                            />
                        </div>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full mt-8 bg-slate-900 text-white py-4 rounded-2xl font-medium hover:bg-slate-800 transition"
                >
                    {editIndex !== null
                        ? "Update User"
                        : "Create Account"}
                </button>
            </form >
            {users.length > 0 && (
                <div className="max-w-7xl mx-auto mt-10 bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 overflow-x-auto">

                    <h2 className="text-2xl font-bold mb-5">
                        Submitted Users
                    </h2>

                    <table className="w-full border-collapse overflow-hidden rounded-2xl shadow-lg">
                        <thead>
                            <tr className="bg-slate-900 text-white">
                                <th className="px-4 py-4 border border-slate-700">First Name</th>
                                <th className="px-4 py-4 border border-slate-700">Last Name</th>
                                <th className="px-4 py-4 border border-slate-700">Username</th>
                                <th className="px-4 py-4 border border-slate-700">Email</th>
                                <th className="px-4 py-4 border border-slate-700">Phone</th>
                                <th className="px-4 py-4 border border-slate-700">Age</th>
                                <th className="px-4 py-4 border border-slate-700">Gender</th>
                                <th className="px-4 py-4 border border-slate-700">Hobbies</th>
                                <th className="px-4 py-4 border border-slate-700">City</th>
                                <th className="px-4 py-4 border border-slate-700">Course</th>
                                <th className="px-4 py-4 border border-slate-700">DOB</th>
                                <th className="px-4 py-4 border border-slate-700">Bio</th>
                                <th className="px-4 py-4 border border-slate-700">Resume</th>
                                <th className="px-4 py-4 border border-slate-700">Action</th>

                            </tr>
                        </thead>

                        <tbody>
                            {users.map((user, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-slate-50 transition duration-200"
                                >
                                    <td className="px-4 py-3 border border-slate-200">
                                        {user.firstName}
                                    </td>

                                    <td className="px-4 py-3 border border-slate-200">
                                        {user.lastName}
                                    </td>

                                    <td className="px-4 py-3 border border-slate-200">
                                        {user.username}
                                    </td>

                                    <td className="px-4 py-3 border border-slate-200">
                                        {user.email}
                                    </td>

                                    <td className="px-4 py-3 border border-slate-200">
                                        {user.phone}
                                    </td>

                                    <td className="px-4 py-3 border border-slate-200">
                                        {user.age}
                                    </td>

                                    <td className="px-4 py-3 border border-slate-200">
                                        <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
                                            {user.gender}
                                        </span>
                                    </td>

                                    <td className="px-4 py-3 border border-slate-200">
                                        {user.hobbies.join(", ")}
                                    </td>

                                    <td className="px-4 py-3 border border-slate-200">
                                        {user.city}
                                    </td>

                                    <td className="px-4 py-3 border border-slate-200">
                                        {user.course}
                                    </td>

                                    <td className="px-4 py-3 border border-slate-200">
                                        {user.dob
                                            ? new Date(user.dob).toLocaleDateString()
                                            : "-"}
                                    </td>

                                    <td className="px-4 py-3 border border-slate-200 max-w-xs truncate">
                                        {user.bio}
                                    </td>

                                    <td className="px-4 py-3 border border-slate-200">
                                        {user.resume && (
                                            <img
                                                src={URL.createObjectURL(user.resume)}
                                                alt="resume"
                                                className="w-14 h-14 rounded-lg object-cover mx-auto border"
                                            />
                                        )}
                                    </td>
                                    <td className="px-4 py-3 border border-slate-200">
                                        <div className="flex gap-2 justify-center">
                                            <button
                                                onClick={() => handleEdit(index)}
                                                type="button"
                                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                                            >
                                                Edit
                                            </button>

                                            <button
                                                onClick={() => handleDelete(index)}
                                                type="button"
                                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            )}
        </div >
    );
};

export default Validation;