import { Box, Button, Center, Flex, Heading, HStack, Link, Tooltip, Image, Text } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoCloudDownload } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import { projects, skills } from "../Utils/data";

import ProjectCard from "../Components/Card";
import Svg1 from "../Components/Svg1";
import Svg2 from "../Components/Svg2";
import Fadel from "../Components/Fadel";
import Svg3 from "../Components/Svg3";
import Slider from "react-slick";

const Home = () => {
  const form = useRef();
  const toast = useToast();

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: matchMedia("(max-width: 425px)").matches ? 1 : matchMedia("(max-width: 1024px)").matches ? 2 : 3,
    slidesToScroll: 1,
  };

  useEffect(() => {
    // * it's from Aos library to to use scroll designing
    Aos.init();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_ot57meh", "template_82m6hki", form.current, "s7qxzSHyvTMO1qNhD").then(
      (result) => {
        console.log(result.text);
        toast({
          position: "top-right",
          title: "Email Sent ✔",
          description: `Thank You ${form.current.from_name.value.split(" ")[0]} for the message!`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        form.current.from_name.value = "";
        form.current.user_email.value = "";
        form.current.message.value = "";
      },
      (error) => {
        console.log(error.text);
        toast({
          title: "Email Not sent.",
          description: "There is some error",
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
      }
    );
  };

  return (
    <Box>
      <Box id="home">
        <Flex flexDirection={["column-reverse", "column-reverse", "row"]} m="auto" justifyContent="space-around" alignItems="center" h="100%">
          <Box data-aos="fade-down">
            <Heading>
              Hey! <span className="themeText">I'm</span>
            </Heading>
            <Box className="content">
              <Heading fontSize="3.3em" className="text" data-text="M.FADEL FADILAH">
                <span className="themeText">M.FADEL FADILAH</span>
              </Heading>
            </Box>
            <Text>Am a software Developer passionate and experienced in building Web applications.</Text>
          </Box>
          <Box data-aos="fade-down">
            <Svg1 />
          </Box>
        </Flex>
      </Box>

      {/* About me */}

      <Box id="aboutMe">
        <Heading>
          About <span className="themeText">me</span>
        </Heading>
        <Flex flexDirection={["column-reverse", "column-reverse", "column-reverse", "row"]} alignItems="center" h="100%">
          <div data-aos="fade-right">
            <Svg3 />
          </div>

          <Flex data-aos="fade-left">
            <Flex w="100%" gap="10%" justifyContent="center">
              <Svg3 />
            </Flex>

            <Box>
              <Text>
                Saya merupakan pribadi yang jujur, rapi, cekatan dan sopan. Selain itu saya mampu dalam berkomunikasi dengan baik serta dapat mudah beradaptasi dengan lingkungan baru. Dengan itu saya dapat bekerja secara tim maupun
                individu. Memiliki pengetahuan luas dalam bekerja sama dengan orang banyak dan kolaborasi proyek dengan berbagai tim dari latar belakang berbeda.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>

      {/* Technical Skills section */}
      <Box id="skills">
        <Heading>
          Technical
          <span className="themeText"> Skills</span>
        </Heading>
        <Flex className="skills">
          <Flex>
            <Heading size="lg">
              Front<span className="themeText">end</span>
            </Heading>
            <Box>
              {skills
                .filter((el) => el.tag === "frontend")
                .map((skill) => (
                  <Box key={skill.id} className="skill" data-aos="zoom-in-up">
                    <Box>
                      <Image src={skill.icon} />
                    </Box>
                    <Text>{skill.title}</Text>
                  </Box>
                ))}
            </Box>
          </Flex>
          <Flex>
            <Heading size="lg">
              Back<span className="themeText">end</span>
            </Heading>
            <Box>
              {skills
                .filter((el) => el.tag === "backend")
                .map((skill) => (
                  <Box key={skill.id} className="skill" data-aos="zoom-in-down">
                    <Box>
                      <Image src={skill.icon} />
                    </Box>
                    <Text>{skill.title}</Text>
                  </Box>
                ))}
            </Box>
          </Flex>
          <Flex>
            <Heading size="lg">
              Platforms <span className="themeText">& Tools</span>
            </Heading>
            <Box>
              {skills
                .filter((el) => el.tag === "platform")
                .map((skill) => (
                  <Box key={skill.id} className="skill" data-aos="zoom-in">
                    <Box>
                      <Image src={skill.icon} />
                    </Box>
                    <Text>{skill.title}</Text>
                  </Box>
                ))}
            </Box>
          </Flex>
        </Flex>
      </Box>

      {/* Contact me */}
      <Box id="contactMe">
        <Heading textAlign="center">
          Contact <span className="themeText">Me</span>
        </Heading>
        <Flex flexDirection={["column", "column", "column", "row"]} alignItems="center">
          <Box>
            <Svg2 />
          </Box>

          <Box className="form-section">
            <form ref={form} onSubmit={sendEmail}>
              <div className="inputBox">
                <input type="text" name="from_name" required />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="email" name="user_email" required />
                <span>Email</span>
              </div>
              <div>
                <textarea placeholder="Message 📧" name="message" />
              </div>
              <input type="submit" value="Send Message" />
            </form>
            <Flex className="contact-info">
              <HStack>
                <SiGmail color="#e34133" />
                <Text>kembar0510@gmail.com</Text>
              </HStack>
              <HStack>
                <FaPhoneAlt color="#00a14f" />
                <Text>+62 81293260837</Text>
              </HStack>
            </Flex>
            <Flex gap={["10px", "20px", "20px", "40px"]}>
              <Link href="https://wa.me/6281293260837" target="_blank">
                <Tooltip label="+62 81293260837">
                  <Box className="social-icons">
                    <Box>
                      <Image w="100%" src="https://brandlogos.net/wp-content/uploads/2018/10/whatsapp-logo.png" />
                    </Box>
                  </Box>
                </Tooltip>
              </Link>

              <Link href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJKjFpWNfPwzpLxQBSsJZcJXkQQztWwwvdLtVMggsDRTMHPmGbsDwfWxzhNwdNlhDTZL" target="_blank">
                <Tooltip label="kembar0510@gmail.com">
                  <Box className="social-icons">
                    <Box>
                      <Image w="100%" src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png" />
                    </Box>
                  </Box>
                </Tooltip>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>

      {/* footer */}
      <Flex id="footer">
        <Text>© Portfolio by Fadel | All rights reserved.</Text>
        <Text>Made with 💖 by Fadel</Text>
      </Flex>
    </Box>
  );
};

export default Home;
