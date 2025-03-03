import BannerCard from "./BannerCard";
import BannerTitle from "./BannerTitle";

export default function AuthorBanner() {
  return (
    <div className="relative isolate px-6 lg:px-8">
      <div
        className="mx-auto max-w-5xl py-4 sm:py-16 lg:py-8"
        style={{ paddingBottom: 0 }}
      >
        {/* <ColorEffect /> */}
        <div className="flex flex-col sm:flex-row">
        <BannerTitle />
        <BannerCard />
        </div>
      </div>
    </div>
  );
}
