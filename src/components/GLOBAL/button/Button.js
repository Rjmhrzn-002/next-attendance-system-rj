"use client";
const Button = ({
  title,
  onClick,
  bgColor,
  radiusBorder,
  ...remainingProps
}) => {
  return (
    <>
      <button
        style={{ backgroundColor: bgColor, borderRadius: radiusBorder }}
        onClick={onClick}
        className="px-6 py-2 h-max text-white font-semibold uppercase transition-all duration-100 hover:opacity-85 shadow-xl active:translate-y-[1px] rounded-md disabled:bg-slate-500"
        {...remainingProps}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
