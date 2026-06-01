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
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={inputStyle}
                >
                    {options?.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
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