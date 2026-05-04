import React from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import PageShell from "./PageShell";

const HomePage: React.FC = () => {
  return (
    <PageShell>
      <Hero />
      <Stats />
    </PageShell>
  );
};

export default HomePage;
