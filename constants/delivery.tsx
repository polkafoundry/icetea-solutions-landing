import { AssignmentsCheckIcon } from "@/components/svg/delivery/assignments-check";
import { AssignmentsLine } from "@/components/svg/delivery/assignments-line";

export const deliveryModelsData = [
  {
    title: "Offshore Model",
    subTitle:
      "The best way to cut down your cost! Benefitting from offshore model, we provide highly skilled developers at very competitive price!",
    contents: [
      "Effective cost savings",
      "Single point of contact",
      "Clear, responsive communications",
    ],
    imgPreview: "/images/home/offshore_model.svg",
    assignments: [
      {
        title: "project scope",
        customer: <AssignmentsCheckIcon />,
        offshore: <AssignmentsCheckIcon />,
      },
      {
        title: "analysis",
        customer: <AssignmentsLine />,
        offshore: <AssignmentsCheckIcon />,
      },
      {
        title: "high level design",
        customer: <AssignmentsLine />,
        offshore: <AssignmentsCheckIcon />,
      },
      {
        title: "development/unit testing",
        customer: <AssignmentsLine />,
        offshore: <AssignmentsCheckIcon />,
      },
      {
        title: "intergration/system testing",
        customer: <AssignmentsLine />,
        offshore: <AssignmentsCheckIcon />,
      },
      {
        title: "acceptance testing",
        customer: <AssignmentsCheckIcon />,
        offshore: <AssignmentsCheckIcon />,
      },
    ],
  },
  {
    title: "Onsite Model",
    subTitle:
      "Your data cannot leave your facility? No problem! Our personnel can come and work directly with you, at the same place, same time, ensuring maximum security & communication!",
    contents: [
      "Face - to - face communication with team members",
      "Maximum control and coordination of time and effectiveness",
      "Maximize security, minimize communication gap",
      "Optimize recruitment costs",
    ],
    imgPreview: "/images/home/onsite_model.svg",
    assignments: [
      {
        title: "project scope",
        customer: <AssignmentsCheckIcon />,
        offshore: <AssignmentsCheckIcon />,
      },
      {
        title: "analysis",
        customer: <AssignmentsLine />,
        offshore: <AssignmentsCheckIcon />,
      },
      {
        title: "high level design",
        customer: <AssignmentsLine />,
        offshore: <AssignmentsCheckIcon />,
      },
      {
        title: "development/unit testing",
        customer: <AssignmentsLine />,
        offshore: <AssignmentsCheckIcon />,
      },
      {
        title: "intergration/system testing",
        customer: <AssignmentsLine />,
        offshore: <AssignmentsCheckIcon />,
      },
      {
        title: "acceptance testing",
        customer: <AssignmentsCheckIcon />,
        offshore: <AssignmentsCheckIcon />,
      },
    ],
  },
  {
    title: "Hybrid Model",
    subTitle:
      "Still wanna cut cost while maximizing interactions? Have our BrSE or PM working directly with you while interacting with our developers from far away!",
    contents: [
      "Transparent project status and clear communication at all levels",
      "In - depth understanding of each other’s working styles leading to long - term benefits",
      "Optimized resources, quality, project, and process management",
      "Cost advantages of having offshore software developers",
    ],
    imgPreview: "/images/home/hybrid_model.svg",
    assignments: [
      {
        title: "project scope",
        customer: <AssignmentsCheckIcon />,
        offshore: <AssignmentsLine />,
      },
      {
        title: "analysis",
        customer: <AssignmentsCheckIcon />,
        offshore: <AssignmentsLine />,
      },
      {
        title: "high level design",
        customer: <AssignmentsLine />,
        offshore: <AssignmentsCheckIcon />,
      },
      {
        title: "development/unit testing",
        customer: <AssignmentsLine />,
        offshore: <AssignmentsCheckIcon />,
      },
      {
        title: "intergration/system testing",
        customer: <AssignmentsLine />,
        offshore: <AssignmentsCheckIcon />,
      },
      {
        title: "acceptance testing",
        customer: <AssignmentsCheckIcon />,
        offshore: <AssignmentsLine />,
      },
    ],
  },
];

export const engagementsData = [
  {
    title: "Expenses",
    offshore: ["Based on capital resources required for the specific project"],
    project: ["Based on the requirements of the delivered product"],
  },
  {
    title: "Benefits",
    offshore: [
      "Team of top quality software engineer and managers",
      "Frequently updated progress of development",
      "Flexible and adaptable to changes midway through the project",
      "Diverse choices of development models available",
    ],
    project: [
      "Team of top quality software engineer and managers",
      "Development carried out according to specific requirements and instructions",
      "Changes in requirement would change costs and delivery date",
    ],
  },
  {
    title: "Recommended cases",
    offshore: ["Based on capital resources required for the specific project"],
    project: ["One-shot project", "Project with clear requirements"],
  },
];
