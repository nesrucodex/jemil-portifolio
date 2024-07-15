import { FaBus, FaCreditCard } from "react-icons/fa";
import { AiOutlineScan } from "react-icons/ai";
import { MdCake, MdMusicNote } from "react-icons/md";
import { ReactElement } from "react";

export type Service = {
  icon: ReactElement;
  title: string;
  description: string;
  linkText?: string;
  linkURL?: string;
};

export const SERVICES: Service[] = [
  {
    icon: <FaCreditCard className="size-[4rem] block text-primary" />,
    title: "Custom Card Design",
    description:
      "Our designers will work with you to create unique, eye-catching business, wedding, or personal cards that reflect your brand.",
    linkText: "Learn More",
    linkURL: "#",
  },
  {
    icon: <AiOutlineScan className="size-[4rem] block text-primary" />,
    title: "Paper Scanning",
    description:
      "Digitize your important documents, photos, and more with our high-quality scanning services. Get crisp, clear scans every time.",
    linkText: "Learn More",
    linkURL: "#",
  },
  {
    icon: <MdMusicNote className="size-[4rem] block text-primary" />,
    title: "Typing and Printing",
    description:
      "Need something typed up or printed? Our team of experts can handle all your document needs, from resumes to reports.",
    linkText: "Learn More",
    linkURL: "#",
  },
  {
    icon: <MdCake className="size-[4rem] block text-primary" />,
    title: "Wedding Card Design",
    description:
      "Create the perfect wedding invitations, save-the-dates, and other stationery with our custom design services.",
    linkText: "Learn More",
    linkURL: "#",
  },
  {
    icon: <FaBus className="size-[4rem] block text-primary" />,
    title: "Business Card Design",
    description:
      "Make a lasting impression with custom-designed business cards that showcase your brand and professionalism.",
    linkText: "Learn More",
    linkURL: "#",
  },
];
