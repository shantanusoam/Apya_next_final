import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      {/* <p className="logo">
        <Link href="/">
          <img
            src="https://raw.githubusercontent.com/shantanusoam/new-ecommerce/main/apya/Images/APYAINDUSTRY.png"
            height={10}
            alt=""
          ></img>
        </Link>
      </p> */}
      <p>
        <Link href="/">+91 9150888833</Link>
      </p>
      <p>
        <Link href="/">SIZECHART</Link>
      </p>
      <p>
        <Link href="/">PRIVACY POLICY</Link>
      </p>
      <p>
        <Link href="/">PRIVACY POLICY</Link>
      </p>
      <p>
        <Link href="/">PRIVACY POLICY</Link>
      </p>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
