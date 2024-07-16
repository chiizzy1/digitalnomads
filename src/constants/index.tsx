import {
  Facebook,
  Instagram,
  MapPin,
  Clock3,
  MailPlus,
  Phone,
  Twitter,
} from "lucide-react";
import {
  aboutIcon1,
  aboutIcon2,
  aboutIcon3,
  aboutIcon4,
  case_icon,
  case_studies,
  features_icon1,
  features_icon2,
  features_icon3,
  partner1,
  partner3,
  partner4,
  process1,
  process2,
  process3,
  services_img,
  woman,
} from "@/assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    page: "/",
    delay: "300",
  },
  {
    id: "about",
    title: "About",
    page: "/about",
    delay: "750",
  },
  {
    id: "services",
    title: "Services",
    page: "/services",
    delay: "450",
  },
  {
    id: "products",
    title: "Products",
    page: "/products",
    delay: "600",
  },

  {
    id: "contact",
    title: "Contact",
    page: "/contact",
    delay: "900",
  },
];

export const quickLinks = [
  {
    title: "Quick Links",
    links: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About Us",
        link: "/about",
      },
      {
        name: "Case Studies",
        link: "/case-studies",
      },
      {
        name: "Contact Us",
        link: "/contact",
      },
    ],
  },
];

export const servicesLink = [
  {
    title: "Services",
    links: [
      {
        name: "Branding",
        link: "/services/1",
      },
      {
        name: "Branding",
        link: "/services/2",
      },
      {
        name: "Branding",
        link: "/services/3",
      },
      {
        name: "Branding",
        link: "/services/4",
      },
      {
        name: "Branding",
        link: "/services/5",
      },
      {
        name: "Branding",
        link: "/services/6",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: <Instagram size={14} strokeWidth={1.5} />,
    link: "https://instagram.com/swisskidsa?igshid=MzRlODBiNWFlZA==",
  },
  {
    id: "social-media-1.25",
    icon: <Facebook size={14} strokeWidth={1.5} />,
    link: "https://www.facebook.com/swisskidsacademyenugu?mibextid=ZbWKwL",
  },
  {
    id: "social-media-3",
    icon: <Twitter size={14} strokeWidth={1.5} />,
    link: "https://youtube.com/@swisskidstv2749",
  },
];

export const features = [
  {
    id: "features-1",
    title: "Email Marketing",
    description:
      "Our creative arts programs encompass visual arts, music, drama, and dance, encouraging our students to explore their artistic talents and embrace their imagination.",
    image: features_icon1,
    delay: 150,
  },
  {
    id: "features-2",
    title: "Media Marketing",
    description:
      "Our sports and physical education programs aim to instill a love for fitness, teamwork, and sportsmanship.",
    image: features_icon2,
    delay: 300,
  },
  {
    id: "features-3",
    title: "Content Writing",
    description:
      "Through various initiatives and programs, we help our students develop integrity, empathy, and resilience.",
    image: features_icon3,
    delay: 450,
  },
];

export const about = [
  {
    id: "about-1",
    title: "Brand Strategy",
    icon: aboutIcon1,
  },
  {
    id: "about-2",
    title: "Expert Team",
    icon: aboutIcon2,
  },
  {
    id: "about-3",
    title: "Fast Delivery",
    icon: aboutIcon3,
  },
  {
    id: "about-4",
    title: "Ongoing Report",
    icon: aboutIcon4,
  },
];

export const partnersLogo = [
  {
    id: "partner-3",
    logo: partner3,
  },
  {
    id: "partner-1",
    logo: partner1,
  },
  {
    id: "partner-4",
    logo: partner4,
  },
  {
    id: "partner-1",
    logo: partner1,
  },
  {
    id: "partner-3",
    logo: partner3,
  },
  {
    id: "partner-4",
    logo: partner4,
  },
  {
    id: "partner-1",
    logo: partner1,
  },
  {
    id: "partner-3",
    logo: partner3,
  },
];

export const services = [
  {
    id: "services-1",
    title: "Branding",
    description:
      "Our creative arts programs encompass visual arts, music, drama, and dance, encouraging our students to explore their artistic talents and embrace their imagination.",
    list: ["Identity", "Voice", "positioning", "Competitor Farm"],
    icon: features_icon1,
    bgImg: services_img,
    link: "/",
    delay: 300,
  },
  {
    id: "services-2",
    title: "Branding",
    description:
      "Our creative arts programs encompass visual arts, music, drama, and dance, encouraging our students to explore their artistic talents and embrace their imagination.",
    list: ["App Design", "Website Design", "Product Design", "UX Design"],
    icon: features_icon1,
    bgImg: services_img,
    link: "/",
    delay: 450,
  },
  {
    id: "services-3",
    title: "Branding",
    description:
      "Our creative arts programs encompass visual arts, music, drama, and dance, encouraging our students to explore their artistic talents and embrace their imagination.",
    list: ["Identity", "Voice", "positioning", "Competitor Farm"],
    icon: features_icon1,
    bgImg: services_img,
    link: "/",
    delay: 150,
  },
  {
    id: "services-4",
    title: "Branding",
    description:
      "Our creative arts programs encompass visual arts, music, drama, and dance, encouraging our students to explore their artistic talents and embrace their imagination.",
    list: ["Identity", "Voice", "positioning", "Competitor Farm"],
    icon: features_icon1,
    bgImg: services_img,
    link: "/",
    delay: 300,
  },
  {
    id: "services-5",
    title: "Branding",
    description:
      "Our creative arts programs encompass visual arts, music, drama, and dance, encouraging our students to explore their artistic talents and embrace their imagination.",
    list: ["App Design", "Website Design", "Product Design", "UX Design"],
    icon: features_icon1,
    bgImg: services_img,
    link: "/",
    delay: 450,
  },
  {
    id: "services-6",
    title: "Branding",
    description:
      "Our creative arts programs encompass visual arts, music, drama, and dance, encouraging our students to explore their artistic talents and embrace their imagination.",
    list: ["Identity", "Voice", "positioning", "Competitor Farm"],
    icon: features_icon1,
    bgImg: services_img,
    link: "/",
    delay: 150,
  },
];

export const process = [
  {
    id: "process1",
    image: process1,
    title: "Select Your Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    id: "process2",
    image: process2,
    title: "Work Smart Not Hard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    id: "process3",
    image: process3,
    title: "We've Got Your Back",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
];

export const caseStudy = [
  {
    id: "case-1",
    icon: case_icon,
    title: "Edmo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    framework: "React.Js",
    category: "StartUp",
    webLink: "www.example.com",
    link: "/",
    image: case_studies,
    list: [
      {
        key: "framework",
        value: "React",
      },
      {
        key: "category",
        value: "StartUp",
      },
      {
        key: "webLink",
        value: "www.example.com",
      },
    ],
  },
  {
    id: "case-1",
    icon: case_icon,
    title: "Edmo2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    framework: "React.Js",
    category: "StartUp",
    webLink: "www.example.com",
    link: "/",
    image: case_studies,
    list: [
      {
        key: "framework",
        value: "React",
      },
      {
        key: "category",
        value: "StartUp",
      },
      {
        key: "webLink",
        value: "www.example.com",
      },
    ],
  },
  {
    id: "case-1",
    icon: case_icon,
    title: "Edmo3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    framework: "React.Js",
    category: "StartUp",
    webLink: "www.example.com",
    link: "/",
    image: case_studies,
    list: [
      {
        key: "framework",
        value: "React",
      },
      {
        key: "category",
        value: "StartUp",
      },
      {
        key: "webLink",
        value: "www.example.com",
      },
    ],
  },
];

export const contactPageCards = [
  {
    id: "contact-1",
    icon: <MapPin size={48} />,
    title: "Address",
    content: [
      {
        line1: "2750 Open Space, Quadra Street Line Victoria, Canada",
        line2: "",
      },
    ],
  },
  {
    id: "contact-2",
    icon: <Clock3 size={48} />,
    title: "Working Hours",
    content: [
      {
        line1: "Open Saturday to Friday",
        line2: "From 06:00 PM to 20:00 AM",
      },
    ],
  },
  {
    id: "contact-3",
    icon: <MailPlus size={48} />,
    title: "Email Address",
    content: [
      {
        line1: "yoda@gmail.com",
        line2: "afriwice@tech.com",
      },
    ],
  },
  {
    id: "contact-4",
    icon: <Phone size={48} />,
    title: "Toll Free",
    content: [
      {
        line1: "+44 587 154756",
        line2: "+55 58715 4756",
      },
    ],
  },
];

export const customers = [
  {
    id: "customers1",
    name: "James Smith",
    occupation: "Sales Manager",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: features_icon1,
    star: "⭐⭐⭐",
  },
  {
    id: "customers2",
    name: "Jon Doe",
    occupation: "Sales Manager",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: features_icon1,
    star: "⭐⭐⭐",
  },
  {
    id: "customers3",
    name: "Jane Doe",
    occupation: "Sales Manager",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: features_icon1,
    star: "⭐⭐⭐",
  },
];

export const serviceDetails = [
  {
    id: "services",
    image: woman,
    content: [
      {
        title: "Partnership Ecosystem",
        details:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        list: [],
      },
      {
        title: "Analysises of Business",
        details:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        list: [
          { li: "Cost of supplies and equipment point" },
          { li: "Change the volume of expected of contact" },
          { li: "Bibend auctor nisi elit volume are so beguiled" },
          { li: "Quickly maximize timely deliverables" },
        ],
      },
      {
        title: "Benefit of Service",
        details:
          "No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
        list: [
          { li: "Cost of supplies and equipment point" },
          { li: "Change the volume of expected of contact" },
          { li: "Bibend auctor nisi elit volume are so beguiled" },
          { li: "Quickly maximize timely deliverables" },
        ],
      },
    ],
  },
];

export const servicesList = [
  {
    id: "services",
    service: "Branding",
    link: "/services/1",
  },
  {
    id: "services",
    service: "Design",
    link: "/services/2",
  },
  {
    id: "services",
    service: "Content",
    link: "/services/3",
  },
  {
    id: "services",
    service: "Strategy",
    link: "/services/4",
  },
  {
    id: "services",
    service: "Marketing",
    link: "/services/5",
  },
  {
    id: "services",
    service: "Technolgy",
    link: "/services/6",
  },
];

export const caseStudeyDetails = {
  id: "caseStudeyDetails",
  image: case_studies,
  icon: case_icon,
  title: "Edmo3",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",

  list: [
    {
      key: "framework",
      value: "React",
    },
    {
      key: "category",
      value: "StartUp",
    },
    {
      key: "webLink",
      value: "www.example.com",
    },
  ],
  content: [
    {
      title: "THE CHALLENGE",
      intro: "So, What Exactly is Positioning and Why Does It Matter?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      quote: {},
      images: [],
      list: [
        { li: "a console" },
        { li: "Two Joy-Con controllers that are detachable" },
        {
          li: "A grip that enables you to combine them into a single gamepad for play on the",
        },
        {
          li: "Two straps for turning the Joy-Cons into individual controllers",
        },
        {
          li: "A dock which you can use to connect your console to the television for traditional gameplay",
        },
      ],
    },
    {
      title: "THE SOLUTION",
      intro: "How We Defined Our Positioning: a Step-by-Step Overview",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      quote: {
        quote:
          "It is a long established fact that a reader will be distracted by the readable when content of a page when looking at its layout.",
        author: "Tom Cruise",
      },
      images: [],
      list: [
        { li: "a console" },
        { li: "Two Joy-Con controllers that are detachable" },
        {
          li: "A grip that enables you to combine them into a single gamepad for play on the",
        },
        {
          li: "Two straps for turning the Joy-Cons into individual controllers",
        },
        {
          li: "A dock which you can use to connect your console to the television for traditional gameplay",
        },
      ],
    },
    {
      title: "THE RESULT",
      intro: "When Content Of a Page When Looking at Its Layout",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      quote: {
        quote:
          "It is a long established fact that a reader will be distracted by the readable when content of a page when looking at its layout.",
        author: "Tom Cruise",
      },
      list: [],
      images: [services_img, services_img, services_img],
    },
  ],
};
