import { Field, ErrorMessage } from "formik";

const Commanyup = ({
    type,
    name,
    placeholder,
    as,
    children,
    value,
    showError = true,
}) => {
    return (
        <div>
            <Field
                type={type}
                name={name}
                placeholder={placeholder}
                as={as}
                value={value}
                className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
                {children}
            </Field>

            {showError && (
                <ErrorMessage
                    name={name}
                    component="p"
                    className="text-red-500 text-sm mt-1"
                />
            )}
        </div>
    );
};

export default Commanyup;