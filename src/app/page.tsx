import AuthorBanner from "./components/authorBanner/AuthorBanner";
import TransitionBanner from "./components/TransitionBanner";
import Projects from "./components/Projects";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <>
      <AuthorBanner />
      <TransitionBanner />
      {/* <Timeline isShowMore = {true}/> */}
      <Posts />
      <Projects />
    </>
  );
}
