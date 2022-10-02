import React,{useEffect,useState,useContext} from 'react';
import {AppContext} from '../Context/AppContext';
import {Box,Container,Image,Flex,Button,Text, Breadcrumb,BreadcrumbItem,BreadcrumbLink, Accordion, AccordionItem, AccordionButton,AccordionIcon,AccordionPanel} from "@chakra-ui/react";
import axios from 'axios';
import cart from "../Assets/cart.png"
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';



const Supplement = () => {
    const [state,dispatch] = useContext(AppContext)
    const [data,setData] = useState([])

     useEffect(()=>{
        dispatch({
            type: "GET_PRODUCTS_REQUEST"
          });
          axios(
            `https://himalaya-restful-api.herokuapp.com/supplements`
          )
            .then((res) => {
              setData(res.data);
              dispatch({
                type: "GET_PRODUCTS_SUCCESS",
                payload: {
                  data: res.data
                }
              });
            })
            .catch((err) => {
              dispatch({
                type: "GET_PRODUCTS_FAILURE"
              });
            });
     },[dispatch])

  return (
    <Box>

        <Navbar/>

        <Breadcrumb padding="10px" bg="#eef2f0" color="#777777" >
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="/signin">Supplements</BreadcrumbLink>
              </BreadcrumbItem>
        </Breadcrumb>

        <Text fontSize="40px" textAlign="center" >Herbal Supplements</Text>

        {/* ------------ */}

<Flex gap="20px" justifyContent="center" marginTop="6%" marginBottom="6%">

        <Box width="18%" >
        <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontSize="18px">
            Health Interests
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontSize="16px" color="#777777" > Blood Sugar</AccordionPanel>
    <AccordionPanel pb={4} fontSize="16px" color="#777777"> Digestion</AccordionPanel>
    <AccordionPanel pb={4} fontSize="16px" color="#777777"> Brain & Cognitive </AccordionPanel>
    <AccordionPanel pb={4} fontSize="16px" color="#777777"> Enery & Vitality</AccordionPanel>
    <AccordionPanel pb={4} fontSize="16px" color="#777777"> Hair,Skins & Nails</AccordionPanel>
    <AccordionPanel pb={4} fontSize="16px" color="#777777"> Heart & Cardio </AccordionPanel>
    <AccordionPanel pb={4} fontSize="16px" color="#777777"> Respiratory </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontSize="18px">
            Product Form
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontSize="16px" color="#777777"> All </AccordionPanel>
    <AccordionPanel pb={4} fontSize="16px" color="#777777"> Capsules</AccordionPanel>
    <AccordionPanel pb={4} fontSize="16px" color="#777777"> Caplets </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontSize="18px">
            Herbs
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontSize="16px" color="#777777"> Amla </AccordionPanel>
    <AccordionPanel pb={4} fontSize="16px" color="#777777"> Arjuna</AccordionPanel>
    <AccordionPanel pb={4} fontSize="16px" color="#777777"> Ashwagandha </AccordionPanel>
    <AccordionPanel pb={4} fontSize="16px" color="#777777"> Garlic </AccordionPanel>
    <AccordionPanel pb={4} fontSize="16px" color="#777777"> Ginger</AccordionPanel>
    <AccordionPanel pb={4} fontSize="16px" color="#777777"> Guduchi </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontSize="18px">
            Attributes
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontSize="16px" color="#777777"> Organic </AccordionPanel>
    <AccordionPanel pb={4} fontSize="16px" color="#777777"> Non-GMO</AccordionPanel>
    <AccordionPanel pb={4} fontSize="16px" color="#777777"> Vegan </AccordionPanel>
  </AccordionItem>
  
</Accordion>
        </Box>

        {/* -------------- */}

        <Box style={{display:"grid", gridTemplateColumns:"repeat(4,200px)", gap:"1rem"}} >
        {
            data.map((item)=>(
               
                     <Box key={item.id+"77"} className="sellerBox" >
                        <Image src={item.image} alt="sellers" width="170px" />
                        <Text fontSize="18px" color="#333333">{item.title}</Text>
                        <Flex alignItems="center" gap="4px">
                            <Text fontSize="18px" color="#66765f">{item.price}</Text>
                            <Button><span><Image src={cart} alt="cart" width="20px" /></span>Add to Cart</Button>
                        </Flex>
                    </Box>
               
            ))
        }
        </Box>
</Flex>

        <Footer/>
    </Box>
  )
}

export default Supplement