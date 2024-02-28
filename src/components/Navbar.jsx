import { Link, Outlet } from "react-router-dom"
import { logo } from "../assets/images/images"
import { navLinks } from "../shared/constant/navLinks.constant"
import { useSelector } from "react-redux"

const Navbar = () => {
  const { cart } = useSelector(state=>state.shop)

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-sky-200  shadow-md shadow-gray-500 mb-1">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <Link to={"/"}>
              <img src={logo} alt="" className="w-14" />
            </Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
              <li>
                <Link to="/cart" className="relative">
                  <img
                    src="/bag.png"
                    height={25}
                    width={20}
                    alt="Bag icon"
                  />
                    <span className="absolute top-0 right-0">
                        <h1 className="font-bold">
                            {cart.length}
                        </h1>
                    </span>
                </Link>
              </li>
              <li>
                <Link to="/signin">Signin</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
