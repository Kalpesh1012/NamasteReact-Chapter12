import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "../utils/store";

import useLogin from "../utils/useLogin";

const Header = () => {
  const isloggedin = useLogin();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex h-[100px] bg-purple-50  ">
      <Link to="/">
        <img
          src="https://content3.jdmagicbox.com/comp/navi-mumbai/l4/022pxx22.xx22.180901093644.i4l4/catalogue/khao-piyo-sojao-nerul-navi-mumbai-home-delivery-restaurants-j7ab4cza91.jpg"
          alt="logo"
          className="h-24 w-auto"
        />
      </Link>
      <ul className="flex p-4 space-x-3 ml-[550px] ">
        <li className="p-3 text-black">
          <Link to="/">Home</Link>
        </li>
        <li className="p-3 text-black">
          <Link to="/about">About</Link>
        </li>
        <li className="p-3 text-black">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="p-3">
          <Link to="/cart">Cart-{cartItems.length}items</Link>
        </li>
        <li className="p-3 ">
          <Link to="/offer">Offer</Link>
        </li>
      </ul>
      {isloggedin ? (
        <button
          className="mt-6  ml-[380px]  h-8 w-24 border-2 bg-slate-300"
          onClick={!isloggedin}
        >
          Log In
        </button>
      ) : (
        <button
          className="mt-6 ml-[380px]  h-8 w-24 border-2 bg-slate-300"
          onClick={isloggedin}
        >
          Log Out
        </button>
      )}
    </div>
  );
};
export default Header;
