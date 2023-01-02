import { Button, IconWrapper } from "../button";
import { Hero, HeroSubtitle, HeroTitle } from "../hero";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";

export const HomepageHero = () => {
  return (
    <Hero>
      <Button
        className="animate-fade-in"
        href="/"
        variant="secondary"
        size="small"
      >
        Sello 2023 Release-Built for scale <IconWrapper>→</IconWrapper>
      </Button>
      <HeroTitle className="animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem]">
        Elevate Your Online Presence
        <br className="hidden md:block" />
        with Our Elegant and Modern Web Design Solutions
      </HeroTitle>
      <HeroSubtitle className="animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem] ">
        Innovative online solutions for your business.
        <br className="hidden md:block" /> Static, Full Stack, and E-Commerce
        Web Applications .
      </HeroSubtitle>
      <Button
        className="animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-1rem]"
        href="/"
        variant="primary"
        size="large"
      >
        Get Started{" "}
        <IconWrapper>
          <ChevronIcon />
        </IconWrapper>
      </Button>
      <HeroImage />
    </Hero>
  );
};
