import one from "./assets/1.webp";
import two from "./assets/2.webp";
import three from "./assets/3.webp";
import four from "./assets/4.webp";
import five from "./assets/5.webp";
import { GoArrowUpRight } from "react-icons/go";
import { motion, useScroll, useTransform } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import "./App.css";

const projects = [
  {
    title: "HACIEN",
    description:
      "HACIEN is a premium tequila brand supplying high-end hospitality and retail locations worldwide. They approached Phunk to undertake a comprehensive design project comprising web, packaging and marketing assets as well as 3D renders of their signature bottles.",
    image: one,
    tags: [
      "Webflow Development",
      "UI/UX Design",
      "Webflow Training",
      "Graphic Design",
    ],
  },
  {
    title: "Mobilleo",
    description:
      "Mobilleo is a SaaS solution making it easy for organisations to manage global business travel for their employees.  The team at Mobilleo approached Phunk to provide a range of design and illustration services, building on their existing brand, for use across their website and app.",
    image: two,
    tags: [
      "Splash Screens",
      "Illustrations",
      "Graphic Design",
      "Lottie Animations",
      "Webflow Training",
    ],
  },
  {
    title: "Mannson Freight",
    description:
      "Mannson Freight operates import and export consolidation services involving sea freight. They engaged Phunk to rebrand their corporate identity and develop a new higher-performance website, as well as a custom-built portal — MFS Pro— including ongoing support.",
    image: three,
    tags: [
      "Webflow Development",
      "UI/UX Design",
      "Webflow Training",
      "Graphic Design",
    ],
  },
  {
    title: "BOX iQ",
    description:
      "BOXiQ Performance Center in Dubai is a globally recognised boxing gym — hosting icons like Tyson Fury and Oleksandr Usyk. Working with Phunk, they now have a high-quality digital presence to match the prestige of their brand.",
    image: four,
    tags: [
      "Webflow Development",
      "UI/UX Design",
      "Webflow Training",
      "Graphic Design",
    ],
  },
  {
    title: "The Honest Watch Dealer",
    description:
      "The Honest Watch Dealer is a luxury watch expert renowned for his popular YouTube channel, as well as founding The Luxury Watch Company. Charlie (his real name) engaged Phunk to develop a brand identity for his channel, with applications across a range of merchandise.",
    image: five,
    tags: [
      "Webflow Development",
      "Visual Identity",
      "Packaging",
      "Apparel & Merchandise",
    ],
  },
];

function AnimatedImage({
  src,
  alt,
  index,
}: {
  src: string;
  alt: string;
  index: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * index]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="sticky top-52 -mb-[100vh] first:mb-9"
    >
      <img
        src={src}
        alt={alt}
        width={800}
        height={600}
        className="rounded-lg w-full object-cover"
      />
    </motion.div>
  );
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <div
          className={`sticky top-0 z-50 bg-black/95 backdrop-blur-sm transition-all duration-200 ${
            isScrolled ? "py-6" : "py-12"
          }`}
        >
          <div className="container px-4 mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold">
              Dive into the{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                work.
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl">
              As creatives ourselves, we know that what you really want to see
              is the work we've actually put live. Here's a showcase of some of
              our recent projects, across a range of sectors.
            </p>
          </div>
        </div>

        <div className="container px-4 mx-auto py-12 ">
          <div className="grid lg:grid-cols-2 gap-12  ">
            <div className="space-y-[00vh] first:pt-0 pt-[100vh] ">
              {projects.map((project, index) => (
                <AnimatedImage
                  key={index}
                  src={project.image}
                  alt={`${project.title} project showcase`}
                  index={index}
                />
              ))}
            </div>
            <div>
              {projects.map((project, index) => (
                <div key={index} className="h-[850px] flex items-center ">
                  <div className="lg:sticky lg:top-52  space-y-8 ">
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 rounded-full border border-cyan-400 text-sm hover:bg-cyan-400 hover:text-black transition-colors cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-2xl font-semibold">
                        {project.title}
                      </h2>
                      <p className="text-gray-400">{project.description}</p>
                      <a
                        href="#"
                        className="inline-flex items-center text-white  transition-colors underline underline-offset-8"
                      >
                        See full case study
                        <GoArrowUpRight className="ml-1 h-4 w-4 " />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
