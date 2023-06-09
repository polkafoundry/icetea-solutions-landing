import InsightBanner from "@/components/development-consulting/banner";
import CaseStudy from "@/components/development-consulting/case-study";
import ConsultingCapacity from "@/components/development-consulting/consulting-capacity";
import { bannerConsultingData } from "@/constants/consulting";

const CustomSoftwareDevelopmentConsulting = () => {
  return (
    <div>
      <InsightBanner
        title="Custom software development & consulting"
        subTitle="Icetea Software delivers the full-cycle software development services, from IT consulting to roadmaps designing and developing end to end scalable technology solutions. By analysing your project requirements and business needs, we are able to adapt seamlessly to your requests."
        contents={bannerConsultingData}
      />
      <ConsultingCapacity />
      <CaseStudy />
    </div>
  );
};

export default CustomSoftwareDevelopmentConsulting;
