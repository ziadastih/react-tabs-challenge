import React, { useState } from "react";
import Title from "./components/Title";
import content from "./tabsData";
import Button from "./components/Button";
import DescriptionContent from "./components/DescriptionContent";

const App = () => {
  const [tabs, setTab] = useState(content);

  const contentMap = tabs.map((tab) => {
    return <DescriptionContent key={tab.id} tab={tab} />;
  });

  const activate = (title) => {
    setTab((prevTab) => {
      return prevTab.map((tab) => {
        return tab.title === title
          ? { ...tab, active: true }
          : { ...tab, active: false };
      });
    });
  };

  const btns = tabs.map((tab) => {
    return (
      <Button
        key={tab.id}
        value={tab.title}
        active={tab.active}
        activate={() => activate(tab.title)}
      />
    );
  });

  // =================body  ===========================

  return (
    <section className="section">
      <Title />

      <div className="about-center section-center">
        <article className="about-img">
          <img src="./hero-bcg.jpeg" alt="" />
        </article>
        <article className="about">
          <div className="btn-container">{btns}</div>
          <div className="about-content">{contentMap}</div>
        </article>
      </div>
    </section>
  );
};

export default App;
