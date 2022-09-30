import React from 'react';
import "../Styles/Banner.css";
import {Box,Image,Text} from "@chakra-ui/react"

const Banner = () => {
  return (
    <Box className="bannerBox" >
         <Box>
            <Image src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/StressCareA-Main-647x1024.png?v=1591359475" alt="herb" width="140px" />
         </Box>
         <Box className="textBox">
            <Text fontSize="28px" color="#333333" letterSpacing="0.5px"><span style={{fontWeight:"600"}}>Unlock the Wisdom of Herbs</span>
                <br></br>
                with Herbal Supplements, Toothpaste & More! </Text>
            <Box lineHeight="2.2rem">
              <Text fontSize="14px" color="#333" >
                Since 1930, Himalaya has been passionate about the healing wisdom of herbs. We offer a wide range of
                clinically-studied herbal supplements,<br></br> toothpaste and personal care products that unlock the powerful healing 
                benefits of herbs.
              </Text>
            </Box>
         </Box>
    </Box>
  )
}

export default Banner