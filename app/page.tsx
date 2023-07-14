import BackCard from "./components/BackCard";
import Client from "./components/Client";
import FrontCard from "./components/FrontCard";

export default function Home() {
  return (
    <main className="desktop:grid desktop:grid-cols-3 w-full min-w-[360px] desktop:mx-20 desktop:mt-20 desktop:h-[810px] desktop:w-[1300px]">
      <div className="relative bg-white bg-mobile desktop:bg-leftPanel h-48 desktop:h-full ">
        <div className="absolute desktop:top-44 desktop:left-40 top-20 left-5">
          <FrontCard />
        </div>
        <div className="absolute desktop:top-[430px] desktop:left-[250px] top-4 right-4">
          <BackCard />
        </div>
      </div>
      <div className="desktop:col-span-2 bg-white">
        <div className="desktop:relative desktop:top-[25%] desktop:left-[35%] desktop:h-[100%] pt-10 mx-auto pb-72">
          <Client />
        </div>
      </div>
    </main>
  );
}
