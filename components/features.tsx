import React from "react";

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
      <div className="bg-[linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3))]">
        <img src={image} alt="image" className="h-auto w-full " />
      </div>
      <p className="leading-tight text-white mx-auto w-[80%] text-4xl mt-16">
        {text}
      </p>
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
  return <div>Feature grid</div>;
};

type FeatureCardsProps = {
  features: {
    image: string;
    title: string;
    text: string;
  }[];
};

const FeatureCards = ({ features }: FeatureCardsProps) => {
  return <div>Feature cards</div>;
};

Features.Main = MainFeature;
Features.Title = FeaturesTitle;
Features.Grid = FeatureGrid;
Features.Cards = FeatureCards;
