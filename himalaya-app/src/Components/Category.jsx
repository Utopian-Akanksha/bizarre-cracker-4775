import React from 'react'
import "../Styles/Categories.css";
import {Link} from "react-router-dom"
import {Box,Image,Text} from '@chakra-ui/react'

const categories=[
    {
        id:1,
        src:"https://cdn.shopify.com/s/files/1/0399/1728/9633/files/HUSA-Ashwagandha-90ct-Carton_Bottle-square_1024x.png?v=1614392545",
        title:"Supplements",
        link:"See All Supplements"
    },
    {
        id:2,
        src:"https://cdn.shopify.com/s/files/1/0399/1728/9633/files/WCC-SIMPLY-MINT-RENDER-WITH-BRUSH-High-Res_1024x.png?v=1614392545",
        title:"Oral Care",
        link:"See All Oral Care"
    },
    {
        id:3,
        src:"https://cdn.shopify.com/s/files/1/0399/1728/9633/files/Face_Wash-Balancing-Box-Bottle-square_1024x.png?v=1614392545",
        title:"Personal Care",
        link:"See All Personal Care"
    },
]

const Category = () => {
  return (
      <Box style={{display:"flex", gap:"2rem",flexDirection:"column", justifyContent:"center" ,alignItems:"center", marginTop:"4%" }} >
            <Text fontSize="2.4rem">Shop By Category</Text>
            <Box className="categories" >
                {
                    categories.map((item)=>(
                        <Box className="catBox" >
                            <Image className="imgBox" src={item.src} alt="image" height="380px" />
                            <Text fontSize="18px" color="black" >{item.title}</Text>
                            <Text fontSize="14px" color="#888888" ><Link>{item.link}</Link></Text>
                        </Box>
                    ))
                }
            </Box>
     </Box>
  )
}

export default Category