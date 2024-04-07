const Textarea = (props) => {
  return (
    <div className="flex-1 h-full">
      <textarea
        // style={bgColor}
        className={`w-full h-full px-4 py-4 mb-1 text-md shadow-xl border placeholder-zinc-500 text-zinc-800 bg-white rounded focus:outline-none focus:ring  ease-linear transition-all duration-150
        ${Boolean(props.error) && "border-red-500"}`}
        {...props}
      />
    </div>
  );
};

export default Textarea;
