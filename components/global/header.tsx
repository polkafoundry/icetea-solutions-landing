const HeaderComponent = () => {
  return (
    <header className="flex justify-between items-center px-[100px] py-[14px] text-white">
      <div className="text-[28px] font-bold">Icetea Solutions</div>
      <div className="flex gap-[60px]">
        <button>Portfolio</button>
        <button className="px-[30px] py-[10px] rounded-[40px] bg-gradient-to-bl hover:bg-gradient-to-br from-[#18C8FF] to-[#933FFE]">
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default HeaderComponent;
