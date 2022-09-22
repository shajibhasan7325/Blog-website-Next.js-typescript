import type { NextPage } from "next";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Format from "../Layout/Format";

const Home: NextPage = () => {
  return (
    <>
      <Format>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </Format>
    </>
  );
};

export default Home;
