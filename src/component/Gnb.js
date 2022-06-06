import { useRouter } from 'next/router'
import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function Gnb() {
  let activeItem;
  const router = useRouter();

  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router.pathname === "/about") {
    activeItem = "about";
  }


  const goLink = (e, data) => {
    if (data.name === "home") {
      router.push('/');
    } else if (data.name === "about") {
      router.push('/about');
    } else if(data.name === "contactus"){
      router.push('/contactus');
    }
  }
  return (
      
    <Menu inverted>
        <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={goLink}
        />
        <Menu.Item
        name='about'
        active={activeItem === 'about'}
        onClick={goLink}
      />
      <Menu.Item
        name='contact us'
        active={activeItem === 'about'}
        onClick={goLink}
        />
    </Menu>
    )
}
