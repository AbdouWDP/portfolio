import WebsiteCard from "./WebsiteCard";
import { websites } from "./websites";

function Portfolio() {
  return (
    <>
      <section className="portfolio w-screen h-screen" id="portfolio">
        <article className="w-4/5 h-full m-auto">
          <div className="h-1/5">
            <div className="text-4xl text-title font-bold text-center">
              <h1>Portfolio</h1>
            </div>
            <div className="text-text text-center my-2">
              <p>Most recent work</p>
            </div>
          </div>
          <div className="websites w-4/5 h-3/4 overflow-scroll m-auto flex flex-wrap justify-center gap-10">
            {websites.map((website) => {
              return <WebsiteCard website={website} />;
            })}
          </div>
        </article>
      </section>
    </>
  );
}

export default Portfolio;
