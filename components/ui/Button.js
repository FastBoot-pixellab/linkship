function Button({ text, className, ...etc }) {
    return (
        <button className={`flex items-center py-1 px-2 bg-[#5422ff] text-white rounded-md font-semibold transition-colors duration-300 hover:bg-[#734aff] ${className}`} {...etc}>
            {text}
        </button>
    )
}

export default Button