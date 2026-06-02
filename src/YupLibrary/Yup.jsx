import {
    Formik,
    Form,
    Field,
    ErrorMessage,
} from "formik";


import * as YupValidation from "yup";
import Commanyup from "./Commanyup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const validationSchema =
    YupValidation.object({

        firstName:
            YupValidation.string()
                .required(
                    "First Name is required"
                ),

        lastName:
            YupValidation.string()
                .required(
                    "Last Name is required"
                ),

        username:
            YupValidation.string()
                .min(
                    3,
                    "Username must be at least 3 characters"
                )
                .required(
                    "Username is required"
                ),

        email:
            YupValidation.string()
                .matches(
                    /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                    "Enter valid gmail address"
                )
                .required("Email is required"),

        phone:
            YupValidation.string()
                .matches(
                    /^[0-9]{10}$/,
                    "Phone Number must be 10 digits"
                )
                .required(
                    "Phone Number is required"
                ),

        password:
            YupValidation.string()
                .min(
                    8,
                    "Password must be at least 8 characters"
                )
                .matches(
                    /[A-Z]/,
                    "Must contain at least 1 uppercase letter"
                )
                .matches(
                    /[a-z]/,
                    "Must contain at least 1 lowercase letter"
                )
                .matches(
                    /[0-9]/,
                    "Must contain at least 1 number"
                )
                .matches(
                    /[!@#$%^&*(),.?":{}|<>]/,
                    "Must contain at least 1 special character"
                )
                .required(
                    "Password is required"
                ),

        confirmPassword:
            YupValidation.string()
                .oneOf(
                    [
                        YupValidation.ref(
                            "password"
                        ),
                        null,
                    ],
                    "Passwords do not match"
                )
                .required(
                    "Confirm Password is required"
                ),

        age:
            YupValidation.number()
                .min(
                    18,
                    "Age must be greater than 18"
                )
                .required(
                    "Age is required"
                ),

        gender:
            YupValidation.string()
                .required(
                    "Please select gender"
                ),

        hobbies:
            YupValidation.array()
                .min(
                    1,
                    "Please select hobbies"
                ),

        city:
            YupValidation.string()
                .required(
                    "City is required"
                ),

        course:
            YupValidation.string()
                .required(
                    "Please select course"
                ),

        dob:
            YupValidation.date()
                .required(
                    "Please select date"
                ),

        bio:
            YupValidation.string()
                .min(
                    20,
                    "Bio must be at least 20 characters"
                )
                .required(
                    "Bio is required"
                ),

        resume:
            YupValidation.mixed()
                .required(
                    "Please upload resume"
                ),
    });

const Yup = () => {


    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 px-4 py-10">

            <div className="w-full max-w-5xl mx-auto bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-slate-200 p-10 md:p-12">

                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-slate-900">
                        Create Your Account
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Fill in your details to create your account
                    </p>
                </div>

                <Formik
                    initialValues={{
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
                        resumePreview: "",
                    }}

                    validationSchema={validationSchema}

                    validateOnChange={true}
                    validateOnBlur={true}

                    onSubmit={(values) => {
                        console.log(values);

                        alert(
                            "Form Submitted Successfully"
                        );
                    }}
                >
                    {({
                        setFieldValue,
                        errors,
                        touched,
                        values,
                    }) => (
                        <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <h2 className="text-lg font-semibold text-slate-800 border-b pb-3 mb-2">
                                    Personal Information
                                </h2>
                            </div>

                            {/* First Name */}
                            <div>
                                <label className="block mb-2 text-sm font-medium text-slate-700">
                                    First Name
                                </label>
                                <Commanyup
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    error={touched.firstName && errors.firstName}

                                />
                            </div>

                            {/* Last Name */}
                            <div>
                                <label className="block mb-2 text-sm font-medium text-slate-700">
                                    Last Name
                                </label>
                                <Commanyup
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    error={touched.lastName && errors.lastName}

                                />
                            </div>

                            {/* Username */}
                            <div>
                                <label className="block mb-2 text-sm font-medium text-slate-700">
                                    User Name
                                </label>
                                <Commanyup
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    error={touched.username && errors.username}

                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block mb-2 text-sm font-medium text-slate-700">
                                    E-Mail
                                </label>
                                <Commanyup
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    error={touched.email && errors.email}
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block mb-2 text-sm font-medium text-slate-700">
                                    Phone Number
                                </label>
                                <Commanyup
                                    type="text"
                                    name="phone"
                                    placeholder="Phone Number"
                                    maxLength={10}
                                    error={touched.phone && errors.phone}
                                />
                            </div>

                            {/* Password */}
                            {/* Password */}
                            <div>
                                <label className="block mb-2 text-sm font-medium text-slate-700">
                                    Password
                                </label>

                                <Commanyup
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    error={touched.password && errors.password}
                                />
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label className="block mb-2 text-sm font-medium text-slate-700">
                                    Confirm Password
                                </label>

                                <Commanyup
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    error={touched.confirmPassword && errors.confirmPassword}
                                />
                            </div>

                            {/* Age */}
                            <div>
                                <label className="block mb-2 text-sm font-medium text-slate-700">
                                    Age
                                </label>
                                <Commanyup
                                    type="number"
                                    name="age"
                                    placeholder="Age"
                                    error={touched.age && errors.age}
                                />
                            </div>
                            <div className="md:col-span-2 mt-2">
                                <h2 className="text-lg font-semibold text-slate-800 border-b pb-3 mb-2">
                                    Additional Information
                                </h2>
                            </div>
                            {/* Radio Button */}
                            <div
                                className={`bg-slate-50 rounded-2xl p-6 ${touched.gender && errors.gender
                                    ? "border-2 border-red-500"
                                    : "border border-slate-200"
                                    }`}
                            >
                                <p className="font-semibold mb-4">Gender</p>

                                <div className="flex gap-8">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <Commanyup
                                            type="radio"
                                            name="gender"
                                            value="Male"
                                            showError={false}
                                        />
                                        <span>Male</span>
                                    </label>

                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <Commanyup
                                            type="radio"
                                            name="gender"
                                            value="Female"
                                            showError={false}
                                        />
                                        <span>Female</span>
                                    </label>
                                </div>

                                <ErrorMessage
                                    name="gender"
                                    component="p"
                                    className="text-red-500 text-sm mt-2"
                                />
                            </div>

                            {/* Checkbox */}
                            <div
                                className={`bg-slate-50 rounded-2xl p-6 ${touched.hobbies && errors.hobbies
                                    ? "border-2 border-red-500"
                                    : "border border-slate-200"
                                    }`}
                            >
                                <p className="font-semibold mb-4">Hobbies</p>

                                <div className="flex flex-wrap gap-8">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <Commanyup
                                            type="checkbox"
                                            name="hobbies"
                                            value="Cricket"
                                            showError={false}
                                        />
                                        <span>Cricket</span>
                                    </label>

                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <Commanyup
                                            type="checkbox"
                                            name="hobbies"
                                            value="Music"
                                            showError={false}
                                        />
                                        <span>Music</span>
                                    </label>

                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <Commanyup
                                            type="checkbox"
                                            name="hobbies"
                                            value="Coding"
                                            showError={false}
                                        />
                                        <span>Coding</span>
                                    </label>
                                </div>

                                <ErrorMessage
                                    name="hobbies"
                                    component="p"
                                    className="text-red-500 text-sm mt-2"
                                />
                            </div>

                            {/* City */}
                            <div>
                                <label className="block mb-2 text-sm font-medium text-slate-700">
                                    City
                                </label>

                                <Commanyup
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    error={touched.city && errors.city}
                                />
                            </div>

                            {/* Dropdown */}
                            <div>
                                <label className="block mb-2 text-sm font-medium text-slate-700">
                                    Course
                                </label>


                                <Commanyup
                                    as="select"
                                    name="course"
                                    error={touched.course && errors.course}
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
                                </Commanyup>
                            </div>

                            {/* Date Picker */}
                            <div className="md:col-span-2">
                                <label className="block mb-2 text-sm font-medium text-slate-700">
                                    Date of Birth
                                </label>

                                <DatePicker
                                    selected={values.dob}
                                    onChange={(date) => setFieldValue("dob", date)}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="Select Date"
                                    className={`w-full bg-white px-4 py-3 rounded-2xl shadow-sm outline-none transition-all ${touched.dob && errors.dob
                                        ? "border-2 border-red-500"
                                        : "border border-slate-300"
                                        }`}
                                />

                                {touched.dob && errors.dob && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.dob}
                                    </p>
                                )}
                            </div>

                            {/* Textarea */}
                            <div className="md:col-span-2">
                                <label className="block mb-2 text-sm font-medium text-slate-700">
                                    Bio
                                </label>

                                <Commanyup
                                    as="textarea"
                                    name="bio"
                                    placeholder="Tell us about yourself..."
                                    error={touched.bio && errors.bio}
                                />
                            </div>

                            {/* File Upload */}
                            <div
                                className={`md:col-span-2 border-2 border-dashed rounded-3xl p-10 text-center transition-all ${touched.resume && errors.resume
                                    ? "border-red-500 bg-red-50"
                                    : "border-slate-300 bg-slate-50 hover:border-slate-400"
                                    }`}
                            >
                                <div className="text-5xl mb-3">📄</div>

                                <h3 className="text-lg font-semibold text-slate-700">
                                    Upload Resume
                                </h3>

                                <p className="text-sm text-slate-500 mb-5">
                                    PDF, DOC, DOCX (Max 5MB)
                                </p>

                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files[0];

                                        setFieldValue("resume", file);

                                        if (file) {
                                            setFieldValue(
                                                "resumePreview",
                                                URL.createObjectURL(file)
                                            );
                                        }
                                    }}
                                    className="w-full rounded-2xl border border-slate-300 bg-white p-3"
                                />
                                {values.resumePreview && (
                                    <div className="mt-5 flex justify-center">
                                        <img
                                            src={values.resumePreview}
                                            alt="Preview"
                                            className="w-40 h-40 object-cover rounded-2xl border border-slate-300 shadow-md"
                                        />
                                    </div>
                                )}
                                <ErrorMessage
                                    name="resume"
                                    component="p"
                                    className="text-red-500 text-sm mt-2"
                                />
                            </div>
                            <button
                                type="submit"
                                className="md:col-span-2 w-full py-4 rounded-2xl bg-slate-900 text-white font-semibold text-lg hover:bg-slate-800 transition-all duration-300"                            >
                                Create Account
                            </button>

                        </Form>
                    )}
                </Formik>
            </div>
        </div >
    );
};

export default Yup;

