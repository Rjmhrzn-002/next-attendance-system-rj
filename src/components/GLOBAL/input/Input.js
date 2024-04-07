"use client";
const Input = (props) => {
  return (
    <div className="flex-1">
      <input
        className={`w-full px-4 py-4 text-md shadow-xl border placeholder-zinc-500 text-zinc-800 rounded focus:outline-none focus:ring  ease-linear transition-all duration-150
        ${Boolean(props.error) && "border-red-500"}`}
        {...props}
      />
    </div>
  );
};

export default Input;
