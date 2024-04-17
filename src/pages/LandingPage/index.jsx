import React from "react";
import { Helmet } from "react-helmet";
import {
  Text,
  Image,
  Flex,
  Heading,
  IconButton,
  Button,
  Input,
  VStack,
  Divider,
  Box,
  Link,
  Container,
} from "@chakra-ui/react";

import logo from "..//voi.jpg";
import { useDisclosure } from "@chakra-ui/react";

export default function LandingPagePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleToggleReadMore = () => {
    isOpen ? onClose() : onOpen();
  };
  const handleClick = () => {
    const halfPageHeight = window.innerHeight / 2;
    window.scrollTo({
      top: halfPageHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Helmet>
        <title>Bloggy.dev</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <Flex
        gap="95px"
        bg="white.A700"
        w="100%"
        flexDirection="column"
        alignItems="center"
      >
        <Flex
          flexDirection={{ md: "row", base: "column" }}
          bg="white.A700"
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          p={{ md: "24px", base: "20px" }}
          gap="40px"
          as="header"
        >
          
        </Flex>
        <Container
          gap="159px"
          display="flex"
          w="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
          maxW="1111px"
          px={{ md: "0px", base: "20px" }}
        >
          <Flex w={{ md: "93%", base: "100%" }} justifyContent="center">
            <Flex w="100%" flexDirection="column" alignItems="center">
              <Flex
                gap={{ md: "43px", base: "20px" }}
                w="100%"
                flexDirection={{ md: "row", base: "column" }}
                alignItems="start"
              >
                <Image
                  src="images/img_brand_1.svg"
                  h="61px"
                  mt={{ md: "66px", base: "0px" }}
                  w="61px"
                />
                <Flex
                  mb="36px"
                  gap="30px"
                  w={{ md: "80%", base: "100%" }}
                  flexDirection="column"
                  alignItems="center"
                >
                  <Heading
                    size="3xl"
                    as="h1"
                    fontFamily="Merriweather"
                    textAlign="center"
                  >
                    Share via writing and podcasts, hope you enjoy
                  </Heading>
                  <Text
                    size="lg"
                    color="gray.600"
                    textAlign="center"
                    w="78%"
                    lineHeight="35px"
                  >
                    Increase your knowledge by reading new things and I will
                    share whatever I know for you, as long as I enjoy it
                  </Text>
                </Flex>
                <Image
                  src="images/img_blog_1.svg"
                  h="61px"
                  mt={{ md: "205px", base: "0px" }}
                  w="61px"
                />
              </Flex>
              <Flex
                mt="-4px"
                gap={{ md: "25px", base: "20px" }}
                w={{ md: "51%", base: "100%" }}
                flexDirection={{ md: "row", base: "column" }}
              >
                <Button
                  size="4xl"
                  colorScheme="indigo_900_01"
                  color="white.A700"
                  letterSpacing="0.12px"
                  boxShadow="sm"
                  minW="221px"
                  borderRadius="35px"
                  px={{ md: 0, base: "20px" }}
                  onClick={handleClick}
                >
                  Read More
                </Button>

                <Button
                  size="4xl"
                  variant="outline"
                  colorScheme="indigo_200"
                  letterSpacing="0.12px"
                  minW="221px"
                  borderRadius="35px"
                  px={{ md: 0, base: "20px" }}
                >
                  <a href="bloggerdetails" className="ho">
                    Listen to Podcasts
                  </a>
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex gap="100px" w="100%" flexDirection="column" alignItems="center">
            <Flex
              gap="17px"
              w="100%"
              flexDirection="column"
              alignItems="center"
            >
              <Flex
                w="100%"
                flexDirection={{ md: "row", base: "column" }}
                justifyContent="space-between"
                alignItems="center"
                gap="40px"
              >
                <Flex
                  gap={{ md: "18px", base: "20px" }}
                  w={{ base: "100%", sm: "39%" }}
                  flexDirection={{ md: "row", base: "column" }}
                  alignItems="center"
                >
                  <IconButton
                    size="7xl"
                    colorScheme="gray_300"
                    icon={<Image src="images/img_podcast_1.svg" />}
                    aria-label="177:1149-podcastone_one"
                    w="76px"
                    borderRadius="50%"
                  />
                  <Flex
                    gap="8px"
                    w={{ md: "79%", base: "100%" }}
                    flexDirection="column"
                    alignItems="start"
                  >
                    <Heading
                      size="xl"
                      ml={{ md: "2px", base: "0px" }}
                      fontFamily="Merriweather"
                      textAlign="center"
                      fontWeight={900}
                    >
                      Latest Podcasts{" "}
                    </Heading>
                    <Text
                      size="lg"
                      color="gray.600"
                      letterSpacing="0.12px"
                      textAlign="center"
                    >
                      Get started on latest episodes
                    </Text>
                  </Flex>
                </Flex>
                <a href="#" className="ho">
                  <Heading
                    size="xs"
                    as="h3"
                    color="indigo.900"
                    letterSpacing="0.12px"
                    onClick={handleClick}
                  >
                    See all podcasts
                  </Heading>
                </a>
              </Flex>
              <Flex
                gap="22px"
                w="100%"
                flexDirection={{ md: "row", base: "column" }}
              >
                <Flex
                  gap="15px"
                  bg="white.A700"
                  boxShadow="md"
                  w={{ md: "24%", base: "100%" }}
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  p="13px"
                  borderRadius="5px"
                >
                  <Box h="207px" mt="7px" w="100%" position="relative">
                    <Image
                      src="images/img_rectangle_9.png"
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
                    <a
                      href="https://youtu.be/NcaQUH2K-wo?si=QQFPIwGD4x5VLZWz"
                      className="ho"
                    >
                      <IconButton
                        colorScheme="gray_600_01"
                        icon={<Image src="images/img_play.svg" />}
                        aria-label="178:2049-play_one"
                        w="72px"
                        position="absolute"
                        top="30%"
                        right="0px"
                        left="0px"
                        m="auto"
                        borderRadius="50%"
                      />
                    </a>
                  </Box>
                  <Flex
                    mb="5px"
                    gap="10px"
                    w="100%"
                    flexDirection="column"
                    alignItems="start"
                  >
                    <Heading size="s" as="h4" fontFamily="Merriweather">
                      The Advive Young People need to Hear
                    </Heading>
                    <Text size="xs">By Simon Sinek</Text>
                  </Flex>
                </Flex>
                <Flex
                  gap="15px"
                  bg="white.A700"
                  boxShadow="md"
                  w={{ md: "28%", base: "100%" }}
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  p="13px"
                  borderRadius="5px"
                >
                  <Box h="207px" mt="7px" w="100%" position="relative">
                    <Image
                      src="images/img_rectangle_9_207x233.png"
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
                    <a
                      href="https://youtu.be/HAnw168huqA?si=OcN6aq3YzsLKZZ_-"
                      className="ho"
                    >
                      <IconButton
                        colorScheme="gray_600_01"
                        icon={<Image src="images/img_play.svg" />}
                        aria-label="178:2079-play_one"
                        w="72px"
                        position="absolute"
                        top="30%"
                        right="0px"
                        left="0px"
                        m="auto"
                        borderRadius="50%"
                      />
                    </a>
                  </Box>
                  <Flex
                    mb="5px"
                    gap="10px"
                    w="100%"
                    flexDirection="column"
                    alignItems="start"
                  >
                    <Heading size="s" as="h5" fontFamily="Merriweather">
                      Think Fast,Talk Smart : Communication Techniques
                    </Heading>
                    <Text size="xs">By Staford School of Business</Text>
                  </Flex>
                </Flex>
                <Flex
                  gap="15px"
                  bg="white.A700"
                  boxShadow="md"
                  w={{ md: "24%", base: "100%" }}
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  p="13px"
                  borderRadius="5px"
                >
                  <Box h="207px" mt="7px" w="100%" position="relative">
                    <Image
                      src="images/img_rectangle_9_1.png"
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
                    <a
                      href="https://youtu.be/wqEsTPaUZF0?si=vi1E1EZYBvfTBqo-"
                      className="ho"
                    >
                      <IconButton
                        colorScheme="gray_600_01"
                        icon={<Image src="images/img_play.svg" />}
                        aria-label="178:2064-play_one"
                        w="72px"
                        position="absolute"
                        top="30%"
                        right="0px"
                        left="0px"
                        m="auto"
                        borderRadius="50%"
                      />
                    </a>
                  </Box>
                  <Flex
                    mb="5px"
                    gap="10px"
                    w="100%"
                    flexDirection="column"
                    alignItems="start"
                  >
                    <Heading size="s" as="h6" fontFamily="Merriweather">
                      I Wish I Learned This When I was Younger
                    </Heading>
                    <Text size="xs">By Jordan Peterson</Text>
                  </Flex>
                </Flex>
                <Flex
                  gap="15px"
                  bg="white.A700"
                  boxShadow="md"
                  w={{ md: "28%", base: "100%" }}
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  p="13px"
                  borderRadius="5px"
                >
                  <Box h="207px" mt="7px" w="100%" position="relative">
                    <Image
                      src="images/img_rectangle_9_2.png"
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
                    <a
                      href="https://youtu.be/Qv70RMUFlu0?si=0XPLhyFxHnqOtToQ"
                      className="ho"
                    >
                      <IconButton
                        colorScheme="gray_600_01"
                        icon={<Image src="images/img_play.svg" />}
                        aria-label="178:2094-play_one"
                        w="72px"
                        position="absolute"
                        top="30%"
                        right="0px"
                        left="0px"
                        m="auto"
                        borderRadius="50%"
                      />
                    </a>
                  </Box>
                  <Flex
                    mb="5px"
                    gap="10px"
                    w="100%"
                    flexDirection="column"
                    alignItems="start"
                  >
                    <Heading size="s" as="h6" fontFamily="Merriweather">
                      How To Seduce Anyone,Build confidence & Become Powerful
                    </Heading>
                    <Text size="xs">By Robert Greene</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              gap={{ md: "29px", base: "20px" }}
              w="100%"
              flexDirection={{ md: "row", base: "column" }}
              alignItems="start"
            >
              <Flex
                gap="50px"
                w={{ md: "66%", base: "100%" }}
                flexDirection="column"
                alignItems="end"
              >
                <Flex gap="50px" w="100%" flexDirection="column">
                  <Flex w="100%" flexDirection="column" alignItems="center">
                    <Flex w="100%" flexDirection="column" alignItems="start">
                      <Flex
                        w="100%"
                        flexDirection={{ md: "row", base: "column" }}
                        justifyContent="space-between"
                        alignItems="center"
                        gap="40px"
                      >
                        <Flex
                          gap="14px"
                          w={{ base: "100%", sm: "34%" }}
                          alignItems="center"
                        >
                          <Image
                            src={logo}
                            borderRadius="50%"
                            h={{ md: "70px", base: "auto" }}
                            w="70px"
                          />
                          <Flex
                            gap="3px"
                            w="66%"
                            flexDirection="column"
                            alignItems="start"
                          >
                            <Heading
                              as="h6"
                              color="blue_gray.600"
                              textAlign="center"
                              fontWeight={600}
                            >
                              By Prince Kumar
                            </Heading>
                            <Text size="xs" textAlign="center">
                              12 April, 2024
                            </Text>
                          </Flex>
                        </Flex>
                        <Text size="xs" textAlign="center" display="flex">
                          <Text size="xs" as="span" color="blue_gray.600">
                            Category{"  "}
                          </Text>
                          <Text
                            size="xs"
                            as="span"
                            color="pink.300"
                            fontFamily="Merriweather"
                            fontSize="18px"
                            fontWeight={900}
                          >
                            Writing
                          </Text>
                        </Text>
                      </Flex>
                      <Heading
                        size="2xl"
                        as="h1"
                        mt="30px"
                        ml={{ md: "2px", base: "0px" }}
                        letterSpacing="0.12px"
                        fontFamily="Merriweather"
                        fontStyle="italic"
                      >
                        Consistent way of working to train yourself
                      </Heading>
                      <Image
                        src="images/img_rectangle_11.png"
                        mt="29px"
                        ml={{ md: "2px", base: "0px" }}
                        w="100%"
                        borderRadius="5px"
                        h="390px"
                      />

                      {isOpen ? (
                        <>
                          <Text
                            color="blue_gray.900"
                            mt="30px"
                            ml={{ md: "2px", base: "0px" }}
                            lineHeight="30px"
                          >
                            To train yourself effectively, a consistent and
                            structured approach is essential. Begin by setting
                            clear, specific, measurable, achievable, relevant,
                            and time-bound goals. Break these goals down into
                            smaller, manageable tasks, and prioritize them
                            accordingly. Establish a regular training routine,
                            focusing on repetition and habit formation.
                          </Text>
                          <br></br>
                          <Button
                            height={8}
                            colorScheme="indigo_900_01"
                            color="white.A700"
                            letterSpacing="0.12px"
                            boxShadow="sm"
                            minW="120px"
                            borderRadius="35px"
                            px={{ md: 0, base: "20px" }}
                            onClick={handleToggleReadMore}
                          >
                            read more...
                          </Button>
                        </>
                      ) : (
                        <>
                          <Text
                            color="blue_gray.900"
                            mt="30px"
                            ml={{ md: "2px", base: "0px" }}
                            lineHeight="30px"
                          >
                            To train yourself effectively, a consistent and
                            structured approach is essential. Begin by setting
                            clear, specific, measurable, achievable, relevant,
                            and time-bound goals. Break these goals down into
                            smaller, manageable tasks, and prioritize them
                            accordingly. Establish a regular training routine,
                            focusing on repetition and habit formation.
                            Consistently practice the skills or knowledge you
                            aim to acquire, seek feedback for improvement, and
                            adjust your approach as needed. <br />Stay motivated by
                            focusing on both intrinsic and external rewards, and
                            surround yourself with inspiring people and
                            resources. Engage in continuous learning by staying
                            updated with new developments and exploring related
                            topics to broaden your knowledge base. Regularly
                            reflect on your progress, and seek support from
                            mentors, coaches, and communities with similar
                            interests. <br />Track and evaluate your progress towards
                            your goals, and adjust your plan and approach based
                            on your evaluations. Maintain a balance between
                            training and other responsibilities by prioritizing
                            your physical and mental well-being, managing your
                            time effectively, and allowing time for rest and
                            recovery to avoid burnout. Finally, celebrate your
                            achievements and acknowledge your progress to
                            maintain a positive mindset and focus on your growth
                            and development.
                          </Text>
                          <br></br>
                          <Button
                            height={8}
                            colorScheme="indigo_900_01"
                            color="white.A700"
                            letterSpacing="0.12px"
                            boxShadow="sm"
                            minW="120px"
                            borderRadius="35px"
                            px={{ md: 0, base: "20px" }}
                            onClick={handleToggleReadMore}
                          >
                            read less...
                          </Button>
                        </>
                      )}

                      <Flex
                        mt="19px"
                        w={{ md: "65%", base: "100%" }}
                        flexDirection={{ md: "row", base: "column" }}
                        justifyContent="space-between"
                        gap="40px"
                      >
                        <Flex gap="10px" alignItems="center" w="auto">
                          <IconButton
                            size="xl"
                            colorScheme="light_blue_50"
                            icon={<Image src="images/img_clock_1.svg" />}
                            aria-label="178:2108-clockone_one"
                            w="55px"
                            borderRadius="27px"
                          />
                          <Text size="xs" color="black.900" textAlign="center">
                            5 minutes ago
                          </Text>
                        </Flex>
                        <Flex gap="10px" alignItems="center" w="auto">
                          <IconButton
                            size="xl"
                            colorScheme="lime_50"
                            icon={<Image src="images/img_like_1.svg" />}
                            aria-label="178:2115-likeone_one"
                            w="55px"
                            borderRadius="27px"
                          />
                          <Text size="xs" color="black.900" textAlign="center">
                            12 Like
                          </Text>
                        </Flex>
                        <Flex gap="10px" alignItems="center" w="auto">
                          <IconButton
                            size="xl"
                            colorScheme="red_50"
                            icon={<Image src="images/img_send_1_1.svg" />}
                            aria-label="178:2121-send1one_one"
                            w="55px"
                            borderRadius="27px"
                          />
                          <Text size="xs" color="black.900" textAlign="center">
                            Share
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex w="100%" flexDirection="column" alignItems="center">
                    <Flex w="100%" flexDirection="column" alignItems="start">
                      <Flex
                        w="100%"
                        flexDirection={{ md: "row", base: "column" }}
                        justifyContent="space-between"
                        alignItems="center"
                        gap="40px"
                      >
                        <Flex
                          gap="14px"
                          w={{ base: "100%", sm: "34%" }}
                          alignItems="center"
                        >
                          <Image
                            src={logo}
                            borderRadius="50%"
                            h={{ md: "70px", base: "auto" }}
                            w="70px"
                          />
                          <Flex
                            gap="3px"
                            w="66%"
                            flexDirection="column"
                            alignItems="start"
                          >
                            <Heading
                              as="h6"
                              color="blue_gray.600"
                              textAlign="center"
                              fontWeight={600}
                            >
                              By Prince Kumar
                            </Heading>
                            <Text size="xs" textAlign="center">
                              14 April, 2024
                            </Text>
                          </Flex>
                        </Flex>
                        <Text size="xs" textAlign="center" display="flex">
                          <Text size="xs" as="span" color="blue_gray.600">
                            Category{" "}
                          </Text>
                          <Text
                            size="xs"
                            as="span"
                            color="pink.300"
                            fontFamily="Merriweather"
                            fontSize="18px"
                            fontWeight={900}
                          >
                            Writing
                          </Text>
                        </Text>
                      </Flex>
                      <Heading
                        size="2xl"
                        as="h1"
                        mt="30px"
                        ml={{ md: "2px", base: "0px" }}
                        letterSpacing="0.12px"
                        fontFamily="Merriweather"
                        fontStyle="italic"
                      >
                        A Healthy Lifestyle Starts with You
                      </Heading>
                      <Image
                        src="images/img_rectangle_11_390x728.png"
                        mt="29px"
                        ml={{ md: "2px", base: "0px" }}
                        w="100%"
                        borderRadius="5px"
                        h="390px"
                      />
                      {isOpen ? (
                        <>
                          <Text
                            color="blue_gray.900"
                            mt="30px"
                            ml={{ md: "2px", base: "0px" }}
                            lineHeight="30px"
                          >
                            Embarking on a journey towards a healthy lifestyle
                            starts with you. Begin by cultivating
                            self-awareness, understanding your current habits,
                            and reflecting on your eating patterns, physical
                            activity levels, sleep quality, and stress
                            management techniques. Set clear, realistic goals
                            that align with your values and priorities to guide
                            your health and wellness journey.
                          </Text>
                          <br></br>
                          <Button
                            height={8}
                            colorScheme="indigo_900_01"
                            color="white.A700"
                            letterSpacing="0.12px"
                            boxShadow="sm"
                            minW="120px"
                            borderRadius="35px"
                            px={{ md: 0, base: "20px" }}
                            onClick={handleToggleReadMore}
                          >
                            read more...
                          </Button>
                        </>
                      ) : (
                        <>
                          <Text
                            color="blue_gray.900"
                            mt="30px"
                            ml={{ md: "2px", base: "0px" }}
                            lineHeight="30px"
                            textAlign={"justify"}
                          >
                            Embarking on a journey towards a healthy lifestyle
                            starts with you. Begin by cultivating
                            self-awareness, understanding your current habits,
                            and reflecting on your eating patterns, physical
                            activity levels, sleep quality, and stress
                            management techniques. Set clear, realistic goals
                            that align with your values and priorities to guide
                            your health and wellness journey. <br /> Focus on making
                            balanced food choices, incorporating a variety of
                            nutrient-dense foods, and limiting processed foods,
                            sugars, and unhealthy fats to maintain a nutritious
                            diet. Stay active by engaging in regular physical
                            activity, aiming for at least 150 minutes of
                            moderate-intensity aerobic activity or 75 minutes of
                            vigorous-intensity aerobic activity per week, along
                            with muscle-strengthening activities on two or more
                            days a week. Prioritize sleep by ensuring you get
                            7-9 hours of quality sleep each night to support
                            optimal physical and mental health. Implement stress
                            management techniques such as mindfulness
                            meditation, deep breathing exercises, yoga, or
                            spending time in nature to reduce stress levels,
                            improve resilience, and enhance overall mental and
                            emotional well-being. <br /> Stay hydrated by drinking
                            plenty of water throughout the day to maintain
                            hydration, support digestion, regulate body
                            temperature, and promote overall health. Limit or
                            eliminate the consumption of alcohol, tobacco, and
                            other harmful substances to reduce the risk of
                            chronic diseases, improve overall health, and
                            enhance longevity. Build and maintain supportive and
                            nurturing relationships with family, friends, and
                            community to enhance social connections, boost
                            mental health, and improve overall quality of life.
                          </Text>
                          <br></br>
                          <Button
                            height={8}
                            colorScheme="indigo_900_01"
                            color="white.A700"
                            letterSpacing="0.12px"
                            boxShadow="sm"
                            minW="120px"
                            borderRadius="35px"
                            px={{ md: 0, base: "20px" }}
                            onClick={handleToggleReadMore}
                          >
                            read less...
                          </Button>
                        </>
                      )}
                      <Flex
                        mt="19px"
                        w={{ md: "65%", base: "100%" }}
                        flexDirection={{ md: "row", base: "column" }}
                        justifyContent="space-between"
                        gap="40px"
                      >
                        <Flex gap="10px" alignItems="center" w="auto">
                          <IconButton
                            size="xl"
                            colorScheme="light_blue_50"
                            icon={<Image src="images/img_clock_1.svg" />}
                            aria-label="178:2146-clockone_one"
                            w="55px"
                            borderRadius="27px"
                          />
                          <Text size="xs" color="black.900" textAlign="center">
                            5 minutes ago
                          </Text>
                        </Flex>
                        <Flex gap="10px" alignItems="center" w="auto">
                          <IconButton
                            size="xl"
                            colorScheme="lime_50"
                            icon={<Image src="images/img_like_1.svg" />}
                            aria-label="178:2153-likeone_one"
                            w="55px"
                            borderRadius="27px"
                          />
                          <Text size="xs" color="black.900" textAlign="center">
                            12 Like
                          </Text>
                        </Flex>
                        <Flex gap="10px" alignItems="center" w="auto">
                          <IconButton
                            size="xl"
                            colorScheme="red_50"
                            icon={<Image src="images/img_send_1_1.svg" />}
                            aria-label="178:2159-send1one_one"
                            w="55px"
                            borderRadius="27px"
                          />
                          <Text size="xs" color="black.900" textAlign="center">
                            Share
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex w="100%" flexDirection="column" alignItems="center">
                    <Flex w="100%" flexDirection="column" alignItems="start">
                      <Flex
                        w="100%"
                        flexDirection={{ md: "row", base: "column" }}
                        justifyContent="space-between"
                        alignItems="center"
                        gap="40px"
                      >
                        <Flex
                          gap="14px"
                          w={{ base: "100%", sm: "34%" }}
                          alignItems="center"
                        >
                          <Image
                            src={logo}
                            borderRadius="50%"
                            h={{ md: "70px", base: "auto" }}
                            w="70px"
                          />
                          <Flex
                            gap="3px"
                            w="66%"
                            flexDirection="column"
                            alignItems="start"
                          >
                            <Heading
                              as="h6"
                              color="blue_gray.600"
                              textAlign="center"
                              fontWeight={600}
                            >
                              By Prince Kumar
                            </Heading>
                            <Text size="xs" textAlign="center">
                              15 April, 2024
                            </Text>
                          </Flex>
                        </Flex>
                        <Text size="xs" textAlign="center" display="flex">
                          <Text size="xs" as="span" color="blue_gray.600">
                            Category{" "}
                          </Text>
                          <Text
                            size="xs"
                            as="span"
                            color="pink.300"
                            fontFamily="Merriweather"
                            fontSize="18px"
                            fontWeight={900}
                          >
                            Writing
                          </Text>
                        </Text>
                      </Flex>
                      <Heading
                        size="2xl"
                        as="h1"
                        mt="30px"
                        ml={{ md: "2px", base: "0px" }}
                        letterSpacing="0.12px"
                        fontFamily="Merriweather"
                        fontStyle="italic"
                      >
                        Mindset and Habits for Financial Success
                      </Heading>
                      <Image
                        src="images/img_rectangle_11_1.png"
                        mt="29px"
                        ml={{ md: "2px", base: "0px" }}
                        w="100%"
                        borderRadius="5px"
                        h="390px"
                      />

                      {isOpen ? (
                        <>
                          <Text
                            color="blue_gray.900"
                            mt="30px"
                            ml={{ md: "2px", base: "0px" }}
                            lineHeight="30px"
                          >
                            Welcome to "Financial Freedom Found" – your ultimate
                            resource for achieving true financial independence
                            and security. In today's world, financial freedom is
                            more than just a lofty aspiration; it's a realistic
                            goal that anyone can attain with the right
                            knowledge, mindset, and action plan.
                          </Text>
                          <br></br>
                          <Button
                            height={8}
                            colorScheme="indigo_900_01"
                            color="white.A700"
                            letterSpacing="0.12px"
                            boxShadow="sm"
                            minW="120px"
                            borderRadius="35px"
                            px={{ md: 0, base: "20px" }}
                            onClick={handleToggleReadMore}
                          >
                            read more...
                          </Button>
                        </>
                      ) : (
                        <>
                          <Text
                            color="blue_gray.900"
                            mt="30px"
                            ml={{ md: "2px", base: "0px" }}
                            lineHeight="30px"
                            textAlign={"justify"}
                          >
                            Welcome to "Financial Freedom Found" – your ultimate
                            resource for achieving true financial independence
                            and security. In today's world, financial freedom is
                            more than just a lofty aspiration; it's a realistic
                            goal that anyone can attain with the right
                            knowledge, mindset, and action plan. <br /> At "Financial
                            Freedom Found," we believe that financial freedom is
                            not solely about accumulating wealth but rather
                            about making informed financial decisions, managing
                            your money effectively, and building sustainable
                            wealth that provides you with the freedom to live
                            life on your own terms. Whether you're burdened by
                            debt, struggling to save, or simply looking to grow
                            your wealth and create a more secure financial
                            future, we are here to guide and support you every
                            step of the way. Our blog covers a comprehensive
                            range of topics designed to empower you to take
                            control of your financial life. From creating a
                            solid financial freedom plan and mastering the art
                            of debt management to exploring various ways to
                            build multiple income streams and investing
                            intelligently for the future, we provide practical
                            tips, actionable strategies, and insightful guidance
                            to help you navigate your personal finance journey
                            with confidence and clarity. We understand that
                            achieving financial freedom is a journey, not a
                            destination. <br /> It requires commitment, discipline, and
                            continuous learning. That's why our blog is
                            committed to delivering valuable content that is
                            both educational and engaging. Whether you're a
                            financial novice looking to build a strong financial
                            foundation or a seasoned investor aiming to optimize
                            your wealth-building strategies, our goal is to
                            provide you with the knowledge, tools, and
                            inspiration you need to succeed. So, if you're ready
                            to take control of your financial destiny, break
                            free from financial stress, and create a life of
                            financial abundance and security, you've come to the
                            right place. Join us on this exciting journey
                            towards financial freedom, and let's work together
                            to make your financial dreams a reality!
                          </Text>
                          <br></br>
                          <Button
                            height={8}
                            colorScheme="indigo_900_01"
                            color="white.A700"
                            letterSpacing="0.12px"
                            boxShadow="sm"
                            minW="120px"
                            borderRadius="35px"
                            px={{ md: 0, base: "20px" }}
                            onClick={handleToggleReadMore}
                          >
                            read less...
                          </Button>
                        </>
                      )}

                      <Flex
                        mt="19px"
                        w={{ md: "65%", base: "100%" }}
                        flexDirection={{ md: "row", base: "column" }}
                        justifyContent="space-between"
                        gap="40px"
                      >
                        <Flex gap="10px" alignItems="center" w="auto">
                          <IconButton
                            size="xl"
                            colorScheme="light_blue_50"
                            icon={<Image src="images/img_clock_1.svg" />}
                            aria-label="178:2184-clockone_one"
                            w="55px"
                            borderRadius="27px"
                          />
                          <Text size="xs" color="black.900" textAlign="center">
                            5 minutes ago
                          </Text>
                        </Flex>
                        <Flex gap="10px" alignItems="center" w="auto">
                          <IconButton
                            size="xl"
                            colorScheme="lime_50"
                            icon={<Image src="images/img_like_1.svg" />}
                            aria-label="178:2191-likeone_one"
                            w="55px"
                            borderRadius="27px"
                          />
                          <Text size="xs" color="black.900" textAlign="center">
                            12 Like
                          </Text>
                        </Flex>
                        <Flex gap="10px" alignItems="center" w="auto">
                          <IconButton
                            size="xl"
                            colorScheme="red_50"
                            icon={<Image src="images/img_send_1_1.svg" />}
                            aria-label="178:2197-send1one_one"
                            w="55px"
                            borderRadius="27px"
                          />
                          <Text size="xs" color="black.900" textAlign="center">
                            Share
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                gap="49px"
                w={{ md: "32%", base: "100%" }}
                flexDirection="column"
                alignItems="start"
              >
                <Flex
                  gap="23px"
                  w="100%"
                  flexDirection="column"
                  alignItems="start"
                >
                  <Flex flexDirection="column" alignItems="center">
                    <Image
                      src={logo}
                      w={{ md: "100%", base: "100%" }}
                      borderRadius="5px"
                      h="auto"
                    />
                  </Flex>
                  <Flex gap="4px" flexDirection="column" alignItems="start">
                    <Heading
                      size="lg"
                      as="h4"
                      ml={{ md: "1px", base: "0px" }}
                      fontFamily="Merriweather"
                    >
                      Prince kumar
                    </Heading>
                    <Text size="s" textAlign="center" fontWeight={500}>
                      Podcaster & Blogger
                    </Text>
                  </Flex>
                  <Text ml={{ md: "1px", base: "0px" }} lineHeight="30px">
                    I want to share knowledge in my own style. I have been
                    working on various things that I think I really need to
                    share with you all. I am a jhone podcaster and blogger
                  </Text>
                </Flex>
                <Flex
                  gap="20px"
                  w={{ md: "44%", base: "100%" }}
                  flexDirection="column"
                  alignItems="start"
                >
                  <Heading as="h6" fontFamily="Merriweather">
                    Follow Me On
                  </Heading>
                  <Flex
                    gap="14px"
                    w="100%"
                    flexDirection="column"
                    alignItems="start"
                  >
                    <Flex gap="5px" alignItems="center">
                      <Image
                        src="images/img_email_1.svg"
                        h="20px"
                        mb="1px"
                        w="20px"
                      />
                      <Text size="s">
                        <a
                          href="mailto:rajprince197119@gmail.com"
                          className="ho"
                        >
                          rajprince197119@gmail
                        </a>
                      </Text>
                    </Flex>
                    <Flex gap="8px" alignItems="center">
                      <Image
                        src="images/img_vector.svg"
                        h="20px"
                        mb="1px"
                        w="20px"
                      />
                      <Text size="s">
                        <a
                          href="https://www.instagram.com/me._.prince__/"
                          className="ho"
                        >
                          me._.prince__
                        </a>
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  gap="21px"
                  w="100%"
                  flexDirection="column"
                  alignItems="start"
                >
                  <Heading as="h6" fontFamily="Merriweather">
                    Trending Blog
                  </Heading>
                  <Flex w="100%">
                    <Box
                      h="200px"
                      w={{ md: "100%", base: "100%" }}
                      position="relative"
                    >
                      <Image
                        src="images/img_rectangle_13.png"
                        h="200px"
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
                      <Box
                        h="200px"
                        w={{ md: "100%", base: "100%" }}
                        position="absolute"
                        left="0px"
                        bottom="0px"
                        right="0px"
                        top="0px"
                        justifyContent="center"
                        m="auto"
                      >
                        <Image
                          src="images/img_rectangle_14.png"
                          h="200px"
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
                          gap="11px"
                          w="77%"
                          flexDirection="column"
                          alignItems="start"
                          position="absolute"
                          bottom="13%"
                          right="0px"
                          left="0px"
                          m="auto"
                        >
                          <Heading
                            as="h6"
                            color="white.A700"
                            fontFamily="Merriweather"
                            fontStyle="italic"
                          >
                            Consistent way of working to train yourself
                          </Heading>
                          <Text size="xs" color="white.A700">
                            2 day ago
                          </Text>
                        </Flex>
                      </Box>
                    </Box>
                  </Flex>
                  <Flex gap="20px" w="100%" flexDirection="column">
                    <Flex gap="15px" w="100%" alignItems="center">
                      <Image
                        src="images/img_rectangle_14_96x96.png"
                        w="96px"
                        borderRadius="5px"
                        h="auto"
                      />
                      <Flex
                        gap="10px"
                        w="69%"
                        flexDirection="column"
                        alignItems="start"
                      >
                        <Heading
                          as="h6"
                          fontFamily="Merriweather"
                          fontStyle="italic"
                        >
                          A Healthy Lifestyle Starts with You
                        </Heading>
                        <Text size="xs">1 day ago</Text>
                      </Flex>
                    </Flex>
                    <Flex gap="15px" w="100%" alignItems="center">
                      <Image
                        src="images/img_rectangle_14_1.png"
                        w="96px"
                        borderRadius="5px"
                        h="auto"
                      />
                      <Flex
                        gap="10px"
                        w="69%"
                        flexDirection="column"
                        alignItems="start"
                      >
                        <Heading
                          as="h6"
                          fontFamily="Merriweather"
                          fontStyle="italic"
                        >
                          Mindset and Habits for Financial Success
                        </Heading>
                        <Text size="xs">5 minutes ago</Text>
                      </Flex>
                    </Flex>
                    <Flex gap="15px" w="100%" alignItems="center">
                      <Image
                        src="images/img_rectangle_14_2.png"
                        w="96px"
                        borderRadius="5px"
                        h="auto"
                      />
                      <Flex
                        gap="10px"
                        w="69%"
                        flexDirection="column"
                        alignItems="start"
                      >
                        <Heading
                          as="h6"
                          fontFamily="Merriweather"
                          fontStyle="italic"
                        >
                          Peace of mind
                        </Heading>
                        <Text size="xs">5 minutes ago</Text>
                      </Flex>
                    </Flex>
                    <Flex gap="15px" w="100%" alignItems="center">
                      <Image
                        src="images/img_rectangle_14_3.png"
                        w="96px"
                        borderRadius="5px"
                        h="auto"
                      />
                      <Flex
                        gap="10px"
                        w="69%"
                        flexDirection="column"
                        alignItems="start"
                      >
                        <Heading
                          as="h6"
                          fontFamily="Merriweather"
                          fontStyle="italic"
                        >
                          Only you can do it!
                        </Heading>
                        <Text size="xs">1 minutes ago</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  gap="18px"
                  w="100%"
                  flexDirection="column"
                  alignItems="start"
                >
                  <Heading
                    as="h6"
                    letterSpacing="0.12px"
                    fontFamily="Merriweather"
                  >
                    Categories
                  </Heading>
                  <VStack
                    divider={
                      <Divider borderColor="blue_gray.100" w="100%" h="1px" />
                    }
                    spacing={2.25}
                    display="flex"
                    w="100%"
                    flexDirection="column"
                    gap="2.25px"
                  >
                    <Flex
                      pb="10px"
                      w="100%"
                      flexDirection="column"
                      alignItems="center"
                    >
                      <Flex
                        w="100%"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Text>Writing</Text>
                        <Flex
                          h="40px"
                          w="40px"
                          flexDirection="column"
                          alignItems="center"
                        >
                          <Text
                            h="40px"
                            color="gray.600_01"
                            fontWeight={400}
                            bg="blue.50"
                            w="40px"
                            justifyContent="center"
                            display="flex"
                            alignItems="center"
                            textAlign="center"
                            borderRadius="50%"
                          >
                            1
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                    <Flex
                      w="100%"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Text>Working</Text>
                      <Flex
                        h="40px"
                        w="40px"
                        flexDirection="column"
                        alignItems="center"
                      >
                        <Text
                          h="40px"
                          color="gray.600_01"
                          fontWeight={400}
                          bg="blue.50"
                          w="40px"
                          justifyContent="center"
                          display="flex"
                          alignItems="center"
                          textAlign="center"
                          borderRadius="50%"
                        >
                          5
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex
                      pt="10px"
                      w="100%"
                      flexDirection="column"
                      alignItems="center"
                    >
                      <Flex
                        w="100%"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Text>Podcaster</Text>
                        <Flex
                          h="40px"
                          w="40px"
                          flexDirection="column"
                          alignItems="center"
                        >
                          <Text
                            h="40px"
                            color="gray.600_01"
                            fontWeight={400}
                            bg="blue.50"
                            w="40px"
                            justifyContent="center"
                            display="flex"
                            alignItems="center"
                            textAlign="center"
                            borderRadius="50%"
                          >
                            3
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </VStack>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Container>
        <Flex
          direction="column"
          as="footer"
          flexDirection="column"
          w="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            mb="377px"
            gap="53px"
            bg="green.50"
            w="78%"
            flexDirection={{ md: "row", base: "column" }}
            justifyContent="space-evenly"
            alignItems="center"
            py={{ md: "50px", base: "20px" }}
            borderRadius="5px"
          >
            <Flex
              w={{ md: "46%", base: "100%" }}
              flexDirection="column"
              alignItems="start"
            >
              <Text color="indigo.900_01">NEWSLETTER</Text>
              <Heading
                size="xl"
                as="h1"
                mt="4px"
                fontFamily="Merriweather"
                fontWeight={900}
              >
                Subscribe to our website newsletter to receive news and updates.
              </Heading>
              <Text color="blue_gray.900" mt="20px">
                Get special offers directly to your email every week!
              </Text>
            </Flex>
            <Flex
              mt={{ md: "32px", base: "0px" }}
              gap="7px"
              w={{ md: "40%", base: "100%" }}
              flexDirection="column"
              alignItems="end"
            >
              <Flex
                gap="20px"
                w="100%"
                flexDirection="column"
                alignItems="start"
              >
                <Input
                  size="sm"
                  variant="fill"
                  colorScheme="white_A700"
                  placeholder="Your Email"
                  type="email"
                  fontWeight={700}
                  borderColor="indigo.900_01"
                  w={{ md: "100%", base: "100%" }}
                />
                <Button
                  size="2xl"
                  colorScheme="indigo_900_01"
                  color="white.A700"
                  fontWeight={600}
                  minW={{ md: "137px", base: "100%" }}
                  borderRadius="5px"
                  px={{ md: 0, base: "20px" }}
                >
                  Subscribe
                </Button>
              </Flex>
              <IconButton
                size="7xl"
                colorScheme="pink_300"
                icon={<Image src="images/img_newspaper_1.svg" />}
                aria-label="177:1089-newspaperone"
                mr={{ md: "77px", base: "20px" }}
                w="77px"
                borderRadius="38px"
              />
            </Flex>
          </Flex>
          <Flex w="100%" justifyContent="flex-end">
            <Flex
              bg="gray.600_01"
              w="100%"
              justifyContent="center"
              p={{ md: "33px", base: "20px" }}
            >
              <Flex
                mt="30px"
                gap="66px"
                w="81%"
                flexDirection="column"
                alignItems="center"
                mx={{ md: "132px", base: "20px" }}
              >
                <Flex
                  w="100%"
                  flexDirection={{ md: "row", base: "column" }}
                  justifyContent="space-between"
                  alignItems="center"
                  gap="40px"
                >
                  <Flex
                    gap="8px"
                    w={{ md: "15%", base: "100%" }}
                    flexDirection="column"
                    alignItems="start"
                  >
                    <Flex gap="14px" alignItems="start">
                      <Image
                        src="images/img_dashicons_welcome_write_blog.svg"
                        h="24px"
                        mt="3px"
                        w="24px"
                      />
                      <Heading
                        size="lg"
                        as="h4"
                        color="white.A700"
                        fontFamily="Nunito Sans"
                        textTransform="uppercase"
                        textAlign="center"
                        fontWeight={800}
                      >
                        Bloggy.dev
                      </Heading>
                    </Flex>
                    <Flex gap="10px" alignItems="center">
                      <Image src="images/img_heart_3_1.svg" h="20px" w="20px" />
                      <Text color="white.A700" fontWeight={500}>
                        Build with heart
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    w="auto"
                    justifyContent="space-between"
                    gap="50px"
                    color="white.A700"
                    fontWeight="200"
                    className="fg"
                    fontSize={18}
                  >
                    <a href="/">Home</a>
                    <a href="bloggerdetails">Podcast</a>
                    <a href="blogdetails">Blog</a>
                    <a href="/">About</a>
                    <a href="contactus">Contact</a>
                  </Flex>
                  <Flex
                    gap="19px"
                    w={{ md: "11%", base: "100%" }}
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Heading as="h6" color="white.A700" textAlign="center">
                      Follow Me on
                    </Heading>
                    <Flex w="100%" justifyContent="space-between" className="fg">
                      <a href="https://www.instagram.com/me._.prince__/">
                      <Image
                        src="images/img_instagram_3_1.svg"
                        h="25px"
                        w="25px"
                      />
                      </a>

                      <a href="https://api.whatsapp.com/send/?phone=916398221470&text&type=phone_number&app_absent=0">
                      <Image
                        src="images/img_whatsapp_2_1.svg"
                        h="25px"
                        w="25px"
                      />
                      </a>

                      <a href="https://www.linkedin.com/in/prince-kumar-410b00229/">
                      <Image
                        src="images/img_linkedin_2_1.svg"
                        h="25px"
                        w="25px"
                      />
                      </a>
                    </Flex>
                  </Flex>
                </Flex>
                <Text size="xs" color="white.A700">
                  Powered by Bloggy.dev
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
