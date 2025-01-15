import Introduce from "./components/Introduce";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Introduce />
      {/* <Timeline isShowMore = {true}/> */}
      <Projects />
    </>
  );
}
