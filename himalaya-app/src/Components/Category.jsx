import React from 'react'
import "../Styles/Categories.css";
import {Box,Image,Text} from '@chakra-ui/react'

const categories=[
    {
        id:1,
        src:"https://cdn.shopify.com/s/files/1/0399/1728/9633/files/HUSA-Ashwagandha-90ct-Carton_Bottle-square_1024x.png?v=1614392545",
        title:"Supplements",
        link:"See All Supplements"
    },
    {
        id:1,
        src:"https://cdn.shopify.com/s/files/1/0399/1728/9633/files/HUSA-Ashwagandha-90ct-Carton_Bottle-square_1024x.png?v=1614392545",
        title:"Supplements",
        link:"See All Supplements"
    },
    {
        id:1,
        src:"https://cdn.shopify.com/s/files/1/0399/1728/9633/files/HUSA-Ashwagandha-90ct-Carton_Bottle-square_1024x.png?v=1614392545",
        title:"Supplements",
        link:"See All Supplements"
    },
]

const Category = () => {
  return (
      <Box>
            <Text>Shop By Category</Text>
            <Box className="categories">
            {
              categories.map((item)=>(
                <Box key={item.id} >
                    <Image src={item.src} />
                    <Text>{item.title}</Text>
                    <Text>{item.link}</Text>
                </Box>
              ))
            }
            </Box>
     </Box>
  )
}

export default Category