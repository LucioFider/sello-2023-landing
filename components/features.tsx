type FeaturesProps = {
  title: string;
  children: React.ReactNode;
};

export const Features = ({ title, children }: FeaturesProps) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
// Compound Components

const MainFeature = () => {
  return <div>Big image</div>;
};

const FeatureGrid = () => {
  return <div>Feature grid</div>;
};

const FeatureCards = () => {
  return <div>Feature cards</div>;
};

Features.Main = MainFeature;
Features.Grid = FeatureGrid;
Features.Cards = FeatureCards;
