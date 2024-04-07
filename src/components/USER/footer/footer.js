"use client";
const Footer = () => {
  return (
    <main className="w-full bg-foreground shadow-2xl">
      <section className="mx-auto flex items-center justify-center">
        <p className="font-[400] text-[16px] leading-[24px] font-[Poppins] py-4 text-white">
          _Brand_&copy; For company use only | {new Date().getFullYear()}
        </p>
      </section>
    </main>
  );
};

export default Footer;
