import React, {useState} from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navi() {
   const {cartItems} = useSelector((state) => state.rootReducer.cart)

    const [isAuthenticated, setIsAuthenticated] = useState(true)

    function handleSignOut(params) {
        setIsAuthenticated(false)
    }

    function handleSignIn(params) {
        setIsAuthenticated(true)
    }

  return (
    <div>
      <Menu inverted fixed="top" size="mini">
        <Container>
          <Menu.Item name="home"  as={NavLink} to="/" />
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
          {cartItems.length > 0 && <CartSummary/>}
                {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
