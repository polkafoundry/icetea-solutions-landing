import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  // const [active, setActive] = useState(1);
  return (
    <div className="relative flex flex-col ">
      <img
        className="absolute z-0 w-full"
        src={`${router.basePath}/assets/images/header-background.svg`}
        alt="banner-background"
      />
      <div className="z-10 mt-[14px] flex w-full items-center justify-between px-[80px] align-middle">
        <h2 className="w-[300px] text-2xl font-bold text-white">
          Icetea solutions
        </h2>
        <nav>
          <ul className="flex flex-wrap text-xl">
            <button
              type="button"
              className={`rounded-[40px] bg-gradient-to-bl from-[#18C8FF]  to-[#933FFE] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:focus:ring-blue-800`}
            >
              Portfolio
            </button>

            <button
              type="button"
              className="ml-[10px] rounded-[40px] bg-gradient-to-bl from-[#18C8FF] to-[#933FFE] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:focus:ring-blue-800"
            >
              Contact Us
            </button>
          </ul>
        </nav>
      </div>
      <div className="z-10 mt-[120px] flex w-full items-center justify-center px-[80px] align-middle">
        <div className="flex w-[200px] flex-col">
          Power by
          <img
            className="h-[20px] w-[20px]"
            src={`${router.basePath}/assets/images/icetea-icon.svg`}
            alt="icetea-labs-icon"
          />
          <div>Icetea Labs</div>
        </div>
        <nav>
          <ul className="flex flex-wrap text-xl">
            <button
              type="button"
              className={`rounded-[40px] bg-gradient-to-bl from-[#18C8FF]  to-[#933FFE] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:focus:ring-blue-800`}
            >
              Portfolio
            </button>

            <button
              type="button"
              className="ml-[10px] rounded-[40px] bg-gradient-to-bl from-[#18C8FF] to-[#933FFE] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:focus:ring-blue-800"
            >
              Contact Us
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
