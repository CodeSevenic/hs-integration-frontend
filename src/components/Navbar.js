﻿import { CartIcon } from '../icons';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const amount = useSelector((store) => store.cart.amount);
  return (
    <nav className="nav-center">
      <h3>Redux toolkit</h3>
      <div className="nav-container">
        <CartIcon />
        <div className="amount-container">
          <p className="total-amount">{amount}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
