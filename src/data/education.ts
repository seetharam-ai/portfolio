export type EduCertItem =
  | {
      kind: "cert";
      title: string;
      /** Shown in bold under the title, e.g. a credential ID. */
      credential: string;
      /** When true the credential is prefixed with "Credential ID:". */
      isCredentialId: boolean;
      href: string;
      image: string;
      alt: string;
    }
  | {
      kind: "education";
      school: string;
      location: string;
      degree: string;
      years: string;
      logo: string;
      alt: string;
    };

// Rendered in this order in the Education & Certifications grid.
export const eduCertItems: EduCertItem[] = [
  {
    kind: "cert",
    title: "ComfyUI workflow creation and diffusion models mastery",
    credential: "UC-d4ae5b47-24e5-47c6-b538-434f9e1d4874",
    isCredentialId: true,
    href: "certificates/GenAI with ComfyUI_UC-d4ae5b47-24e5-47c6-b538-434f9e1d4874.pdf",
    image: "certificates/Udemy.png",
    alt: "Gen AI with ComfyUI",
  },
  {
    kind: "cert",
    title: "Full stack generative AI & Agentic AI with Python",
    credential: "UC-150023c4-6689-4d8f-be9d-510b7aa588ce",
    isCredentialId: true,
    href: "certificates/Full stack generative AI & Agentic AI with Python_UC-150023c4-6689-4d8f-be9d-510b7aa588ce.pdf",
    image: "certificates/Udemy.png",
    alt: "Udemy Full stack generative AI & Agentic AI with Python",
  },
  {
    kind: "cert",
    title: "Generative AI in Adobe Creative Cloud",
    credential: "BSPPQXXEJ40S",
    isCredentialId: true,
    href: "certificates/Adobe_GenAI_Content_creation_Coursera 2G0ZU16JFPR5.pdf",
    image: "certificates/adobe-genai.png",
    alt: "Adobe Gen AI",
  },
  {
    kind: "cert",
    title: "Essentials of Prompt Engineering",
    credential: "AWS Certified",
    isCredentialId: false,
    href: "certificates/Seethat_essential of promt engineering.pdf",
    image: "certificates/aws.png",
    alt: "aws-essential-of-promt-engineering",
  },
  {
    kind: "cert",
    title: "Generative AI Foundations",
    credential: "AWS Certified",
    isCredentialId: false,
    href: "certificates/Gen AI Foundations.pdf",
    image: "certificates/aws.png",
    alt: "aws-gen-ai-foundations",
  },
  {
    kind: "cert",
    title: "Google UX Design Professional Certificate",
    credential: "7BP7JEOKWLV6",
    isCredentialId: true,
    href: "certificates/Google_UX_Design_Coursera 7BP7JEOKWLV6.pdf",
    image: "certificates/google-ux-design-professional-certificate-v-3.png",
    alt: "Google UX",
  },
  {
    kind: "cert",
    title: "Generative AI for Business and Professionals",
    credential: "4d2155f4558d40aabbaa17509e7c62ab",
    isCredentialId: true,
    href: "https://courses.emeritus.skillsnetwork.site/certificates/4d2155f4558d40aabbaa17509e7c62ab",
    image: "certificates/IBM.png",
    alt: "IBM AI ",
  },
  {
    kind: "education",
    school: "ICAT - Design and Media College",
    location: "Bengaluru, Karnataka, India",
    degree: "Post Graduate Diploma in Multimedia technologies",
    years: "2014 - 2015",
    logo: "images/Icat_logo.png",
    alt: "icat-logo",
  },
  {
    kind: "education",
    school: "Jawaharlal Nehru Technological University",
    location: "Kakinada, Andhra Pradesh, India",
    degree: "Bachelor of Electronics and communication engineering",
    years: "2010 - 2014",
    logo: "images/jntuk-logo.png",
    alt: "jntu-logo",
  },
  {
    kind: "cert",
    title: "Google Project Management Professional Certificate",
    credential: "ISI5YF8CP0EE",
    isCredentialId: true,
    href: "certificates/Google_Project_Management_Coursera ISI5YF8CP0EE.pdf",
    image: "certificates/google-project-management-professional-certificate-.1.png",
    alt: "Google PM",
  },
  {
    kind: "cert",
    title: "Python boot camp for Programmers",
    credential: "UC-ea370278-f73e-4f08-be1f-c440b15927dc",
    isCredentialId: true,
    href: "certificates/Python_UC-ea370278-f73e-4f08-be1f-c440b15927dc.pdf",
    image: "certificates/python_bootcamp_zero_to_hero.png",
    alt: "Python boot camp for Programmers",
  },
];
