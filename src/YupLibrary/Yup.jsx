import {
    Formik,
    Form,
    Field,
    ErrorMessage,
} from "formik";

import * as YupValidation from "yup";
import Commanyup from "./Commanyup";

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
                    6,
                    "Password must be at least 6 characters"
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
            YupValidation.string()
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
                        dob: "",
                        bio: "",
                        resume: null,
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
                    }) => (
                        <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <h2 className="text-lg font-semibold text-slate-800 border-b pb-3 mb-2">
                                    Personal Information
                                </h2>
                            </div>

                            {/* First Name */}
                            <div>

                                <Commanyup
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    error={touched.firstName && errors.firstName}

                                />
                            </div>

                            {/* Last Name */}
                            <div>

                                <Commanyup
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    error={touched.lastName && errors.lastName}

                                />
                            </div>

                            {/* Username */}
                            <div>
                                <Commanyup
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    error={touched.username && errors.username}

                                />
                            </div>

                            {/* Email */}
                            <div>

                                <Commanyup
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    error={touched.email && errors.email}
                                />
                            </div>

                            {/* Phone */}
                            <div>

                                <Commanyup
                                    type="text"
                                    name="phone"
                                    placeholder="Phone Number"
                                    maxLength={10}
                                    error={touched.phone && errors.phone}
                                />
                            </div>

                            {/* Password */}
                            <div>

                                <Commanyup
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    error={touched.password && errors.password}
                                />
                            </div>

                            {/* Confirm Password */}
                            <div>

                                <Commanyup
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    error={touched.confirmPassword && errors.confirmPassword}
                                />
                            </div>

                            {/* Age */}
                            <div>

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

                                <p className="font-semibold mb-3">
                                    Gender
                                </p>

                                <div className="flex gap-6">

                                    <label>
                                        <Commanyup
                                            type="radio"
                                            name="gender"
                                            value="Male"
                                            showError={false}
                                        />
                                        Male
                                    </label>

                                    <label>
                                        <Commanyup
                                            type="radio"
                                            name="gender"
                                            value="Female"
                                            showError={false}
                                        />
                                        Female
                                    </label>

                                </div>

                                <ErrorMessage
                                    name="gender"
                                    component="p"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Checkbox */}
                            <div
                                className={`bg-slate-50 rounded-2xl p-6 ${touched.gender && errors.gender
                                    ? "border-2 border-red-500"
                                    : "border border-slate-200"
                                    }`}
                            >
                                <p className="font-semibold mb-3">
                                    Hobbies
                                </p>

                                <div className="flex flex-wrap gap-6">

                                    <label>
                                        <Commanyup
                                            type="checkbox"
                                            name="hobbies"
                                            value="Cricket"
                                            showError={false}
                                        />
                                        Cricket
                                    </label>

                                    <label>
                                        <Commanyup
                                            type="checkbox"
                                            name="hobbies"
                                            value="Music"
                                            showError={false}

                                        />
                                        Music
                                    </label>

                                    <label>
                                        <Commanyup
                                            type="checkbox"
                                            name="hobbies"
                                            value="Coding"
                                            showError={false}

                                        />
                                        Coding
                                    </label>

                                </div>

                                <ErrorMessage
                                    name="hobbies"
                                    component="p"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* City */}
                            <div>

                                <Commanyup
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    error={touched.city && errors.city}
                                />
                            </div>

                            {/* Dropdown */}
                            <div>

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
                            <div>
                                <Commanyup
                                    type="date"
                                    name="dob"
                                    error={touched.dob && errors.dob}
                                />
                            </div>

                            {/* Textarea */}
                            <div className="md:col-span-2">
                                <Commanyup
                                    as="textarea"
                                    name="bio"
                                    placeholder="Tell us about yourself..."
                                    error={touched.bio && errors.bio}
                                />
                            </div>

                            {/* File Upload */}
                            <div
                                className={`md:col-span-2 border-2 border-dashed rounded-2xl p-8 text-center ${touched.resume && errors.resume
                                    ? "border-red-500 bg-red-50"
                                    : "border-slate-300 bg-slate-50"
                                    }`}
                            >                                <div className="text-4xl mb-2">📄</div>

                                <h3 className="font-semibold text-slate-700">
                                    Upload Resume
                                </h3>

                                <p className="text-sm text-slate-500 mb-4">
                                    PDF, DOC, DOCX
                                </p>

                                <input
                                    type="file"
                                    onChange={(e) => {
                                        setFieldValue(
                                            "resume",
                                            e.target.files[0]
                                        );
                                    }}
                                    className="w-full rounded-xl border border-slate-300 bg-white p-3"
                                    error={touched.file && errors.file}
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
        </div>
    );
};

export default Yup;

