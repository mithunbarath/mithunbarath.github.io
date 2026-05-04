import React from "react";
import Achievements from "../components/Achievements";
import Publications from "../components/Publications";
import PageShell from "./PageShell";

const AwardsPage: React.FC = () => (
  <PageShell>
    <Achievements />
    <Publications />
  </PageShell>
);

export default AwardsPage;
