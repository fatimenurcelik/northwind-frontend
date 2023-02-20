import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn(props) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://www.google.com/search?q=avatar+%C3%A7i%C3%A7ek&sxsrf=AJOqlzU5DT8HZLH9D66QztsRyTEI2g6_uQ:1676546674408&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjDw-iH95n9AhVsXvEDHd1aBI4Q_AUoAXoECAEQAw&biw=1920&bih=912&dpr=1#imgrc=TP7Gax-oPAyoMM" />
            <Dropdown pointing="top left" text='Fatime Nur'>
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info"/>
                    <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out"/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
