import React from 'react'
import {Box,Container,Input,Button,Text, Breadcrumb,BreadcrumbItem,BreadcrumbLink} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer'

const SignIn = () => {
  return (
    <Box>
      <Navbar/>

      <Breadcrumb padding="10px" bg="#eef2f0" color="#777777" >
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="/signin">SignIn page</BreadcrumbLink>
              </BreadcrumbItem>
     </Breadcrumb>

      <Container marginTop="6%" width="380px" color="#777777" marginBottom="4%">
               <Text textAlign="center" fontSize="38px" color="black" >Already Registered?</Text>
               <Box display="flex" flexDirection="column"  gap="2rem" marginTop="4%" >
                     <Text fontSize="24px" color="black" >Login</Text>
                     <Box>
                      <Box display="flex" justifyContent="space-between" fontSize="16px" >
                           <Text>E-mail*</Text>
                           <Text>*Required Fields</Text>
                      </Box>
                      <Input size="lg" placeholder="Enter E-mail" />
                     </Box>
                     <Box fontSize="16px">
                      <Text>Password*</Text>
                      <Input size="lg" placeholder="Enter Password" />
                     </Box>
                     <Box textAlign="center">
                        <Button width="100%" height="40px" bg="#a3b49b" color="white" >LOGIN</Button>
                     </Box>
                     <Box>
                         <Text fontSize="14px" color="black" >Lost your password?</Text>
                     </Box>
               </Box>

               <Box marginTop="5%">
                     <Text fontSize="24px" color="black" >New Customer</Text>
                     <Text fontSize="19px" marginTop="3%"  >By creating an account with our store, you<br></br>
                         will be able to move through the checkout <br></br>
                         process faster, store multiple shipping <br></br> 
                          addresses, view and track your orders in <br></br>  your account and more.
                     </Text>
                    <Box textAlign="center" marginTop="40px"><Button width="100%" height="40px" bg="#66765f" color="white" >CREATE AN ACCOUNT</Button></Box>
               </Box>
      </Container>

      <Footer/>

    </Box>
  )
}

export default SignIn