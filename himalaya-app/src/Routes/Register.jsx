import React from 'react';
import {Box,Container,Input,Button,Text, Breadcrumb,BreadcrumbItem,BreadcrumbLink} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer'


const Register = () => {
  return (
    <Box>
    <Navbar/>

    <Breadcrumb  padding="10px" bg="#eef2f0" color="#777777">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="/register">Register page</BreadcrumbLink>
              </BreadcrumbItem>
    </Breadcrumb>

    <Container marginTop="6%" width="380px" color="#777777" marginBottom="4%">
             <Text textAlign="center" fontSize="38px" color="black" >Create an Account</Text>
             <Box display="flex" flexDirection="column"  gap="2rem" marginTop="4%" >
                   <Text fontSize="24px" color="black" >Personal Information</Text>
                   <Box>
                      <Box display="flex" justifyContent="space-between" fontSize="16px" >
                         <Text>First Name*</Text>
                         <Text>*Required Fields</Text>
                      </Box>
                      <Input size="lg" placeholder="Enter First Name" />
                   </Box>
                   <Box>
                      <Box display="flex" justifyContent="space-between" fontSize="16px" >
                         <Text>Last Name*</Text>
                      </Box>
                      <Input size="lg" placeholder="Enter Last Name" />
                   </Box>
                   <Box>
                      <Box display="flex" justifyContent="space-between" fontSize="16px" >
                         <Text>E-mail*</Text>
                      </Box>
                      <Input size="lg" placeholder="Enter Email" />
                   </Box>
                   <Box>
                      <Box display="flex" justifyContent="space-between" fontSize="16px" >
                         <Text>Password*</Text>
                      </Box>
                      <Input size="lg" placeholder="Enter Password" />
                   </Box>
                   <Box textAlign="center">
                      <Button width="100%" height="40px" bg="#a3b49b" color="white" >CREATE</Button>
                   </Box>
                   <Box>
                       <Text fontSize="14px" color="black">or Return to Store</Text>
                   </Box>
             </Box>
    </Container>

    <Footer/>

  </Box>
  )
}

export default Register