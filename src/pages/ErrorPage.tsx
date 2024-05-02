import { Link } from "react-router-dom";


type Props ={
  title? : string
}

export default function ErrorPage(props:Props) {
  return (
    <>
      <section className="text-white  font-mono font-bold h-screen bg-gray-800 bg-blend-multiply bg-[url('assets/bg.jpg')] bg-cover flex flex-col justify-center items-center gap-3">
       
        
        <p className="text-2xl">{ props.title ?? "404 Page Not Found !! "}</p>
        <Link to="/website">
          <button className="cardStyle w-max rounded-xl flex flex-col justify-center items-center p-2 px-4">
            Go Back
          </button>
        </Link>

      </section>
    </>
  );
}
