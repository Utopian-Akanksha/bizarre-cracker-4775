import React from 'react'
import "../Styles/FirstBox.css"
import {Box,Text,Button} from "@chakra-ui/react"

const FirstBox = () => {
  return (
    <Box className="firstBox">
        <Box className="heading">
            <Text className="text">ASHWAGANDHA</Text>
        </Box>
        <Box className="heading2" >
            <Text className="text2" noOfLines={[2,3]} >A star performer for stress and energy in a potent, organic caplet.</Text>
            <Button>SHOP NOW</Button>
        </Box>
    </Box>
  )
}

export default FirstBox