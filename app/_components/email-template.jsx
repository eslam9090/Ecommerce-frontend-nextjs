import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const EmailTemplate = ({ body }) => (
  <Html>
    <Head />
    <Preview>
      The Ecommerce Platform For Yout Digital Products search now for your
      future
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://res.cloudinary.com/dxl7riynk/image/upload/v1745442794/person_front_computer_working_html_129e7fe12c.jpg"
          width="420"
          height="300"
          alt="Koala"
          style={logo}
        />
        <Text style={paragraph}>Hi {body.fullName},</Text>
        <Text style={paragraph}>
          Thank you purchasing on Courses App. Click on Below download button to
          download the all digital content
        </Text>
        <Section style={btnContainer}>
          <Button
            pX={12}
            pY={12}
            style={{
              padding: 5,
              paddingLeft: 10,
              paddingRight: 10,
            }}
            href="https://res.cloudinary.com/ddfzikgiz/image/upload/v1704313420/Nextpreview_564bd5e6fd.png"
          >
            Download
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          Courses App Team
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
