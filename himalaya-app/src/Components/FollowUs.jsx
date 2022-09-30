import React from 'react'
import {Box,Text,Image} from '@chakra-ui/react'
import fb from '../Assets/fb.png';
import insta from '../Assets/insta.png'
import "../Styles/FollowUs.css";

const instaImages=["https://scontent.cdninstagram.com/v/t51.2885-15/279060214_1028931348020017_977861928696093797_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=iZsJmRns0WQAX8oanB-&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9AXhgbTawHhlV8E0VAKECGzLw9ssXFBRocEyIyI5DL9A&oe=633C3E87",
      "https://scontent.cdninstagram.com/v/t51.2885-15/277292932_5613162492028340_2851075865814001728_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=41OpGh12CzEAX82mPa8&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9AGTyrCG_J2o01XCnsr2KLe5tM00rlz6EwBezADK-rHg&oe=633C760B",
      "https://scontent.cdninstagram.com/v/t51.2885-15/210602775_2989071524684964_2920882526894167214_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=IfQG8MQ5V7cAX_MkHwJ&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_cTRcl3Q3E3TfZhniaeiCZ3GGwaXgwnR55kJLBsTCQwQ&oe=633C1B45",
       "https://scontent.cdninstagram.com/v/t51.2885-15/279060214_1028931348020017_977861928696093797_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=iZsJmRns0WQAX8oanB-&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9AXhgbTawHhlV8E0VAKECGzLw9ssXFBRocEyIyI5DL9A&oe=633C3E87"
    ]

const FollowUs = () => {
  return (
    <Box style={{display:"flex", flexDirection:"column", gap:"2.5rem", justifyContent:"center", alignItems:"center", marginTop:"8%", marginBottom:"4%"}} >
        <Box style={{width:"89%",display:"flex", justifyContent:"space-between", alignItems:"center"}} >
            <Box><Text fontSize="2.2rem" color="#333333" fontWeight="500" letterSpacing="0.2px" >Follow us @himalayausa</Text></Box>
            <Box style={{display:"flex",alignItems:"center"}}>
                 <Image src={insta} alt="insta" width="40px" />
                 <Image src={fb} alt="facebook" width="40px" />
            </Box>
        </Box>
        <Box style={{display:"grid", gridTemplateColumns:"repeat(4,290px)", gap:"14px", alignItems:"center"}}>
            {
                instaImages.map((item)=>(
                    <Box>
                        <Image className="instaBox" src={item} alt="follow" />
                    </Box>
                ))
            }
        </Box>
    </Box>
  )
}

export default FollowUs