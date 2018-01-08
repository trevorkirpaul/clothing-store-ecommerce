import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../header/HeaderContainer';

import Cart from '../cart/CartContainer';
import Checkout from '../checkout/CheckoutContainer';
import Welcome from '../welcome/Welcome';
import Products from '../products/ProductsContainer';
import Product from '../productItem/ProductItemContainer';
import SignUp from '../sign_up/SignUpContainer';
import SignIn from '../sign_in/SignIn';
import SignInConfirm from '../confirmations/SignInConfirm';
import SignOutConfirm from '../confirmations/SignOutConfirm';
import SignOut from '../sign_out/SignOut';
import ThankYou from '../ThankYou/ThankYou';
import NotFound from '../notFound/NotFound';
import CheckAuth from '../HoC/CheckAuth';
import VerifyShippingExists from '../HoC/VerifyShippingExists';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/cart" component={Cart} />
          <Route
            exact
            path="/checkout"
            component={VerifyShippingExists(Checkout)}
          />
          <Route exact path="/products" component={Products} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signout" component={CheckAuth(SignOut)} />
          <Route exact path="/confirm/signin" component={SignInConfirm} />
          <Route exact path="/confirm/signout" component={SignOutConfirm} />
          <Route exact path="/thankyou" component={ThankYou} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
