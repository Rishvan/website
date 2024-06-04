import { Link } from "react-router-dom";


export default function Maintenancepage() {
  return (
    <>
      <section className="text-white  test-style-normal font-bold h-screen bg-[url('assets/bg.jpg')] backGround flex flex-col justify-center items-center gap-3">
       
        <p className="">{ " Page Under Maintenance !! "}</p>
        <Link to="/website/">
          <button className="cardStyle w-max rounded-xl flex flex-col justify-center items-center p-2 px-4">
            Go Back
          </button>
        </Link>

      </section>
    </>
  );
}
