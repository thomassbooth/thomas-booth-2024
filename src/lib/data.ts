import Me from "@/components/Hover/Me";
import { project } from "./types";


export const aboutDescription: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus\
            non enim praesent elementum facilisis leo. Gravida rutrum quisque\
            non tellus. Quis vel eros donec ac odio tempor orci. Ullamcorper sit\
            amet risus nullam eget."
            
export const projects: project[] = [
  {
    id: 1,
    title: "Document RAG",
    description: [
      "Retrieval Augmented Generation system built in python with a frontend in Next.js.",
      "Uses advanced retrieval strategies (Multi query and RAG Fusion) to generate text.",
      "The system allows documents to be uploaded, upon upload documents are embedded",
      "Users can query the uploaded documents, the response includes relavent information to verify the response",
      "GuardRails was used to verify the result was valid and filter out innapropraite content",
    ],
    link: "https://github.com/thomassbooth/RAG-Document-Store",
    color: "#BECAC4",
    image: "/dg-screenshot.jpeg",
    tech: [
      "Langchain",
      "Python",
      "Next.js",
      "TypeScript",
      "Qdrant",
      "OpenAI",
      "GuardRails",
    ],
  },
  {
    id: 2,
    title: "URL Shortener",
    description: [
      "An API written in Golang to shorten URLs and redirects to the original URL.",
      "Uses concurrency with a worker pool to hanldle large numbers of requests by putting them on different threads.",
      "Exposes two endpoints: POST /shorten and GET /{shortened_url}",
      "Uses PostgresSQL to store the shortened URLs and the original URLs, uses transactions to ensure data integrity when working with concurrency.",
      "Provides a rate limiting service to prevent abuse of url shortens or redirects."
    ],
    link: "https://github.com/thomassbooth/URL-Shortener",
    color: "#6E807A",
    image: null,
    tech: ["Golang", "PostgresSQL", "Concurrency"],
  },
  {
    id: 3,
    title: "Log Aggregator",
    description: [
      "Log aggregation microservice written in Golang, collects logs from multiple sources and aggregates them into a single place.",
      "Uses MongoDB to store the logs, and uses a worker pool to handle the logs.",
      "Exposes three endpoints: POST /logs, GET /logs and GET /healthcheck",
      "Uses a workerpool to handle a large number of logs coming in from different sources.",
      "Provides a healthcheck endpoint to ensure the service is running, pool buffer is not full and workers are healthy.",
      "Implements a circuit breaker system to prevent the service from being overwhelmed.",
    ],
    link: "https://github.com/thomassbooth/Log-Producer-Aggregator",
    color: "#BECAC4",
    image: null,
    tech: ["Golang", "MongoDB", "Concurrency"],
  },
  {
    id: 4,
    title: "Danny Green",
    description: [
      "Creative concept site for Danny Green a professional Nature Photographer.",
      "Contains 3 pages: Home, Awards and Contact.",
      "Uses Framer Motion to animate the pages and components.",
    ],
    link: "https://danny-green.vercel.app/",
    color: "#6E807A",
    image: "/dg-screenshot.jpeg",
    tech: ["React", "Next.js", "Framer Motion", "TypeScript"],
  },
];
