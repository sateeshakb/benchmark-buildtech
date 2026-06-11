import { BadgeCheck } from "lucide-react";
import { GanttChart } from "lucide-react";
import { Search } from "lucide-react";
import { Database } from "lucide-react";
import { Scale } from "lucide-react";
import { Store } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { Building2 } from "lucide-react";
import { ScrollText } from "lucide-react";
import { Handshake } from "lucide-react";
import { KeyRound } from "lucide-react";
import { Home } from "lucide-react";
import { Building } from "lucide-react";
import { Hammer } from "lucide-react";

export const Constants = {
  aboutSection: {
    ourVision: `Our mission is to create premium interiors through disciplined execution, quality craftsmanship, and transparent processes.

    We are committed to understanding client’s needs, delivering refined, functional designs, and ensuring reliability and value`,

    ourMission: `To set a benchmark in the interior fit-out industry by delivering high-end, thoughtfully designed spaces.

    Every aspect of design consistently exceed expectations and elevate standards with every new project uniquely.`,
  },
};

export const ServiceCardData = {
  interiorServices: [
    {
      id: 1,
      icon: <Hammer size={40} className="text-secondary-500" />,
      title: "Construction & Fit-out Upgrades",
      text: "Renovation, refurbishment, and infrastructure enhancements.",
    },
    {
      id: 2,
      icon: <Building size={40} className="text-secondary-500" />,
      title: "Commercial & Corporate Interiors",
      text: "End-to-end fit-out solutions for offices, experience centers, and business environments delivered with precision and compliance.",
    },
    {
      id: 3,
      icon: <BadgeCheck size={40} className="text-secondary-500" />,
      title: "Cost & Quality Management",
      text: "Transparent cost control, value engineering, and strict quality assurance across all stages.",
    },
    {
      id: 4,
      icon: <Home size={40} className="text-secondary-500" />,
      title: "Luxury Residential Interior Fit-Outs",
      text: "Premium interior execution for villas, apartments, and private residences with refined finishes and long-term durability.",
    },
    {
      id: 5,
      icon: <KeyRound size={40} className="text-secondary-500" />,
      title: "Turnkey Interior Solutions",
      text: "Single-point responsibility from planning to handover, ensuring seamless coordination and execution.",
    },
    {
      id: 6,
      icon: <GanttChart size={40} className="text-secondary-500" />,
      title: "Project Management Services",
      text: "Structured planning, scheduling, budgeting, execution control, and quality oversight.",
    },
  ],

  advisoryServices: [
    {
      id: 1,
      icon: <Search size={40} className="text-secondary-500" />,
      title: "Property Search & Market Advisory",
      text: "Guidance on suitable localities, asset types, and opportunities based on budget and requirements.",
    },
    {
      id: 2,
      icon: <Handshake size={40} className="text-secondary-500" />,
      title: "Commercial Negotiation",
      text: "Negotiation of rent, deposits, escalation clauses, and commercial terms.",
    },
    {
      id: 3,
      icon: <Database size={40} className="text-secondary-500" />,
      title: "Data Collection & Property Evaluation",
      text: "Site inspections, data capture, photo reports, and comparative analysis.",
    },
    {
      id: 4,
      icon: <Scale size={40} className="text-secondary-500" />,
      title: "Legal & Document Verification",
      text: "Verification of ownership, statutory approvals, and compliance documentation.",
    },
    {
      id: 5,
      icon: <ScrollText size={40} className="text-secondary-500" />,
      title: "Agreement Advisory",
      text: "Review and explanation of lease terms, conditions, and obligations.",
    },
  ],

  whoWeServeData: [
    {
      id: 1,
      icon: <Home size={40} className="text-warm-900" />,
      title: "New Homeowners",
      text: "Individuals and families seeking premium interior fit-out solutions for apartments, villas, and private residences.",
    },
    {
      id: 2,
      icon: <Building2 size={40} className="text-warm-900" />,
      title: "Businesses & Corporates",
      text: "Organizations looking for professional interior fit-out services for offices, experience centers, and commercial spaces.",
    },
    {
      id: 3,
      icon: <KeyRound size={40} className="text-warm-900" />,
      title: "Property Owners & Landlords",
      text: "Individuals and families seeking premium interior fit-out solutions for apartments, villas, and private residences.",
    },
    {
      id: 4,
      icon: <Store size={40} className="text-warm-900" />,
      title: "Retail & Commercial Establishments",
      text: "Retail stores, showrooms, cafés, and commercial outlets requiring efficient, durable, and brand-aligned interiors.",
    },
    {
      id: 5,
      icon: <TrendingUp size={40} className="text-warm-900" />,
      title: "Investors & Occupiers",
      text: "Clients seeking structured advisory for property identification, leasing decisions, and space planning.",
    },
  ],
};

export const TestimonialsData = [
  {
    id: 1,
    startCount: 4,
    reviewerName: "Priyanka Reddy",
    reviewText:
      "Benchmark Buildtech transformed our 3BHK into something we never imagined. Every detail was handled with precision and the team was incredibly professional throughout.",
  },
  {
    id: 2,
    startCount: 4,
    reviewerName: "Vikram",
    reviewText:
      "Outstanding project management and quality of work. They finished on time, within budget, and the result speaks for itself. Highly recommend!",
  },
  {
    id: 3,
    startCount: 5,
    reviewerName: "Priya Sharma",
    reviewText:
      "From the initial consultation to the final handover, the experience was seamless. Our office space looks absolutely stunning and our clients are always impressed.",
  },
  {
    id: 4,
    startCount: 5,
    reviewerName: "Nitesh",
    reviewText:
      "We were skeptical at first but Benchmark Buildtech exceeded every expectation. Our villa interiors are luxurious yet functional. Worth every rupee!",
  },
];
