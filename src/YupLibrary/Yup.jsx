import {
    Formik,
    Form,
    Field,
    ErrorMessage,
} from "formik";

import * as YupValidation from "yup";

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
                .email(
                    "Invalid Email Address"
                )
                .required(
                    "Email is required"
                ),

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

            <div className="w-full max-w-xl bg-white p-6 rounded-2xl shadow-lg">

                <h1 className="text-3xl font-bold text-center mb-6">
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

                        <Form className="space-y-4">

                            {/* First Name */}
                            <div>

                                <Field
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    className="w-full border p-3 rounded-lg"
                                />

                                <ErrorMessage
                                    name="firstName"
                                    component="p"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Last Name */}
                            <div>

                                <Field
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    className="w-full border p-3 rounded-lg"
                                />

                                <ErrorMessage
                                    name="lastName"
                                    component="p"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Username */}
                            <div>

                                <Field
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    className="w-full border p-3 rounded-lg"
                                />

                                <ErrorMessage
                                    name="username"
                                    component="p"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Email */}
                            <div>

                                <Field
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    className="w-full border p-3 rounded-lg"
                                />

                                <ErrorMessage
                                    name="email"
                                    component="p"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Phone */}
                            <div>

                                <Field
                                    type="text"
                                    name="phone"
                                    placeholder="Phone Number"
                                    className="w-full border p-3 rounded-lg"
                                />

                                <ErrorMessage
                                    name="phone"
                                    component="p"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Password */}
                            <div>

                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="w-full border p-3 rounded-lg"
                                />

                                <ErrorMessage
                                    name="password"
                                    component="p"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Confirm Password */}
                            <div>

                                <Field
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    className="w-full border p-3 rounded-lg"
                                />

                                <ErrorMessage
                                    name="confirmPassword"
                                    component="p"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Age */}
                            <div>

                                <Field
                                    type="number"
                                    name="age"
                                    placeholder="Age"
                                    className="w-full border p-3 rounded-lg"
                                />

                                <ErrorMessage
                                    name="age"
                                    component="p"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Radio Button */}
                            <div>

                                <p className="mb-2">
                                    Gender
                                </p>

                                <div className="flex gap-4">

                                    <label>
                                        <Field
                                            type="radio"
                                            name="gender"
                                            value="Male"
                                        />
                                        Male
                                    </label>

                                    <label>
                                        <Field
                                            type="radio"
                                            name="gender"
                                            value="Female"
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
                            <div>

                                <p className="mb-2">
                                    Hobbies
                                </p>

                                <div className="flex gap-4">

                                    <label>
                                        <Field
                                            type="checkbox"
                                            name="hobbies"
                                            value="Cricket"
                                        />
                                        Cricket
                                    </label>

                                    <label>
                                        <Field
                                            type="checkbox"
                                            name="hobbies"
                                            value="Music"
                                        />
                                        Music
                                    </label>

                                    <label>
                                        <Field
                                            type="checkbox"
                                            name="hobbies"
                                            value="Coding"
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

                                <Field
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    className="w-full border p-3 rounded-lg"
                                />

                                <ErrorMessage
                                    name="city"
                                    component="p"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Dropdown */}
                            <div>

                                <Field
                                    as="select"
                                    name="course"
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

                                </Field>

                                <ErrorMessage
                                    name="course"
                                    component="p"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Date Picker */}
                            <div>

                                <Field
                                    type="date"
                                    name="dob"
                                    className="w-full border p-3 rounded-lg"
                                />

                                <ErrorMessage
                                    name="dob"
                                    component="p"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Textarea */}
                            <div>

                                <Field
                                    as="textarea"
                                    name="bio"
                                    placeholder="Enter Bio"
                                    className="w-full border p-3 rounded-lg h-28"
                                />

                                <ErrorMessage
                                    name="bio"
                                    component="p"
                                    className="text-red-500 text-sm mt-1"
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
                                    className="w-full border p-3 rounded-lg"
                                />

                                <ErrorMessage
                                    name="resume"
                                    component="p"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-3 rounded-lg"
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

