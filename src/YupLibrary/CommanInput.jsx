import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Select from "react-select";

const CommonInput = ({
    type,
    name,
    placeholder,
    value,
    onChange,
    error,
    checked,
    options,

}) => {
    const inputStyle = `
    w-full bg-white/80 backdrop-blur-sm px-4 py-3 rounded-2xl text-slate-700 shadow-sm outline-none transition-all duration-300
    ${error
            ? "!border-2 !border-red-500 focus:!border-red-500 focus:!ring-red-100"
            : "border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 hover:border-indigo-300"
        }
`;
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="space-y-1">
            {type === "textarea" ? (
                <textarea
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`${inputStyle} h-32 resize-none`}
                />
            ) : type === "select" ? (
                <Select
                    options={options?.map((item) => ({
                        value: item,
                        label: item,
                    }))}
                    value={
                        options?.find((item) => item === value)
                            ? {
                                value: value,
                                label: value,
                            }
                            : null
                    }
                    onChange={(selected) =>
                        onChange({
                            target: {
                                name,
                                value: selected?.value || "",
                            },
                        })
                    }
                    placeholder="Select Course"
                    styles={{
                        control: (provided, state) => ({
                            ...provided,
                            minHeight: 52,
                            height: 60,
                            borderRadius: 16,

                            borderWidth: "2px",
                            borderStyle: "solid",
                            borderColor: error ? "#ef4444" : "#e2e8f0",

                            backgroundColor: error ? "#fef2f2" : "#fff",

                            boxShadow: error
                                ? "0 0 0 1px #ef4444"
                                : state.isFocused
                                    ? "0 0 0 4px rgba(99,102,241,0.1)"
                                    : "none",

                            "&:hover": {
                                borderColor: error ? "#ef4444" : "#6366f1",
                            },
                        }),

                        valueContainer: (provided) => ({
                            ...provided,
                            height: 52,
                            padding: "0 16px",
                        }),

                        input: (provided) => ({
                            ...provided,
                            margin: 0,
                            padding: 0,
                        }),

                        indicatorsContainer: (provided) => ({
                            ...provided,
                            height: 52,
                        }),

                        singleValue: (provided) => ({
                            ...provided,
                            color: "#334155",
                        }),
                    }}
                />
            ) : (
                type === "password" ? (
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            maxLength={8}
                            name={name}
                            value={value}
                            placeholder={placeholder}
                            onChange={onChange}
                            className={`${inputStyle} pr-12`}
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                ) : (
                    <input
                        type={type}
                        name={name}
                        value={value}
                        checked={checked}
                        placeholder={placeholder}
                        onChange={onChange}
                        className={
                            type === "radio" || type === "checkbox"
                                ? "h-5 w-5 accent-indigo-600 cursor-pointer"
                                : type === "file"
                                    ? `w-full cursor-pointer rounded-xl p-3 text-sm text-slate-600 ${error
                                        ? "border-2 border-red-500 bg-red-50"
                                        : "border border-slate-300 bg-slate-50"
                                    }`
                                    : inputStyle
                        }
                    />
                )
            )}

            {error && (
                <p className="text-red-500 text-sm font-medium">
                    {error}
                </p>
            )}
        </div>
    );
};

export default CommonInput;