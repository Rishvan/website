import dataJson from "../../../public/data/data.json";
// import { Link } from "react-router-dom";

const data: Portfolio = dataJson;

function Projects() {
  return (
    <section className="font-mono backGround  bg-[url('assets/bg.jpg')] px-20 pt-12">
      <p className="text-white  text-3xl font-bold font-mono py-4 pb-8 items-center">
        {"Projects"}
      </p>

      <div className="w-full flex sm:flex-col sm:items-center gap-3 text-white pb-8">
        {data.projects.map((item: Project, i) => {
          return (
            <div
              className="sm:w-full  sm:max-w-max  max-w-[300px] cardStyle rounded-lg p-3"
              key={i}
            >
              <img className="aspect-video   sm:h-auto w-full rounded-lg object-cover" src={`/assets/projects/${item.url}.jpg`} alt={item.title} />
              <div className="w-full flex flex-col rounded-xl justify-between items-start p-2 px-4">
                <details>
                  <summary>{item.title}</summary>
                  <p>{item.description  ?? " "}</p>
                </details>
                  <p className="cardStyle bg-blue-900 rounded px-2">{item.lagunages + " "}</p>
              </div>
            </div>
          );
        })}
      </div>
      
    </section>
  );
}

export default Projects;
