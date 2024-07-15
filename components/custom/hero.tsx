"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

import WeddingImage1 from "@/public/images/wedding-1.jpg";
import WeddingImage2 from "@/public/images/wedding-2.jpg";
import BusinessCard1 from "@/public/images/business-card-1.jpg";
import { Button } from "../ui/button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";

type Props = {};

const Hero = () => {
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <section className="flex flex-col justify-center gap-y-4">
            <div className="space-y-2">
              <h1 className="font-italiana text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Custom Cards and Services
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                From business cards to wedding invitations, our expert designers
                and printers will help you create stunning custom print
                materials that make a lasting impression.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="mt-7 flex items-center gap-5 self-start"
            >
              <Link href="#">
                <span>Get Started</span>
                <AiOutlineArrowRight className="animate-pulse" />
              </Link>
            </Button>
          </section>
          <section className="mt-8 grid aspect-[11/8] grid-cols-8 grid-rows-8 gap-10 md:mt-0 md:aspect-[11/9]">
            <div className="relative order-1 col-start-1 col-end-5 row-start-1 row-end-9 rotate-[5deg] transition-all duration-200 hover:z-[99]">
              <GridItem index={1} imageSrc={WeddingImage2} />
            </div>
            <div className="relative col-start-4 col-end-8 row-start-1 row-end-9 translate-x-[5rem] -rotate-[5deg] transition-all duration-200 hover:z-[99]">
              <GridItem index={2} imageSrc={WeddingImage1} />
            </div>
            <div className="relative col-start-2 col-end-8 md:row-start-5 row-start-4  row-end-9 translate-y-[2rem] transition-all duration-200 hover:z-[99]">
              <GridItem index={3} imageSrc={BusinessCard1} />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

type GridItemProps = {
  imageSrc: StaticImageData;
  alt?: string;
  index: number;
};
const GridItem = ({ imageSrc, alt, index }: GridItemProps) => {
  return (
    <motion.div
      className="h-full w-full cursor-pointer"
      initial={{ y: 0 }}
      animate={{ y: -15 }}
      transition={{
        type: "tween",
        duration: 0.5,
        repeat: Infinity,
        repeatType: "mirror",
        delay: 0.3 * index,
      }}
    >
      <Image
        src={imageSrc}
        fill
        alt={alt || "Hero"}
        placeholder="blur"
        className="-z-[99] h-full w-full rounded-md shadow-xl"
      />
      <span className="font-italiana absolute -left-3 -top-3 grid size-8 place-items-center rounded-full bg-primary/70 text-xl font-semibold text-white">
        {index}
      </span>
    </motion.div>
  );
};

export default Hero;
