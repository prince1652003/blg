import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import { Text, Heading, Flex, IconButton, Image, Box, SimpleGrid, Container, Button } from "@chakra-ui/react";
import logo from "..//voi.jpg"

export default function BloggerDetailsPage() {
  return (
    <>
      <Helmet>
        <title>Bloggy.dev</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Flex bg="white.A700" w="100%" flexDirection="column" alignItems="center">
        
        <Flex mt="40px" gap="97px" w="100%" flexDirection="column" alignItems="center">
          <Flex w="100%" justifyContent="center">
            <Flex w="100%" flexDirection="column" alignItems="center">
              <Flex bg="gray.600_01" w="100%" justifyContent="center">
                <Box h="525px" w="100%" position="relative">
                  <Image
                    src="images/img_mask_group.svg"
                    h="525px"
                    position="absolute"
                    left="0px"
                    bottom="0px"
                    right="0px"
                    top="0px"
                    justifyContent="center"
                    m="auto"
                  />
                  <Flex
                    w="78%"
                    flexDirection={{ md: "row", base: "column" }}
                    justifyContent="space-between"
                    alignItems="center"
                    position="absolute"
                    top="11%"
                    right="0px"
                    left="0px"
                    m="auto"
                    gap="40px"
                  >
                    <Flex gap="25px" w={{ md: "58%", base: "100%" }} flexDirection="column" alignItems="start">
                      <Flex>
                        <Button size="sm" colorScheme="white_A700_3f" fontWeight={300} w="100%" borderRadius="5px">
                          Writer
                        </Button>
                      </Flex>
                      <Heading
                        fontSize={40}
                        as="h1"
                        color="white.A700"
                        letterSpacing="0.12px"
                        fontFamily="Merriweather"
                        fontStyle="italic"
                        className="h"
                      >
                        Eps 3 : How to write a book properly and correctly by paying attention to various parts to
                        support the story
                      </Heading>
                      <Flex gap="14px" w={{ md: "37%", base: "100%" }} alignItems="center">
                        <Flex h="60px" w="60px" flexDirection="column" alignItems="center">
                          <Image
                            src={logo}
                            borderRadius="50%"
                            h={{ md: "60px", base: "auto" }}
                            w="60px"
                          />
                        </Flex>
                        <Flex gap="3px" w="69%" flexDirection="column" alignItems="start">
                          <Heading color="white.A700" letterSpacing="0.12px" textAlign="center" fontWeight={600}>
                            By Prince Kumar
                          </Heading>
                          <Text size="xs" color="white.A700" textAlign="center">
                            Podcaster & Blogger
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                    <Flex
                      bg="white.A700_3f"
                      w={{ md: "32%", base: "100%" }}
                      justifyContent="center"
                      p={{ md: "32px", base: "20px" }}
                      borderRadius="5px"
                    >
                      <Flex gap="24px" w="100%" flexDirection="column" alignItems="center" my="11px">
                        <Heading size="lg" as="h3" color="white.A700" letterSpacing="0.12px" fontWeight={600}>
                          Find and make it easy for yourself in listening to our podcasts on
                        </Heading>
                        <Flex w="100%" justifyContent="space-between">
                          <Image src="images/img_iconfinder_anch.svg" h="50px" w="50px" />
                          <Image src="images/img_soundcloud_1.svg" h="50px" w="50px" />
                          <Image src="images/img_spotify_1.svg" h="50px" w="50px" />
                          <Image src="images/img_podcast_1_1.svg" h="50px" w="50px" />
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
              <Container
                mt="-106px"
                bg="white.A700"
                boxShadow="2xl"
                w="100%"
                display="flex"
                flexDirection="row"
                justifyContent="center"
                maxW="920px"
                p={{ md: "21px", base: "20px" }}
                borderRadius="5px"
                px={{ sm: "20px" }}
              >
                <Flex
                  mt="8px"
                  ml="5px"
                  gap={{ md: "22px", base: "20px" }}
                  w="100%"
                  flexDirection={{ md: "row", base: "column" }}
                  alignItems="center"
                >
                  <Image
                    src="images/img_rectangle_39.png"
                    w={{ md: "24%", base: "100%" }}
                    borderRadius="5px"
                    h="215px"
                  />
                  <Flex w={{ md: "74%", base: "100%" }} flexDirection="column" alignItems="start">
                    <Flex w="100%" justifyContent="space-between" alignItems="center">
                      <Button size="xs" colorScheme="gray_200" fontWeight={300} minW="74px" borderRadius="5px">
                        Writer
                      </Button>
                      <Text size="xs">2 April, 2024 </Text>
                    </Flex>
                    <Heading
                      as="h4"
                      color="gray.900"
                      mt="20px"
                      letterSpacing="0.12px"
                      fontFamily="Merriweather"
                      fontStyle="italic"
                    >
                      Eps 3 : How to write a book properly and correctly by paying attention to various parts to support
                      the story
                    </Heading>
                    <Text size="xs" mt="10px" lineHeight="25px">
                      Did you come here for something in particular or just general Riker-bashing? And blowing into
                      maximum warp speed, you appeared for an instant to be in two places at once. We have a sabot...
                    </Text>
                    <Flex mt="10px" gap="20px" alignItems="center">
                      <Button
                        size="lg"
                        colorScheme="indigo_900_01"
                        leftIcon={<Image src="images/img_play.svg" />}
                        color="white.A700"
                        fontWeight={300}
                        gap="10px"
                        minW="132px"
                        borderRadius="5px"
                      >
                        Play Now
                      </Button>
                      <Text size="xs">Go to Spotify Now</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Container>
            </Flex>
          </Flex>
          <Container
            w="100%"
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="flex-start"
            maxW="1106px"
            px={{ md: "0px", base: "20px" }}
          >
            <Flex
              gap={{ md: "18px", base: "20px" }}
              w={{ md: "40%", base: "100%" }}
              flexDirection={{ md: "row", base: "column" }}
              alignItems="center"
            >
              <IconButton
                size="7xl"
                colorScheme="gray_300_01"
                icon={<Image src="images/img_podcast_1.svg" />}
                aria-label="177:1649-podcastone_one"
                w="76px"
                borderRadius="50%"
              />
              <Flex gap="8px" w={{ md: "79%", base: "100%" }} flexDirection="column" alignItems="start">
                <Heading
                  size="xl"
                  ml={{ md: "2px", base: "0px" }}
                  fontFamily="Merriweather"
                  textAlign="center"
                  fontWeight={900}
                >
                  Latest Podcasts{" "}
                </Heading>
                <Text size="lg" letterSpacing="0.12px" textAlign="center">
                  Get started on latest episodes
                </Text>
              </Flex>
            </Flex>
            <SimpleGrid mt="17px" w="100%" gap={{ md: "22px", base: "20px" }} columns={{ md: 4, base: 1, sm: 2 }}>
              <Flex
                gap="15px"
                bg="white.A700"
                boxShadow="md"
                w="100%"
                flexDirection="column"
                alignItems="center"
                p="13px"
                borderRadius="5px"
              >
                <Box h="207px" w="100%" position="relative">
                  <Image
                    src="images/img_rectangle_9_3.png"
                    h="207px"
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
                  <IconButton
                    icon={<Image src="images/img_play.svg" />}
                    aria-label="177:1487-iconbutton"
                    w="72px"
                    position="absolute"
                    left="0px"
                    bottom="0px"
                    right="0px"
                    top="0px"
                    m="auto"
                    borderRadius="50%"
                  />
                </Box>
                <Flex mb="10px" gap="10px" w="100%" flexDirection="column" alignItems="start">
                  <Heading size="s" as="h3" fontFamily="Merriweather">
                    The secrets of writing a good book
                  </Heading>
                  <Text size="xs">By Prince Kumar</Text>
                </Flex>
              </Flex>
              <Flex
                gap="15px"
                bg="white.A700"
                boxShadow="md"
                w="100%"
                flexDirection="column"
                alignItems="center"
                p="13px"
                borderRadius="5px"
              >
                <Box h="207px" w="100%" position="relative">
                  <Image
                    src="images/img_rectangle_9_4.png"
                    h="207px"
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
                  <IconButton
                    icon={<Image src="images/img_play.svg" />}
                    aria-label="177:1472-iconbutton"
                    w="72px"
                    position="absolute"
                    left="0px"
                    bottom="0px"
                    right="0px"
                    top="0px"
                    m="auto"
                    borderRadius="50%"
                  />
                </Box>
                <Flex mb="10px" gap="10px" w="100%" flexDirection="column" alignItems="start">
                  <Heading size="s" as="h4" fontFamily="Merriweather">
                    The secrets of writing a good book
                  </Heading>
                  <Text size="xs">By Prince Kumar</Text>
                </Flex>
              </Flex>
              <Flex
                gap="15px"
                bg="white.A700"
                boxShadow="md"
                w="100%"
                flexDirection="column"
                alignItems="center"
                p="13px"
                borderRadius="5px"
              >
                <Box h="207px" w="100%" position="relative">
                  <Image
                    src="images/img_rectangle_9_5.png"
                    h="207px"
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
                  <IconButton
                    icon={<Image src="images/img_play.svg" />}
                    aria-label="177:1517-iconbutton"
                    w="72px"
                    position="absolute"
                    left="0px"
                    bottom="0px"
                    right="0px"
                    top="0px"
                    m="auto"
                    borderRadius="50%"
                  />
                </Box>
                <Flex mb="10px" gap="10px" w="100%" flexDirection="column" alignItems="start">
                  <Heading size="s" as="h5" fontFamily="Merriweather">
                    The secrets of writing a good book
                  </Heading>
                  <Text size="xs">By Prince Kumar</Text>
                </Flex>
              </Flex>
              <Flex
                gap="15px"
                bg="white.A700"
                boxShadow="md"
                w="100%"
                flexDirection="column"
                alignItems="center"
                p="13px"
                borderRadius="5px"
              >
                <Box h="207px" w="100%" position="relative">
                  <Image
                    src="images/img_rectangle_9_6.png"
                    h="207px"
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
                  <IconButton
                    icon={<Image src="images/img_play.svg" />}
                    aria-label="177:1502-iconbutton"
                    w="72px"
                    position="absolute"
                    left="0px"
                    bottom="0px"
                    right="0px"
                    top="0px"
                    m="auto"
                    borderRadius="50%"
                  />
                </Box>
                <Flex mb="10px" gap="10px" w="100%" flexDirection="column" alignItems="start">
                  <Heading size="s" as="h6" fontFamily="Merriweather">
                    The secrets of writing a good book
                  </Heading>
                  <Text size="xs">By Prince Kumar</Text>
                </Flex>
              </Flex>
              <Flex
                gap="15px"
                bg="white.A700"
                boxShadow="md"
                w="100%"
                flexDirection="column"
                alignItems="center"
                p="13px"
                borderRadius="5px"
              >
                <Box h="207px" w="100%" position="relative">
                  <Image
                    src="images/img_rectangle_9_7.png"
                    h="207px"
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
                  <IconButton
                    icon={<Image src="images/img_play.svg" />}
                    aria-label="177:1547-iconbutton"
                    w="72px"
                    position="absolute"
                    left="0px"
                    bottom="0px"
                    right="0px"
                    top="0px"
                    m="auto"
                    borderRadius="50%"
                  />
                </Box>
                <Flex mb="10px" gap="10px" w="100%" flexDirection="column" alignItems="start">
                  <Heading size="s" as="h6" fontFamily="Merriweather">
                    The secrets of writing a good book
                  </Heading>
                  <Text size="xs">By Prince Kumar</Text>
                </Flex>
              </Flex>
              <Flex
                gap="15px"
                bg="white.A700"
                boxShadow="md"
                w="100%"
                flexDirection="column"
                alignItems="center"
                p="13px"
                borderRadius="5px"
              >
                <Box h="207px" w="100%" position="relative">
                  <Image
                    src="images/img_rectangle_9_8.png"
                    h="207px"
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
                  <IconButton
                    icon={<Image src="images/img_play.svg" />}
                    aria-label="177:1532-iconbutton"
                    w="72px"
                    position="absolute"
                    left="0px"
                    bottom="0px"
                    right="0px"
                    top="0px"
                    m="auto"
                    borderRadius="50%"
                  />
                </Box>
                <Flex mb="10px" gap="10px" w="100%" flexDirection="column" alignItems="start">
                  <Heading size="s" as="h6" fontFamily="Merriweather">
                    The secrets of writing a good book
                  </Heading>
                  <Text size="xs">By Prince Kumar</Text>
                </Flex>
              </Flex>
              <Flex
                gap="15px"
                bg="white.A700"
                boxShadow="md"
                w="100%"
                flexDirection="column"
                alignItems="center"
                p="13px"
                borderRadius="5px"
              >
                <Box h="207px" w="100%" position="relative">
                  <Image
                    src="images/img_rectangle_9_9.png"
                    h="207px"
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
                  <IconButton
                    icon={<Image src="images/img_play.svg" />}
                    aria-label="177:1577-iconbutton"
                    w="72px"
                    position="absolute"
                    left="0px"
                    bottom="0px"
                    right="0px"
                    top="0px"
                    m="auto"
                    borderRadius="50%"
                  />
                </Box>
                <Flex mb="10px" gap="10px" w="100%" flexDirection="column" alignItems="start">
                  <Heading size="s" as="h6" fontFamily="Merriweather">
                    The secrets of writing a good book
                  </Heading>
                  <Text size="xs">By Prince Kumar</Text>
                </Flex>
              </Flex>
              <Flex
                gap="15px"
                bg="white.A700"
                boxShadow="md"
                w="100%"
                flexDirection="column"
                alignItems="center"
                p="13px"
                borderRadius="5px"
              >
                <Box h="207px" w="100%" position="relative">
                  <Image
                    src="images/img_rectangle_9_10.png"
                    h="207px"
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
                  <IconButton
                    icon={<Image src="images/img_play.svg" />}
                    aria-label="177:1562-iconbutton"
                    w="72px"
                    position="absolute"
                    left="0px"
                    bottom="0px"
                    right="0px"
                    top="0px"
                    m="auto"
                    borderRadius="50%"
                  />
                </Box>
                <Flex mb="10px" gap="10px" w="100%" flexDirection="column" alignItems="start">
                  <Heading size="s" as="h6" fontFamily="Merriweather">
                    The secrets of writing a good book
                  </Heading>
                  <Text size="xs">By Prince Kumar</Text>
                </Flex>
              </Flex>
              <Flex
                gap="15px"
                bg="white.A700"
                boxShadow="md"
                w="100%"
                flexDirection="column"
                alignItems="center"
                p="13px"
                borderRadius="5px"
              >
                <Box h="207px" w="100%" position="relative">
                  <Image
                    src="images/img_rectangle_9_11.png"
                    h="207px"
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
                  <IconButton
                    icon={<Image src="images/img_play.svg" />}
                    aria-label="177:1607-iconbutton"
                    w="72px"
                    position="absolute"
                    left="0px"
                    bottom="0px"
                    right="0px"
                    top="0px"
                    m="auto"
                    borderRadius="50%"
                  />
                </Box>
                <Flex mb="10px" gap="10px" w="100%" flexDirection="column" alignItems="start">
                  <Heading size="s" as="h6" fontFamily="Merriweather">
                    The secrets of writing a good book
                  </Heading>
                  <Text size="xs">By Prince Kumar</Text>
                </Flex>
              </Flex>
              <Flex
                gap="15px"
                bg="white.A700"
                boxShadow="md"
                w="100%"
                flexDirection="column"
                alignItems="center"
                p="13px"
                borderRadius="5px"
              >
                <Box h="207px" w="100%" position="relative">
                  <Image
                    src="images/img_rectangle_9_12.png"
                    h="207px"
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
                  <IconButton
                    icon={<Image src="images/img_play.svg" />}
                    aria-label="177:1592-iconbutton"
                    w="72px"
                    position="absolute"
                    left="0px"
                    bottom="0px"
                    right="0px"
                    top="0px"
                    m="auto"
                    borderRadius="50%"
                  />
                </Box>
                <Flex mb="10px" gap="10px" w="100%" flexDirection="column" alignItems="start">
                  <Heading size="s" as="h6" fontFamily="Merriweather">
                    The secrets of writing a good book
                  </Heading>
                  <Text size="xs">By Prince Kumar</Text>
                </Flex>
              </Flex>
              <Flex
                gap="15px"
                bg="white.A700"
                boxShadow="md"
                w="100%"
                flexDirection="column"
                alignItems="center"
                p="13px"
                borderRadius="5px"
              >
                <Box h="207px" w="100%" position="relative">
                  <Image
                    src="images/img_rectangle_9_4.png"
                    h="207px"
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
                  <IconButton
                    icon={<Image src="images/img_play.svg" />}
                    aria-label="177:1637-iconbutton"
                    w="72px"
                    position="absolute"
                    left="0px"
                    bottom="0px"
                    right="0px"
                    top="0px"
                    m="auto"
                    borderRadius="50%"
                  />
                </Box>
                <Flex mb="10px" gap="10px" w="100%" flexDirection="column" alignItems="start">
                  <Heading size="s" as="h6" fontFamily="Merriweather">
                    The secrets of writing a good book
                  </Heading>
                  <Text size="xs">By Prince Kumar</Text>
                </Flex>
              </Flex>
              <Flex
                gap="15px"
                bg="white.A700"
                boxShadow="md"
                w="100%"
                flexDirection="column"
                alignItems="center"
                p="13px"
                borderRadius="5px"
              >
                <Box h="207px" w="100%" position="relative">
                  <Image
                    src="images/img_rectangle_9_13.png"
                    h="207px"
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
                  <IconButton
                    icon={<Image src="images/img_play.svg" />}
                    aria-label="177:1622-iconbutton"
                    w="72px"
                    position="absolute"
                    left="0px"
                    bottom="0px"
                    right="0px"
                    top="0px"
                    m="auto"
                    borderRadius="50%"
                  />
                </Box>
                <Flex mb="10px" gap="10px" w="100%" flexDirection="column" alignItems="start">
                  <Heading size="s" as="h6" fontFamily="Merriweather">
                    The secrets of writing a good book
                  </Heading>
                  <Text size="xs">By Prince Kumar</Text>
                </Flex>
              </Flex>
            </SimpleGrid>
       </Container>
        </Flex>
        <Footer
          mt="97px"
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
