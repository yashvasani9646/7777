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
    return (
        <div>

            {type === "textarea" ? (
                <textarea
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full border border-gray-300 p-3 rounded-xl h-32 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
            ) : type === "select" ? (
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                >
                    {options?.map((item) => (
                        <option
                            key={item}
                            value={item}
                        >
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
                    className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
            )}

            {error && (
                <p className="text-red-500 text-xs mt-1 font-medium">
                    {error}
                </p>
            )}
        </div>
    );
};

export default CommonInput;