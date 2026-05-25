import { Formik, Form, Field, ErrorMessage } from "formik";
import * as YupValidation from "yup";

const validationSchema = YupValidation.object({
    name: YupValidation.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),

    email: YupValidation.string()
        .email("Invalid email")
        .required("Email is required"),

    password: YupValidation.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});

const Yup = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Yup Validation
                </h1>

                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        password: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log(values);
                        alert("Form Submitted Successfully");
                    }}
                >
                    <Form className="space-y-4">

                        <div>
                            <Field
                                type="text"
                                name="name"
                                placeholder="Enter Name"
                                className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
                            />

                            <ErrorMessage
                                name="name"
                                component="p"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        <div>
                            <Field
                                type="email"
                                name="email"
                                placeholder="Enter Email"
                                className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
                            />

                            <ErrorMessage
                                name="email"
                                component="p"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        <div>
                            <Field
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
                            />

                            <ErrorMessage
                                name="password"
                                component="p"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold"
                        >
                            Submit
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Yup;