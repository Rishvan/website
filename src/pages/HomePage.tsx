import dataJson from "../data/data.json";
import { Link } from "react-router-dom";
import _ from 'lodash';

const data: Portfolio = dataJson;

export default function Home() {
  return (
    <>
      <section className="backGround test-style-normal bg-[url('assets/bg.jpg')]  ">
        <div className="text-white   flex gap-2 sm:gap-5 flex-col justify-end px-20 sm:px-4 h-2/4 sm:items-center lg:items-start">
          <p className="sm:text-5xl lg:text-5xl silkscreen-regular ">{_.spl(data.name) ?? ""}</p>

          <ul className={"flex sm:flex-col sm:w-full sm:text-lg sm:items-center gap-6  sm:gap-0 pt-2"}>
            {data.designations.map((designation: string, i) => {
              return (
                <li className={`${i == 0 ? "" : "list-disc sm:list-none"}`} key={i}>
                  {designation}
                </li>
              );
            })}
          </ul>

          <ul className="flex gap-8 pt-2 sm:w-full sm:items-center sm:justify-center sm:pt-4">
            <li>
              {data.social_icons.map((item: SocialTcons, i) => {
                return (
                  <Link to={`${item.url}`} target="_blank"  key={i} >
                
                    <button className="w-8 aspect-square mx-2 hover:scale-105 transition-transform">
                      <img
                        src={`assets/icons/${item.icon}.svg`}
                        alt={item.icon}
                        />
                    </button>
                        
                  </Link>
                );
              })}
            </li>
          </ul>
        </div>
        <div className="p-2 pl-20 sm:px-8 flex gap-3 overflow-auto  sm:flex-col">
          {data.cards.map((card: Cards, i) => {
            return (
              <>
                <Link to={`/${card.url}`} key={i}>
                  <button className="w-max sm:w-full hover:scale-105 test-style-normal transition-transform  rounded-xl flex flex-col justify-center items-center p-4  cardStyle">
                    <p className=" text-white  font-bold">
                      {card.title}
                    </p>
                  </button>
                </Link>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}
