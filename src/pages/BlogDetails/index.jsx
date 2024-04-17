import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import { Text, Heading, Flex, Image, Box, Button, Container } from "@chakra-ui/react";
import logo from "..//voi.jpg"

export default function BlogDetailsPage() {
  return (
    <>
      <Helmet>
        <title>Bloggy.dev</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Flex bg="white.A700" w="100%" flexDirection="column" alignItems="center">
        <Flex
          bg="white.A700"
          w="100%"
          justifyContent="center"
          alignItems="center"
          p={{ md: "24px", base: "20px" }}
          as="header"
        >
          <Container
            w="100%"
            display="flex"
            flexDirection={{ md: "row", base: "column" }}
            justifyContent="space-between"
            alignItems="center"
            maxW="1114px"
            px={{ md: "0px", sm: "20px" }}
            mx="auto"
            gap="40px"
          >
           
           
          </Container>
        </Flex>
        <Container
          mt="40px"
          gap="150px"
          display="flex"
          w="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
          maxW="1356px"
          px={{ md: "0px", base: "20px" }}
        >
          <Flex w={{ md: "99%", base: "100%" }} flexDirection="column" alignItems="center">
            <Flex gap="46px" w="100%" flexDirection="column" alignItems="center">
              <Flex w="100%" justifyContent="center">
                <Flex w="100%" flexDirection="column" alignItems="center">
                  <Image
                    src="images/img_rectangle_20.png"
                    w={{ md: "100%", base: "100%" }}
                    borderRadius="25px"
                    h="auto"
                  />
                  <Flex
                    mt="-132px"
                    bg="white.A700"
                    boxShadow="lg"
                    w={{ md: "84%", base: "100%" }}
                    flexDirection="column"
                    alignItems="start"
                    justifyContent="center"
                    p={{ md: "48px", base: "20px" }}
                    borderRadius="25px"
                  >
                    <Text
                      size="lg"
                      color="black.900"
                      mt="4px"
                      ml={{ md: "16px", base: "0px" }}
                      fontWeight={300}
                      display="flex"
                    >
                      <Text size="lg" as="span" color="blue_gray.600">
                        Category
                      </Text>
                      <Text size="lg" as="span" color="black.900"></Text>
                      <Text
                        size="lg"
                        as="span"
                        color="pink.300"
                        letterSpacing="0.12px"
                        fontFamily="Merriweather"
                        fontWeight={700}
                      >
                        Writing
                      </Text>
                    </Text>
                    <Heading
                      size="2xl"
                      as="h1"
                      mt="25px"
                      ml={{ md: "16px", base: "0px" }}
                      letterSpacing="0.12px"
                      fontFamily="Merriweather"
                      w="97%"
                      fontStyle="italic"
                    >
                      How to write a book properly and correctly by paying attention to various parts to support the
                      story
                    </Heading>
                    <Flex
                      mt="48px"
                      ml={{ md: "16px", base: "0px" }}
                      w={{ md: "97%", base: "100%" }}
                      flexDirection={{ md: "row", base: "column" }}
                      justifyContent="space-between"
                      alignItems="center"
                      gap="40px"
                    >
                      <Flex gap="14px" w={{ base: "100%", sm: "31%" }} alignItems="center">
                        <Image
                          src={logo}
                          borderRadius="50%"
                          h={{ md: "70px", base: "auto" }}
                          w="70px"
                        />
                        <Flex gap="2px" w="72%" flexDirection="column" alignItems="start">
                          <Heading size="lg" color="blue_gray.600" textAlign="center" fontWeight={600}>
                            By Prince Kumar
                          </Heading>
                          <Text size="xs" textAlign="center">
                            15 april 2024
                          </Text>
                        </Flex>
                      </Flex>
                      <Button
                        size="3xl"
                        colorScheme="white_A700"
                        leftIcon={<Image src="images/img_share_1_1.svg" />}
                        fontWeight={500}
                        gap="10px"
                        borderColor="pink.300"
                        borderWidth="1px"
                        borderStyle="solid"
                        minW="191px"
                        borderRadius="5px"
                        px={{ md: 0, base: "20px" }}
                      >
                        Share Now
                      </Button>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex w={{ md: "74%", base: "100%" }} flexDirection="column" alignItems="start">
                <Text lineHeight="35px">
                  Did you come here for something in particular or just general Riker-bashing? And blowing into maximum
                  warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We
                  know you’re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant
                  Worf. Could someone survive inside a transporter buffer for 75 years? Fate. It protects fools, little
                  children, and ships named “Enterprise.”
                </Text>
                <Flex
                  mt="50px"
                  gap="20px"
                  w={{ md: "97%", base: "100%" }}
                  flexDirection={{ md: "row", base: "column" }}
                  alignItems="start"
                >
                  <Image src="images/img_right_quotation_sign.svg" h="40px" w="40px" />
                  <Flex gap="14px" w={{ md: "94%", base: "100%" }} flexDirection="column" alignItems="start">
                    <Heading size="xl" as="h3" color="blue_gray.600" fontFamily="Merriweather" fontStyle="italic">
                      There is a way out of every box, a solution to every puzzle; it’s just a matter of finding it.
                    </Heading>
                    <Text>JEAN-LUC PICARD</Text>
                  </Flex>
                </Flex>
               
                <Text mt="10px" lineHeight="35px" textAlign={"justify"}>
                Before you start typing away, it's essential to lay a solid foundation for your book. Begin by choosing a genre and topic that resonate with you. Whether it's fiction or non-fiction, selecting a subject you're passionate about will make the writing journey more enjoyable and authentic. Once you've decided on your genre and topic, embark on a research journey. For fiction writers, this might involve studying the setting, time period, and any other elements that will add depth and authenticity to your story. For non-fiction writers, gather relevant information, facts, and data that will enrich your content. With your research in hand, create a detailed outline of your book, mapping out the main plot points, characters, setting, and any subplots. A well-structured outline will serve as a roadmap, guiding you through the writing process.


                </Text>
                
                <Heading size="lg" as="h4" color="blue_gray.600" mt="45px" fontFamily="Merriweather">
                Pre-writing Phase
                </Heading>
                <Text mt="20px" textAlign={"justify"} lineHeight="35px">
                With a solid plan in place, it's time to dive into the writing phase. Start by developing strong and relatable characters. Ensure that your characters are well-rounded with their own motivations, strengths, and flaws. Characters should undergo growth or change throughout the story, contributing to a compelling character arc. Once your characters are in place, focus on crafting a compelling plot. Introduce the main characters, setting, and conflict in the introduction, followed by building tension and developing the plot through a series of events and challenges in the rising action. Reach a turning point at the climax where the main conflict reaches its peak, and then resolve subplots and lead towards the conclusion in the falling action. Finally, resolve the main conflict and provide closure for the story in the conclusion.
                </Text>
                <Flex mt="50px" gap="29px" flexDirection={{ md: "row", base: "column" }}>
                  <Image
                    src="images/img_rectangle_23.png"
                    w={{ md: "49%", base: "100%" }}
                    borderRadius="15px"
                    h="334px"
                  />
                  <Image
                    src="images/img_rectangle_24.png"
                    w={{ md: "49%", base: "100%" }}
                    borderRadius="15px"
                    h="334px"
                  />
                </Flex>
                <Text mt="50px" lineHeight="35px">
                  What’s a knock-out like you doing in a computer-generated gin joint like this? But the probability of
                  making a six is no greater than that of rolling a seven. I guess it’s better to be lucky than good.
                </Text>
                <Text mt="10px" lineHeight="35px">
                  Damage report! I’ve had twelve years to think about it. And if I had it to do over again, I would have
                  grabbed the phaser and pointed it at you instead of them. Some days you get the bear, and some days
                  the bear gets you. Ensign Babyface! I’m afraid I still don’t understand, sir. Mr. Crusher, ready a
                  collision course with the Borg ship. Yesterday I did not know how to eat gagh. You’re going to be an
                  interesting companion.
                </Text>
                <Flex
                  mt="27px"
                  ml={{ md: "30px", base: "20px", sm: "0px" }}
                  gap="14px"
                  w={{ md: "43%", base: "100%" }}
                  flexDirection="column"
                  alignItems="start"
                >
                  <Flex gap="15px" w={{ md: "61%", base: "100%" }} alignItems="start">
                    <Box h="10px" mt="5px" bg="blue_gray.600" w="10px" borderRadius="50%" />
                    <Text>Lorem ipsum dolor sit amet.</Text>
                  </Flex>
                  <Flex gap="15px" w={{ md: "82%", base: "100%" }} alignItems="center">
                    <Box h="10px" bg="blue_gray.600" w="10px" borderRadius="50%" />
                    <Text>At vero eos et accusamus et iusto odio.</Text>
                  </Flex>
                  <Flex
                    gap={{ md: "15px", base: "20px" }}
                    w="100%"
                    flexDirection={{ md: "row", base: "column" }}
                    alignItems="start"
                  >
                    <Box h="10px" mt={{ md: "5px", base: "0px" }} bg="blue_gray.600" w="10px" borderRadius="50%" />
                    <Text>Excepteur sint occaecat cupidatat non proident.</Text>
                  </Flex>
                </Flex>
                <Text mt="26px" lineHeight="35px">
                  Could someone survive inside a transporter buffer for 75 years? Fate. It protects fools, little
                  children, and ships named “Enterprise.”
                </Text>
                <Text size="lg" mt="51px" fontWeight={500}>
                  Tags
                </Text>
                <Flex mt="12px" gap={{ md: "15px", base: "20px" }} flexDirection={{ md: "row", base: "column" }}>
                  <Button size="md" colorScheme="gray_200" fontWeight={200} minW="96px" borderRadius="5px">
                    Writing
                  </Button>
                  <Button size="md" colorScheme="gray_200" fontWeight={200} minW="97px" borderRadius="5px">
                    Tutorial
                  </Button>
                  <Button size="md" colorScheme="gray_200" fontWeight={200} minW="93px" borderRadius="5px">
                    How to
                  </Button>
                  <Button size="md" colorScheme="gray_200" fontWeight={200} minW="77px" borderRadius="5px">
                    Book
                  </Button>
                  <Button size="md" colorScheme="gray_200" fontWeight={200} minW="77px" borderRadius="5px">
                    2020
                  </Button>
                </Flex>
                <Flex mt="57px" ml={{ md: "153px", base: "20px" }} w={{ md: "64%", base: "100%" }}>
                  <Flex gap="30px" w="100%" flexDirection="column" alignItems="end">
                    <Box h="163px" w="100%" position="relative">
                      <Image
                        src="images/img_right_quotation_sign_blue_50_01.svg"
                        h="103px"
                        w="103px"
                        position="absolute"
                        left="0px"
                        top="0px"
                        m="auto"
                      />
                      <Text
                        size="lg"
                        textAlign="center"
                        fontWeight={300}
                        w="92%"
                        lineHeight="40px"
                        position="absolute"
                        bottom="0px"
                        right="0px"
                        m="auto"
                      >
                        Increase your knowledge by reading new things and I will share whatever I know for you, as long
                        as I enjoy it
                      </Text>
                    </Box>
                    <Flex
                      mr={{ md: "168px", base: "20px" }}
                      gap={{ md: "15px", base: "20px" }}
                      w={{ md: "38%", base: "100%" }}
                      flexDirection={{ md: "row", base: "column" }}
                      alignItems="center"
                    >
                      <Flex h="60px" w="60px" flexDirection="column" alignItems="center">
                        <Image
                          src={logo}
                          borderRadius="50%"
                          h={{ md: "60px", base: "auto" }}
                          w="60px"
                        />
                      </Flex>
                      <Flex gap="3px" w={{ md: "68%", base: "100%" }} flexDirection="column" alignItems="start">
                        <Heading as="h5" color="blue_gray.600" textAlign="center" fontWeight={600}>
                          By Prince Kumar
                        </Heading>
                        <Text size="xs" textAlign="center">
                          Podcaster & Blogger
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex gap="27px" w="100%" flexDirection={{ md: "row", base: "column" }}>
            <Box h="273px" w={{ md: "32%", base: "100%" }} position="relative">
              <Image
                src="images/img_rectangle_25.png"
                h="273px"
                w={{ md: "100%", base: "100%" }}
                position="absolute"
                left="0px"
                bottom="0px"
                right="0px"
                top="0px"
                justifyContent="center"
                m="auto"
                borderRadius="5px"
              />
              <Flex
                gap="23px"
                w="73%"
                flexDirection="column"
                alignItems="start"
                position="absolute"
                bottom="11%"
                left="6%"
                m="auto"
              >
                <Heading
                  size="lg"
                  color="white.A700"
                  ml={{ md: "1px", base: "0px" }}
                  fontFamily="Merriweather"
                  fontStyle="italic"
                >
                  The Advive Young People need to Hear
                </Heading>
                <Text color="white.A700">12 minutes ago</Text>
              </Flex>
            </Box>
            <Box h="273px" w={{ md: "32%", base: "100%" }} position="relative">
              <Image
                src="images/img_rectangle_26.png"
                h="273px"
                w={{ md: "100%", base: "100%" }}
                position="absolute"
                left="0px"
                bottom="0px"
                right="0px"
                top="0px"
                justifyContent="center"
                m="auto"
                borderRadius="5px"
              />
              <Flex
                gap="23px"
                w="73%"
                flexDirection="column"
                alignItems="start"
                position="absolute"
                bottom="11%"
                left="6%"
                m="auto"
              >
                <Heading size="lg" as="h3" color="white.A700" fontFamily="Merriweather" fontStyle="italic">
                Think Fast,Talk Smart : Communication Techniques
                </Heading>
                <Text color="white.A700">55 minutes ago</Text>
              </Flex>
            </Box>
            <Box h="273px" w={{ md: "32%", base: "100%" }} position="relative">
              <Image
                src="images/img_rectangle_26_273x433.png"
                h="273px"
                w={{ md: "100%", base: "100%" }}
                position="absolute"
                left="0px"
                bottom="0px"
                right="0px"
                top="0px"
                justifyContent="center"
                m="auto"
                borderRadius="5px"
              />
              <Flex
                gap="23px"
                w="73%"
                flexDirection="column"
                alignItems="start"
                position="absolute"
                bottom="11%"
                left="6%"
                m="auto"
              >
                <Heading size="lg" as="h4" color="white.A700" fontFamily="Merriweather" fontStyle="italic">
                  I Wish I Learned This When I was Younger
                </Heading>
                <Text color="white.A700">1 day ago</Text>
              </Flex>
            </Box>
          </Flex>
        </Container>
        <Footer
          mt="100px"
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
