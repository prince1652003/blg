import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import { Button, Textarea, Input, Flex, Text, Image, Heading, Container, Box } from "@chakra-ui/react";




export default function ContactUsPage() {
  return (
    <>
      <Helmet>
        <title>bloggy.dev</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Flex gap="105px" bg="white.A700" w="100%" flexDirection="column" alignItems="center">
        
      
        <Container
          w="100%"
          marginTop={100}
          display="flex"
          flexDirection="row"
          justifyContent="center"
          maxW="1103px"
          px={{ md: "px", base: "20px" }}
        >
          <Flex w="100%" justifyContent="center">
            <Flex w="100%" flexDirection="column" alignItems="center">
              <Heading size="xl" as="h1" color="blue_gray.600">
                Contact us
              </Heading>
              <Text mt="5px">Complete the form to contact us</Text>
              <Flex
                mt="39px"
                gap={{ md: "29px", base: "20px" }}
                w="100%"
                flexDirection={{ md: "row", base: "column" }}
                alignItems="start"
              >
                <Flex gap="19px" w={{ md: "29%", base: "100%" }} flexDirection="column" alignItems="start">
                  <Heading size="xl" color="blue_gray.600">
                    Info
                  </Heading>
                  <Flex gap="18px" w="100%" flexDirection="column" alignItems="start">
                    <Flex gap="10px" alignItems="center">
                      <Image src="images/img_vector_blue_gray_600.svg" h="20px" w="20px" />
                      <Text>+916398331470</Text>
                    </Flex>
                    <Flex ml={{ md: "3px", base: "0px" }} gap="10px" alignItems="center">
                      <Image src="images/img_mail_1.svg" h="20px" w="20px" />
                      <Text>rajprince197119@gmail.com</Text>
                    </Flex>
                    <Flex ml={{ md: "3px", base: "0px" }} gap="9px" alignItems="start">
                      <Image src="images/img_pin_1.svg" h="20px" mt="5px" />
                      <Text w="92%" lineHeight="30px">
                        Noida sector - 63 , Uttar Pradesh - 201301
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  mt={{ md: "8px", base: "0px" }}
                  bg="white.A700"
                  boxShadow="xl"
                  w={{ md: "69%", base: "100%" }}
                  justifyContent="center"
                  p={{ md: "26px", base: "20px" }}
                  borderRadius="10px"
                >
                  <Flex gap="30px" w="100%" flexDirection="column" alignItems="start" my="17px">
                    <Flex gap={{ md: "25px", base: "20px" }} flexDirection={{ md: "row", base: "column" }} w="100%">
                      <Input placeholder="Your Name" type="text" fontWeight={300} w={{ md: "49%", base: "100%" }} />
                      <Input placeholder="Your Email" type="email" fontWeight={300} w={{ md: "49%", base: "100%" }} />
                    </Flex>
                    <Input placeholder="Your Subject" fontWeight={300} w={{ md: "100%", base: "100%" }} />
                    <Textarea
                      placeholder="Description"
                      color="gray.400"
                      fontWeight={300}
                      borderRadius="5px"
                      px={{ md: 0, base: "20px" }}
                      pb="20px"
                    />
                    <Button
                      size="5xl"
                      colorScheme="indigo_900_01"
                      color="white.A700"
                      minW={{ md: "190px", base: "100%" }}
                      borderRadius="5px"
                      px={{ md: 0, base: "20px" }}
                    >
                      Send Message
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Container>
        <Footer
          bg="gray.600_01"
          w="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={{ md: "33px", base: "20px" }}
        />
      </Flex>
    </>
  );
}
