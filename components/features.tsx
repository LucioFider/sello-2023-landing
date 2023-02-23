import classNames from "classnames";
import React from "react";
import { Container } from "./container";
// import Image from "next/image";

type FeaturesProps = {
  children: React.ReactNode;
  color: string;
};

export const Features = ({ children, color }: FeaturesProps) => {
  return (
    <section
      className="flex flex-col items-center py-[12.8rem]"
      style={{ "--feature-color": color } as React.CSSProperties}
    >
      <Container className="my-[25.2rem]">{children}</Container>
    </section>
  );
};

// Compound Components

type MainFeatureProps = {
  image: string;
  text: string;
  title: React.ReactNode;
};

const MainFeature = ({ image, text, title }: MainFeatureProps) => {
  return (
    <div className="w-[78rem] max-w-[90%] text-center">
      <div className="relative before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(--feature-color),0.1),transparent)]">
        <h2 className="text-gradient mb-11 text-center text-6xl md:text-8xl">
          {title}
        </h2>
        <div className="relative z-10 rounded-[14px] backdrop-blur-[6px] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0)_120%)] before:p-[1px] before:[mask:linear-gradient(black,_black)_content-box_content-box,_linear-gradient(black,_black)] before:[mask-composite:xor] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[rgba(255,_255,_255,_0.15)] after:[mask:linear-gradient(black,transparent)]">
          <img src={image} alt="image" className="h-auto w-full" />
        </div>
      </div>
      <p className="leading-tight text-white mx-auto md:w-[80%] text-2xl  md:text-4xl my-16">
        {text}
      </p>
      <hr className="mb-[7.2rem] h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]" />
    </div>
  );
};

type FeatureGridProps = {
  features: {
    icon: React.FunctionComponent;
    title: string;
    text: string;
  }[];
};

const FeatureGrid = ({ features }: FeatureGridProps) => {
  return (
    <div className="mb-16 grid w-full grid-cols-2 place-items-center gap-y-9 text-sm text-primary-text md:mb-[14rem] md:grid-cols-3 md:text-md">
      {features.map(({ title, text, icon: Icon }) => (
        <div
          className="max-w-[25.6rem] [&_svg]:mb-[4px] [&_svg]:fill-white md:[&_svg]:mr-[6px] md:[&_svg]:mb-[2px] md:[&_svg]:inline"
          key={title}
        >
          <Icon />
          <span className="block text-white md:inline">{title}</span> {text}
        </div>
      ))}
    </div>
  );
};

type FeatureCardsProps = {
  features: {
    image: string;
    imageClassName: string;
    title: string;
    text: string;
  }[];
};

const FeatureCards = ({ features }: FeatureCardsProps) => {
  return (
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
      {features.map(({ title, text, image, imageClassName }) => (
        <div
          key={title}
          className="relative aspect-[1.1/1] overflow-hidden rounded-[2.4rem] border border-transparent-white bg-[radial-gradient(ellipse_at_center,rgba(var(--feature-color),0.15),transparent)] py-6 px-8 before:pointer-events-none before:absolute before:inset-0 before:bg-glass-gradient md:rounded-[4.8rem] md:p-14"
        >
          <h3 className="mb-2 text-2xl text-white">{title}</h3>
          <p className="max-w-[31rem] text-md text-primary-text">{text}</p>
          <img
            className={classNames("absolute max-w-none", imageClassName)}
            src={image}
          />
        </div>
      ))}
    </div>
  );
};

Features.Main = MainFeature;

Features.Grid = FeatureGrid;
Features.Cards = FeatureCards;
