import React from 'react'
import { Dropdown, DropdownDivider, DropdownItem, Label } from "semantic-ui-react";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function CartSummary() {
  
  const {cartItems} = useSelector((state) => state.rootReducer.cart)
  console.log(cartItems);

  const state = useSelector((state) => state)

  return (
    <div>
          <Dropdown item text='Sepetiniz'>
            <Dropdown.Menu>
              {
                cartItems.map((cartItem)=>(
                  <Dropdown.Item>
                    {cartItem?.product?.name}   
                    <Label>
                      {cartItem?.quantity}
                    </Label>
                  </Dropdown.Item>   
                ))
              }
              <DropdownDivider/>
              <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
    </div>
  )
}
