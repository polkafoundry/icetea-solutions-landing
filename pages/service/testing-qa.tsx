import InsightBanner from "@/components/development-consulting/banner";
import SoftwareDevService from "@/components/expertise-industries/software-dev-service";
import DeliverIdea from "@/components/home/deliver-idea";
import WorkingProcess from "@/components/offering/working-process";
import TestingQAService from "@/components/testing-qa/testing-qa-service";
import WebAppSmallBanner from "@/components/web-app/small-banner";
import { bannerTestingQAData } from "@/constants/consulting";
import { testingQAProcessData } from "@/constants/testing";

const TestingQA = () => {
  return (
    <div>
      <InsightBanner
        title="Software Testing & QA Services"
        subTitle="Icetea Software offers a wide range of independent software testing & QA services that satisfy the highest level of security and industry standards. Using our testing labs, QA expertise and team flexibility, we are able to increase the quality of your product while reducing time-to-market, management risks and operating costs."
        contents={bannerTestingQAData}
      />
      <SoftwareDevService />
      <WorkingProcess
        data={testingQAProcessData}
        title="QA & Testing Process"
      />
      <DeliverIdea title="Our successful projects" />
      <WebAppSmallBanner />
      <TestingQAService />
    </div>
  );
};

export default TestingQA;
