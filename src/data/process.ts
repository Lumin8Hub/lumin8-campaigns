import { ClipboardList, PenTool, Code, CheckCircle, Rocket } from "lucide-react";

export const processSteps = [
  {
    id: 1,
    title: "Book & Brief (Day 1)",
    description: "Fill out our structured intake form and provide your mandatory assets (logos, brand colors, and photos). Pay your 50% deposit to enter the queue. This fast timeline starts only when we have everything we need.",
    icon: ClipboardList,
  },
  {
    id: 2,
    title: "Content & Copy (Day 2-3)",
    description: "We use your intake form to draft your website copy, then refine it with human marketing expertise. We send it for your review. *Requires immediate, next-day feedback to stay on schedule.*",
    icon: PenTool,
  },
  {
    id: 3,
    title: "Build & Design (Day 4-5)",
    description: "Your custom React website comes to life. We build a mobile-responsive, blazing-fast site and deploy it to a staging URL for you to see.",
    icon: Code,
  },
  {
    id: 4,
    title: "Review & Revise (Day 6)",
    description: "You get one consolidated round of revisions for text tweaks or image swaps. To hit our 7-day launch, you must know exactly what you want and provide prompt feedback.",
    icon: CheckCircle,
  },
  {
    id: 5,
    title: "Launch (Day 7)",
    description: "You approve, pay the balance, and we flip the switch. Your site goes live on your domain.",
    icon: Rocket,
  }
];
