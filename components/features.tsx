import classNames from "classnames";
import React from "react";
// import Image from "next/image";

type FeaturesProps = {
  children: React.ReactNode;
};

export const Features = ({ children }: FeaturesProps) => {
  return (
    <section className="flex flex-col items-center py-[12.8rem]">
      {children}
    </section>
  );
};

type FeaturesTitleProps = {
  children: React.ReactNode;
};

const FeaturesTitle = ({ children }: FeaturesTitleProps) => (
  <h2 className="text-gradient mb-11 text-center text-6xl md:text-8xl">
    {children}
  </h2>
);
// Compound Components

type MainFeatureProps = {
  image: string;
  text: string;
};

const MainFeature = ({ image, text }: MainFeatureProps) => {
  return (
    <div className="w-[78rem] max-w-[90%] text-center">
      <div className="relative z-10 rounded-[14px] backdrop-blur-[6px] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0)_120%)] before:p-[1px] before:[mask:linear-gradient(black,_black)_content-box_content-box,_linear-gradient(black,_black)] before:[mask-composite:xor] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[rgba(255,_255,_255,_0.15)] after:[mask:linear-gradient(black,transparent)]">
        <img src={image} alt="image" className="h-auto w-full" />
      </div>
      <p className="leading-tight text-white mx-auto w-[80%] text-4xl my-16">
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
    <div className="mb-[14rem] w-full gap-y-9 text-md text-primary-text grid grid-cols-3 text-md">
      {features.map(({ title, text, icon: Icon }) => (
        <div
          className="w-[25.6rem] [&_svg]:inline [&_svg]:fill-white [&_svg]:mr-[6px] [&_svg]:mb-[2px]"
          key={title}
        >
          <Icon />
          <span className="text-white"> {title}</span>
          {text}
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
    <div className="grid w-full gap-6 grid-cols-2 ">
      {features.map(({ title, text, image, imageClassName }) => (
        <div
          key={title}
          className="relative overflow-hidden bg-glass-gradient border border-transparent-white p-14 rounded-[4.8rem]"
        >
          <h3 className="mb-2 text-2xl text-white">{title}</h3>
          <p className="text-md text-primary-text max-w-[31rem]">{text}</p>
          <img
            className={classNames("absolute", imageClassName)}
            src={image}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

Features.Main = MainFeature;
Features.Title = FeaturesTitle;
Features.Grid = FeatureGrid;
Features.Cards = FeatureCards;
