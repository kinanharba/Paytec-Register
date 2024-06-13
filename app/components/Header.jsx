import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

const Header = () => {
  return (
    <>
      <nav className="bg-blue-700 py-4 px-6 flex items-center justify-between mb-5">
        <div className="flex item-center">
          <Link href="/">
            <div className="text-lg uppercase font-bold text-white flex align-center">
              <img
                src="https://paytec.de/wp-content/uploads/2022/03/paytec-logo-blue-black.jpg"
                className="mb-5 w-40 "
                alt=""
              />
            </div>
          </Link>
        </div>
        <div className="text-white flex items-center">
          <>
            <Link
              href="sign-in"
              className="text-gray-300 hover:text-white mr-4"
            >
              Sign In
            </Link>
            <Link
              href="sign-up"
              className="text-gray-300 hover:text-white mr-4"
            >
              Sign Up
            </Link>
          </>
        </div>
      </nav>
    </>
  );
};
export default Header;
