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

        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">

            <div className="w-full max-w-3xl bg-white p-8 rounded-3xl shadow-2xl border border-gray-200">

                <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">
                    Yup Validation Form
                </h1>

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

                    validationSchema={
                        validationSchema
                    }

                    onSubmit={(values) => {

                        console.log(values);

                        alert(
                            "Form Submitted Successfully"
                        );
                    }}
                >

                    {({
                        setFieldValue,
                    }) => (

                        <Form className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            {/* First Name */}
                            <div>

                                <Commanyup
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                />
                            </div>

                            {/* Last Name */}
                            <div>

                                <Commanyup
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                />
                            </div>

                            {/* Username */}
                            <div>
                                <Commanyup
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                />
                            </div>

                            {/* Email */}
                            <div>

                                <Commanyup
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                />
                            </div>

                            {/* Phone */}
                            <div>

                                <Commanyup
                                    type="text"
                                    name="phone"
                                    placeholder="Phone Number"
                                />
                            </div>

                            {/* Password */}
                            <div>

                                <Commanyup
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                            </div>

                            {/* Confirm Password */}
                            <div>

                                <Commanyup
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                />
                            </div>

                            {/* Age */}
                            <div>

                                <Commanyup
                                    type="number"
                                    name="age"
                                    placeholder="Age"
                                />
                            </div>

                            {/* Radio Button */}
                            <div className="border rounded-xl p-4">

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
                            <div className="border rounded-xl p-4">
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
                                />
                            </div>

                            {/* Dropdown */}
                            <div>

                                <Commanyup
                                    as="select"
                                    name="course"
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
                                />
                            </div>

                            {/* Textarea */}
                            <div>

                                <Commanyup
                                    as="textarea"
                                    name="bio"
                                    placeholder="Enter Bio"
                                    className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* File Upload */}
                            <div>

                                <input
                                    type="file"
                                    onChange={(e) => {
                                        setFieldValue(
                                            "resume",
                                            e.target.files[0]
                                        );
                                    }}
                                    className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />

                                <ErrorMessage
                                    name="resume"
                                    component="p"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white py-3 rounded-xl font-semibold text-lg"
                            >
                                Submit
                            </button>

                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Yup;

