// 1. Welcome Email Template
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

export const EmailTemplate = () => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgoB8FKElPt9RgP3osz5tG6KZbCxukCn5u7g&usqp=CAU"
          }
          width="170"
          height="100"
          alt="Black-Panther"
          style={logo}
        />
        <Text style={paragraph}>Hi {"Mathew"},</Text>
        <Text style={paragraph}>
          Welcome to Black Panther, the sales intelligence platform that helps
          you uncover qualified leads and close deals faster.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href="https://black-panther.com">
            Get started
          </Button>
        </Section>
        <Text style={paragraph}>
          Regards,
          <br />
          The Black Panther team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          470 Noor Ave STE B #1148, South San Francisco, CA 94080
        </Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

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
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};

//2. React Email dynamic template
// import {
//   Body,
//   Container,
//   Head,
//   Heading,
//   Hr,
//   Html,
//   Preview,
//   Tailwind,
//   Text,
// } from "@react-email/components";
// import * as React from "react";

// const EmailTemplate = ({ name, email, message, phone }) => {
//   const previewText = `New appointment request 🚀`;

//   return (
//     <Html>
//       <Head />
//       <Preview>{previewText}</Preview>
//       <Tailwind>
//         <Body className="bg-white my-auto mx-auto font-sans">
//           <Container className="my-[20px] mx-auto p-[20px] max-w-4xl">
//             <Heading className="text-black text-[20px] font-normal text-left">
//               <strong>Hello Hinal,</strong>
//             </Heading>
//             <Hr className="my-[16px] mx-0 w-full" />
//             <Text className="text-[#666666] text-[12px]">
//               You have received a new message from {name} through your website
//               contact form.
//             </Text>
//             <strong>With message,</strong>
//             <Text className="text-black text-[14px] leading-[24px]">
//               {message}
//             </Text>
//             <strong>Appointment Information</strong>
//             <Text className="text-[#666666] text-[12px]">Name : {name}</Text>
//             <Text className="text-[#666666] text-[12px]">Email: {email}</Text>
//             <Text className="text-[#666666] text-[12px]">
//               Contact No.: {phone}
//             </Text>
//           </Container>
//         </Body>
//       </Tailwind>
//     </Html>
//   );
// };

// export default EmailTemplate;
