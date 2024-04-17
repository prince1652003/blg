import React from "react";
import { Text, Image, Flex, Heading } from "@chakra-ui/react";

export default function Footer({ ...props }) {
  return (
    <Flex {...props} direction="column" as="footer">
      <Flex
        mt="30px"
        gap="66px"
        w="81%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
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
                Blogsly
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
                <Image src="images/img_instagram_3_1.svg" h="25px" w="25px" />
              </a>

              <a href="https://api.whatsapp.com/send/?phone=916398221470&text&type=phone_number&app_absent=0">
                <Image src="images/img_whatsapp_2_1.svg" h="25px" w="25px" />
              </a>

              <a href="https://www.linkedin.com/in/prince-kumar-410b00229/">
                <Image src="images/img_linkedin_2_1.svg" h="25px" w="25px" />
              </a>
            </Flex>
          </Flex>
        </Flex>
        <Text size="xs" color="white.A700">
          Powered by Bloggy.dev
        </Text>
      </Flex>
    </Flex>
  );
}
