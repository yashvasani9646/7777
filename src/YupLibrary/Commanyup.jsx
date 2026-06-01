import { Field, ErrorMessage } from "formik";

const Commanyup = ({
    type,
    name,
    placeholder,
    as,
    children,
    value,
    showError = true,
    error,
}) => {
    return (
        <div className="space-y-1">
            <Field
                type={type}
                name={name}
                placeholder={placeholder}
                as={as}
                value={value}
                className={
                    type === "radio" || type === "checkbox"
                        ? "h-4 w-4 accent-slate-900 cursor-pointer"
                        : `w-full bg-white px-4 py-3 rounded-2xl text-slate-700 shadow-sm outline-none transition-all duration-300 ${error
                            ? "border-2 border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                            : "border border-slate-300 focus:border-slate-900 focus:ring-4 focus:ring-slate-200 hover:border-slate-400"
                        }`}
                onInput={(e) => {
                    if (name === "phone") {
                        e.target.value = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 10);
                    }
                }}
            >
                {children}
            </Field>

            {showError && (
                <ErrorMessage
                    name={name}
                    component="p"
                    className="text-red-500 text-sm font-medium mt-1"
                />
            )}
        </div>
    );
};

export default Commanyup;