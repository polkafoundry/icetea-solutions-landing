import {
  Compatibility,
  CompatibilityHover,
} from "@/components/svg/insight/compatibility";
import {
  Functional,
  FunctionalHover,
} from "@/components/svg/insight/functional";
import {
  MobileAppQA,
  MobileAppQAHover,
} from "@/components/svg/insight/mobile-app";
import {
  Performance,
  PerformanceHover,
} from "@/components/svg/insight/performance";
import {
  SecurityQA,
  SecurityQAHover,
} from "@/components/svg/insight/security-testing";
import { Usability, UsabilityHover } from "@/components/svg/insight/usability";
import {
  WebAppIconQA,
  WebAppIconQAHover,
} from "@/components/svg/insight/web-app";

export const testingQAProcessData = [
  "Inspect finally and hand over",
  "Make inquiries and clarify requirements",
  "Consult and estimate",
  "Make a contract",
  "Kick-off project",
  "Deliver outcomes",
  "Inspect finally and hand over",
];

export const testingQAServiceData = [
  {
    img: <WebAppIconQA />,
    imgHover: <WebAppIconQAHover />,
    title: "Web app",
  },
  {
    img: <MobileAppQA />,
    imgHover: <MobileAppQAHover />,
    title: "Mobile app",
  },
  {
    img: <Functional />,
    imgHover: <FunctionalHover />,
    title: "Functional",
  },
  {
    img: <Usability />,
    imgHover: <UsabilityHover />,
    title: "Usability",
  },
  {
    img: <Compatibility />,
    imgHover: <CompatibilityHover />,
    title: "Compatibility",
  },
  {
    img: <SecurityQA />,
    imgHover: <SecurityQAHover />,
    title: "Security",
  },
  {
    img: <Performance />,
    imgHover: <PerformanceHover />,
    title: "Performance",
  },
];

export const testingQAServiceContents = [
  {
    img: "/images/home/testing_service_1.png",
    title: "Web App Testing",
    content:
      "Icetea Software advanced web testing services include all essential elements of Website Application, from general Quality Assurance (QA) to performance and security evaluation, ensuring the best experiences for your end-users. Through extensive processes, our testing team can evaluate your web app functions and how it interfaces with various browsers across multiple devices. Upon gaining such insights, we can provide you with solutions",
  },
  {
    img: "/images/home/testing_service_2.png",
    title: "Mobile App Testing",
    content:
      "Many mobile apps are released and disappeared within just weeks of launching due to unsatisfactory experiences and feedback from users, which means all the resources spent on this mobile app development go futile. To avoid such distressing incidents, Sota Tek offers quality Mobile App Testing services for all enterprises. Our Testing packages include both functional and non-functional features of your mobile apps. We investigate specific Upon gaining such insights. We can provide you with solutions",
  },
  {
    img: "/images/home/testing_service_3.png",
    title: "Functional Testing",
    content:
      "Our end-to-end functional testing services put all the aspects of the software into intensive testing processes against its stated required functions to ensure the products are running smoothly and as desired by the company. Upon gaining such insights, we can provide you with solutions",
  },
  {
    img: "/images/home/testing_service_4.png",
    title: "Usability Testing",
    content:
      "Usability testing, also known as User Experience testing, aims at monitoring all behaviors of the software and ensure a smooth experience for customers. Sota Tek’s usability testing focuses intensively on end users’ ease of accessing the services and using the software. Through understanding customers’ behaviors deeply, we predict potential issues and guarantee a seamless experience. Upon gaining such insights, we can provide you with solutions",
  },
  {
    img: "/images/home/testing_service_5.png",
    title: "Compatibility Testing",
    content:
      "Softwares these days are expected to run smoothly on various devices, which demands Compatibility Testing Processes. Compatibility Testing is non-functional testing, aims to check whether your software can run on various devices, operating systems, or Mobile devices. These compatibility tests would maximize your company’s ability to engage and reach out to customers. Upon gaining such insights, we can provide you with solutions",
  },
  {
    img: "/images/home/testing_service_6.png",
    title: "Security Testing",
    content:
      "Bugs and hidden weaknesses in the software systems can lead to security breaches with serious consequences. Security Testing processes are designed to unveil the systems’ vulnerabilities, especially to protect the data and resources of the systems from external attacks and intruders. By employing Security Testing at an early phase, you can ensure that your applications are risk-free and well-protected",
  },
  {
    img: "/images/home/testing_service_7.png",
    title: "Performance Testing",
    content:
      "While it might be tempting to integrate as much information as possible on your applications, these data might lead to performance issues such as low responsiveness or increased loading time. Our performance testing package, which puts your software and devices through extensive QA processes, would determine and optimize the responsiveness and stability of the applications under a specific workload",
  },
];
