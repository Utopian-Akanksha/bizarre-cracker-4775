import React from 'react'
import "../Styles/Sellers.css";
import cart from "../Assets/cart.png"
import {Box,Image,Text,Button,Flex} from '@chakra-ui/react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const sellers=[
    
        {
            id:1,
            src:"https://cdn.shopify.com/s/files/1/0399/1728/9633/files/HUSA-Ashwagandha-90ct-Carton_Bottle-square_1024x.png?v=1614392545",
            title:"Organic Ashwagandha",
            price:"$14.95"
        },
        {
            id:2,
            src:"https://cdn.shopify.com/s/files/1/0399/1728/9633/files/WCC-SIMPLY-MINT-RENDER-WITH-BRUSH-High-Res_1024x.png?v=1614392545",
            title:"Simply Mint Whitening Toothpaste",
            price:"$5.99"
        },
        {
            id:3,
            src:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/livercare-524140_800x.png?v=1660858343",
            title:"LiverCare",
            price:"$17.95"
        },
        {
            id:4,
            src:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/neem-pomegranate-original-toothpaste-399591_800x.png?v=1660858351",
            title:"Neem & Pomegrante Original Toothpaste",
            price:"$5.99"
        },
        {
            id:5,
            src:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/organic-amla-944817_800x.png?v=1660858354",
            title:"Organic Amla",
            price:"$19.95"
        },
        {
            id:6,
            src:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/immunocare-629100_800x.png?v=1660813422",
            title:"ImmunoCare",
            price:"$24.95"
        },
        {
            id:7,
            src:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/organic-bitter-melon-139522_800x.png?v=1660858343",
            title:"Organic Bitter Melon",
            price:"$12.95"
        },
        {
            id:8,
            src:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/organic-gymnema-953558_800x.png?v=1660813421",
            title:"Organic Gymnema",
            price:"$14.95"
        },
    
]

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const BestSellers = () => {
  return (
    
    <Box style={{width:"90%", margin:"auto",marginTop:"8%"}} >
        <Text textAlign="center" fontSize="2.4rem" marginBottom="10px">Best Sellers</Text>
        <Carousel responsive={responsive}>
             {
                sellers.map((item)=>(
                    <Box key={item.id} className="sellerBox" >
                        <Image src={item.src} alt="sellers" width="270px" />
                        <Text fontSize="18px" color="#333333">{item.title}</Text>
                        <Flex alignItems="center" gap="4px">
                            <Text fontSize="18px" color="#66765f">{item.price}</Text>
                            <Button><span><Image src={cart} alt="cart" width="20px" /></span>Add to Cart</Button>
                        </Flex>
                    </Box>
                ))
             }
        </Carousel>
    </Box>
    
  )
}

export default BestSellers