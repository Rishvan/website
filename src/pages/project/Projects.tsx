import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProjects } from "../../redux/slice/projectSlice";


function Projects() {
const dispatch = useDispatch();
const state : any = useSelector((state) => state);


useEffect(()=>{
  dispatch(getProjects() as any);
},[])


  

  if(!state.project.data){
    return <></>;
  }


  return (
    <section className="font-mono backGround  bg-[url('assets/bg.jpg')] px-20 pt-12">
      <p className="text-white  text-3xl font-bold font-mono py-4 pb-8 items-center">
        {"Projects"}
      </p>

      <div className="w-full flex sm:flex-col sm:items-center gap-3 text-white pb-8">
        {state?.project.data.data.data.map((item: Project, i :number) => {
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
                  <p className="cardStyle bg-blue-900 rounded px-2">{item.languages?.join(",")}</p>
              </div>
            </div>
          );
        })}
      </div>
      
    </section>
  );
}

export default Projects;
