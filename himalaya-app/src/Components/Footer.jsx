import React from 'react'
import {Box,Text,Flex,Image} from "@chakra-ui/react";
import facebook from '../Assets/facebook.svg';
import instagram from '../Assets/instagram.svg';
import twitter from '../Assets/twitter.svg';
import youtube from '../Assets/youtube.svg';


const info=["Contact Us","FAQ","Blog","Store Locators","Careers"]

const policies=["Shipping & Returns", "Terms & Conditions","Privacy","CCPA","Accessibility"]

const Footer = () => {
  return (
    <Box bgColor="#eef2f0" padding="20px">

      <Flex gap="10rem" justifyContent="center" >

        <Box>
            <h4 style={{fontSize:"18px", color:"black", letterSpacing:"0.3px"}}>Info</h4>
            <Box>
              
                    {
                        info.map((el)=>(
                            <Box style={{fontSize:"17px", color:"#888888",marginTop:"8px",letterSpacing:"0.3px"}}>{el}</Box>
                        ))
                    }
                
            </Box>
        </Box>

        <Box>
            <h4 style={{fontSize:"18px", color:"black",letterSpacing:"0.3px"}}>Policies</h4>
            <Box>
                
                    {
                        policies.map((el)=>(
                            <Box style={{fontSize:"17px", color:"#888888", marginTop:"8px",letterSpacing:"0.3px"}} >{el}</Box>
                        ))
                    }
               
            </Box>
        </Box>

        <Flex flexDirection="column" gap="0.6rem" >
            <h4 style={{fontSize:"18px", color:"black",letterSpacing:"0.3px"}}>Contact Us</h4>
            <Flex flexDirection="column" gap="2rem">
              <Box>
                <Text fontSize="13px" color="black" fontWeight="bold" letterSpacing="0.3px" >Email:</Text>
                <Text fontSize="13px" color="#a3b49b" fontWeight="bold" letterSpacing="0.3px">writetous@himalayausa.com</Text>
              </Box>
              <Box>
                <Text fontSize="13px" color="black" fontWeight="bold" letterSpacing="0.3px">Phone:</Text>
                <Text fontSize="13px" color="#a3b49b" fontWeight="bold" letterSpacing="0.3px">1-800-869-4640</Text>
                <Text>Mon-Fri, 8am-5pm CT</Text>
              </Box>
              <Box>
              <Text fontSize="13px" color="black" fontWeight="bold" letterSpacing="0.3px" >Mail:</Text>
                <p style={{fontSize:"13px", color:"black", letterSpacing:"0.3px"}}>Himalaya Wellness</p>
                <Text fontSize="13px" color="#a3b49b" fontWeight="bold" letterSpacing="0.3px">1101 Gillingham Lane</Text>
                <Text fontSize="13px" color="#a3b49b" fontWeight="bold" letterSpacing="0.3px">Sugar Land, TX 77478​</Text>
              </Box>
            </Flex>
        </Flex>

        <Box width="270px">
            <h4 style={{fontSize:"18px", color:"black",letterSpacing:"0.3px"}}>Subscribe to Our Newsletter!</h4>
            <Box>
                <input style={{height:"40px", width:"250px", letterSpacing:"0.3px", border:"1px solid #E8E8E8", marginTop:"10px"}} placeholder="Enter your email" />
            </Box>
            <Box><Text fontSize="14px" color="black" letterSpacing="0.3px" marginTop="15px">By entering your email, you agree to our <span style={{color:"#a3b49b"}}>Terms & Conditions</span> and <span style={{color:"#a3b49b"}}>Privacy Policy</span>.</Text></Box>
            <Box style={{display:"flex", alignItems:"center", gap:"10px"}} >
              <Text style={{fontSize:"18px", color:"black",letterSpacing:"0.3px", marginTop:"25px"}}>Follow Us:</Text>
              <Image src={facebook} width="20px" />
              <Image src={twitter} width="20px" />
              <Image src={instagram} width="20px" />
              <Image src={youtube} width="20px" />
            </Box>
        </Box>

      </Flex>

      <Box style={{marginLeft:"5%"}} ><Text style={{fontSize:"15px", color:"#888888",marginTop:"4rem",letterSpacing:"0.3px"}}>© 2022 Himalaya Wellness. All rights reserved.</Text></Box>

      <Box style={{border:"1px solid #A8A8A8",width:"90%", padding:"13px",marginTop:"20px", fontSize:"12.5px",marginLeft:"5%"}}><Text textAlign="center">*THESE STATEMENTS HAVE NOT BEEN EVALUATED BY THE FOOD AND DRUG ADMINISTRATION. THIS PRODUCT IS NOT INTENDED TO DIAGNOSE, TREAT, CURE OR PREVENT ANY DISEASE.</Text></Box>
    </Box>
  )
}

export default Footer