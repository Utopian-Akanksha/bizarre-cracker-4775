import React from 'react'
import logo from '../Assets/logo.png';
import search from '../Assets/search.png'
import user from '../Assets/user.png'
import bag from '../Assets/bag.png'
import {Box,Text,Image,Flex,Spacer,Menu,MenuButton,Portal,MenuList,MenuItem} from "@chakra-ui/react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <Box>
           <Box bg="#ff7451" padding="0.6rem">
               <Text color="#ffffff" fontSize="17px" textAlign="center" letterSpacing="0.5px" > <span><strong>FREE SHIPPING</strong></span> ON ALL ORDERS ABOVE $35!</Text>
           </Box>

           <Flex alignItems="center" height="28px" padding="3.4rem">
               <Flex alignItems="center" gap="3rem">
                  <Box> <Link to="/" ><Image width="230px" height="70px" src={logo} /></Link> </Box>

                  <Flex gap="3rem">
                       <Box><Text color="#777777" fontSize="20px">Shop</Text></Box>
                       <Box><Text color="#777777" fontSize="20px">About</Text></Box>
                       <Box><Text color="#777777" fontSize="20px">Store Locator</Text></Box>
                  </Flex>
               </Flex>

               <Spacer/>

               <Flex alignItems="center" gap="1.2rem">
                   <Box><Image width="30px" height="30px" src={search}/></Box>
                   <Box>
                      <Menu>
                        <MenuButton>
                            <Image width="25px" height="25px" src={user} />
                       </MenuButton>
                       <Portal>
                        <MenuList>
                           <MenuItem><Link to="/signin">Sign In</Link></MenuItem>
                           <MenuItem><Link to="/register">Register</Link></MenuItem>
                           <MenuItem><Link to="/checkout">Checkout</Link></MenuItem>
                        </MenuList>
                       </Portal>
                     </Menu>
                   </Box>
                   <Box><Image width="25px" height="25px" src={bag} /></Box>
               </Flex>

           </Flex>
    </Box>
  )
}

export default Navbar