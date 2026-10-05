export interface Cert {
  kind: "cert";
  title: string;
  /** Shown under the title, e.g. a credential ID. */
  credential: string;
  /** When true the credential is prefixed with "Credential ID". */
  isCredentialId: boolean;
  group: "AI & technical" | "Design & professional";
  issued: string;
  /** Certificate file or page. */
  href: string;
  /** One card for a series: a link per course certificate (replaces the single link). */
  parts?: { label: string; href: string }[];
  /** Issuer's verification page, when there is one. */
  verify?: string;
  image: string;
  alt: string;
}

export interface Education {
  kind: "education";
  school: string;
  location?: string;
  degree: string;
  years: string;
  score?: string;
  /** Omitted for programmes without a logo asset; a monogram is shown instead. */
  logo?: string;
  monogram?: string;
  alt: string;
}

export type EduCertItem = Cert | Education;

// Order follows the CV: AI & technical first, then design & professional.
export const eduCertItems: EduCertItem[] = [
  {
    kind: "cert",
    title: "Generative AI in Adobe Creative Cloud",
    credential: "BSPPQXXEJ40S",
    isCredentialId: true,
    group: "AI & technical",
    issued: "Nov 2025",
    href: "certificates/Adobe_GenAI_Content_creation_Coursera 2G0ZU16JFPR5.pdf",
    verify: "https://www.coursera.org/account/accomplishments/verify/BSPPQXXEJ40S",
    image: "certificates/adobe-genai.png",
    alt: "Adobe Gen AI",
  },
  {
    kind: "cert",
    title: "ComfyUI workflow creation and diffusion models mastery",
    credential: "UC-d4ae5b47-24e5-47c6-b538-434f9e1d4874",
    isCredentialId: true,
    group: "AI & technical",
    issued: "Jan 2026",
    href: "certificates/GenAI with ComfyUI_UC-d4ae5b47-24e5-47c6-b538-434f9e1d4874.pdf",
    verify: "https://www.udemy.com/certificate/UC-d4ae5b47-24e5-47c6-b538-434f9e1d4874/",
    image: "certificates/Udemy.png",
    alt: "Gen AI with ComfyUI",
  },
  {
    kind: "cert",
    title: "AI Workshop: Prompt Engineering and Text-to-Image Generation",
    credential: "LinkedIn Learning",
    isCredentialId: false,
    group: "AI & technical",
    issued: "Sep 2025",
    href: "https://www.linkedin.com/learning/certificates/2692fe2adbbf5aeb5e5c7a7fea8ae898c73b3f045d69df22dbac9acf4a85f94d",
    image: "icons/social/linkedin.png",
    alt: "LinkedIn Learning",
  },
  {
    kind: "cert",
    title: "Essentials of Prompt Engineering",
    credential: "AWS Certified",
    isCredentialId: false,
    group: "AI & technical",
    issued: "Sep 2025",
    href: "certificates/Seethat_essential of prompt engineering.pdf",
    image: "certificates/aws.png",
    alt: "aws-essential-of-prompt-engineering",
  },
  {
    kind: "cert",
    title: "Generative AI Foundations",
    credential: "AWS Certified",
    isCredentialId: false,
    group: "AI & technical",
    issued: "Sep 2025",
    href: "certificates/Gen AI Foundations.pdf",
    image: "certificates/aws.png",
    alt: "aws-gen-ai-foundations",
  },
  {
    kind: "cert",
    title: "Generative AI for Business and Professionals",
    credential: "4d2155f4558d40aabbaa17509e7c62ab",
    isCredentialId: true,
    group: "AI & technical",
    issued: "Jul 2026",
    href: "https://courses.emeritus.skillsnetwork.site/certificates/4d2155f4558d40aabbaa17509e7c62ab",
    image: "certificates/IBM.png",
    alt: "IBM AI",
  },
  {
    kind: "cert",
    title: "Full stack generative AI & Agentic AI with Python",
    credential: "UC-150023c4-6689-4d8f-be9d-510b7aa588ce",
    isCredentialId: true,
    group: "AI & technical",
    issued: "Apr 2026",
    href: "certificates/Full stack generative AI & Agentic AI with Python_UC-150023c4-6689-4d8f-be9d-510b7aa588ce.pdf",
    verify: "https://www.udemy.com/certificate/UC-150023c4-6689-4d8f-be9d-510b7aa588ce/",
    image: "certificates/Udemy.png",
    alt: "Udemy Full stack generative AI & Agentic AI with Python",
  },
  {
    kind: "cert",
    title: "Python boot camp for Programmers",
    credential: "UC-ea370278-f73e-4f08-be1f-c440b15927dc",
    isCredentialId: true,
    group: "AI & technical",
    issued: "Nov 2025",
    href: "certificates/Python_UC-ea370278-f73e-4f08-be1f-c440b15927dc.pdf",
    verify: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-ea370278-f73e-4f08-be1f-c440b15927dc.pdf",
    image: "certificates/python_bootcamp_zero_to_hero.png",
    alt: "Python boot camp for Programmers",
  },
  {
    kind: "cert",
    title: "Google UX Design Professional Certificate",
    credential: "7BP7JEOKWLV6",
    isCredentialId: true,
    group: "Design & professional",
    issued: "Dec 2025",
    href: "certificates/Google_UX_Design_Coursera 7BP7JEOKWLV6.pdf",
    verify: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/7BP7JEOKWLV6",
    image: "certificates/google-ux-design-professional-certificate-v-3.png",
    alt: "Google UX",
  },
  {
    kind: "cert",
    title: "Google Project Management Professional Certificate",
    credential: "ISI5YF8CP0EE",
    isCredentialId: true,
    group: "Design & professional",
    issued: "Nov 2025",
    href: "certificates/Google_Project_Management_Coursera ISI5YF8CP0EE.pdf",
    verify: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/ISI5YF8CP0EE",
    image: "certificates/google-project-management-professional-certificate-.1.png",
    alt: "Google PM",
  },
  {
    kind: "cert",
    title: "Lean Six Sigma — DMAIC series (3 courses)",
    credential: "LinkedIn Learning",
    isCredentialId: false,
    group: "Design & professional",
    issued: "May 2025",
    href: "https://www.linkedin.com/learning/certificates/afbe4a00159b3a9e5c6dcd5f5f8729a0a9ef64e10c02cf8be4b623d8e021bcd6",
    parts: [
      { label: "Foundations", href: "https://www.linkedin.com/learning/certificates/afbe4a00159b3a9e5c6dcd5f5f8729a0a9ef64e10c02cf8be4b623d8e021bcd6" },
      { label: "Define & Measure", href: "https://www.linkedin.com/learning/certificates/8be92a4adea987a52e6d14a746502f4d5e07939343913f676714cc46e6f83be2" },
      { label: "Analyze, Improve & Control", href: "https://www.linkedin.com/learning/certificates/2872d027a814dc6c82d69480ae156301588a81652d92b91ff8a49f35fe459818" },
    ],
    image: "icons/social/linkedin.png",
    alt: "LinkedIn Learning",
  },
  {
    kind: "education",
    school: "IIT Madras Pravartak",
    degree: "Professional Certificate Programme in Agentic AI and Applications",
    years: "In progress · 2026",
    monogram: "IIT",
    alt: "IIT Madras Pravartak",
  },
  {
    kind: "education",
    school: "ICAT - Design and Media College",
    location: "Bengaluru, Karnataka, India",
    degree: "Postgraduate Diploma, Multimedia Technologies",
    years: "2014 - 2015",
    score: "82%",
    logo: "images/Icat_logo.png",
    alt: "icat-logo",
  },
  {
    kind: "education",
    school: "Jawaharlal Nehru Technological University",
    location: "Kakinada, Andhra Pradesh, India",
    degree: "B.Tech, Electronics and Communications Engineering",
    years: "2010 - 2014",
    score: "68.8%",
    logo: "images/jntuk-logo.png",
    alt: "jntu-logo",
  },
];

export const certs = eduCertItems.filter((i): i is Cert => i.kind === "cert");
export const education = eduCertItems.filter((i): i is Education => i.kind === "education");
