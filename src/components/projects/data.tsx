import { RiExternalLinkLine } from "react-icons/ri";
import type { TimelineEntry } from "../ui/timeline";

export const sectionHeading = {
  title: "What I'm working on",
  subTitle: "Let's dive into what I've been up to.",
};

export const timelineData: TimelineEntry[] = [
  {
    title: "Sustena",
    projectUrls: {
      repo: {
        owner: "Vaspp Technologies",
        name: "Sustena",
        showStarCount: false,
      },
    },
    imageUrl: "/images/sustena.png",
    description: `Sustena can be used for Sustainability Reporting and was initially planned for the european market. CSRD REPORTING AFTER ESRS. Corporate Sustainability Reporting Directive after European Sustainability Reporting Standards. I heard that we will be implementing Indian Datapoints also for BSRS reporting.`,
    tech: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "shadcn/ui",
      "Supabase",
      "AWS",
      "Docker",
      "Supabase Postgres",
    ],
    cards: {
      a: {
        title: "Comprehensive Reporting Tool",
        text: `Built with TypeScript, Next.js and Supabase, this app offers a powerful, scalable platform for enhancing reporting process. Companies begin by conducting a double materiality assessment to identify key material topics and survey relevant stakeholders.`,
      },
      b: {
        title: "Easy Integration with Your DB of Choice",
        text: `Effortlessly integrate with your preferred database, including
              Postgres, SQL and SQLite for local use. This app offers a
              flexible and scalable backend setup, making it easy to adapt and
              manage your data needs as you develop and expand your project.`,
      },
    },
  },
];
