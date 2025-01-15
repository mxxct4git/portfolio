import Introduce from "./components/Introduce";
import Projects from "./components/Projects";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <>
      <Introduce />
      {/* <Timeline isShowMore = {true}/> */}
      <Posts />
      <Projects />
    </>
  );
}
