// import { useCallback, useState, useMemo } from 'react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/cart/cart.selector';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';

// const sleep = (milliseconds: number): void => {
//   let start = new Date().getTime();
//   for (let i = 0; i < 1e7; i++) {
//     if (new Date().getTime() - start > milliseconds) {
//       break;
//     }
//   }
// };

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  // const [temp, setTemp] = useState('A');
  // const [count, setCount] = useState(0);

  // const goToCheckoutHandler = useCallback(() => {
  //   // 'useCallback' hook is use to memoized a function (not the output of the function), so that it do not re initialize every time a comppnent runs. This increases the performance.
  //   console.log(temp);
  //   // navigate('/checkout');
  // }, [temp]);

  // const hundredCount = useMemo(() => {
  //   // 'useMemo' memoize the return value of the function.
  //   console.log('start');
  //   sleep(2000);
  //   console.log('end');
  //   return 100 + count;
  // }, [count]);

  const goToCheckoutHandler = useCallback(() => {
    navigate('/checkout');
  }, []);

  return (
    <CartDropdownContainer>
      <CartItems>
        {/* {hundredCount} */}
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      {/* <Button onClick={() => setCount(count + 1)}>GO TO CHECKOUT</Button> */}
      {/* <Button onClick={() => setTemp('B')}>Update</Button> */}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
