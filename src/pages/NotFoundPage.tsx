import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import PageShell from "./PageShell";

const NotFoundPage: React.FC = () => (
  <PageShell>
    <section className="section text-center">
      <div className="font-display text-[120px] sm:text-[180px] leading-none font-black tracking-tight text-gradient">
        404
      </div>
      <h1 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-ink-900">
        That page wandered off.
      </h1>
      <p className="mt-3 text-ink-500 max-w-md mx-auto">
        The link is broken or the page never existed. Head back home and we'll
        keep going.
      </p>
      <Link to="/home" className="btn-primary mt-7 inline-flex">
        <FiArrowLeft /> Back to home
      </Link>
    </section>
  </PageShell>
);

export default NotFoundPage;
