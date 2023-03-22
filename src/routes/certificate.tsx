import Tilt from "react-parallax-tilt";
import { useParams } from "react-router-dom";

export const Certificate = () => {
  const params = useParams()
  return (
    <Tilt gyroscope className="z-10">
      <div className="md:w-[750px] sm:w-[600px] w-[420px] relative rounded-lg grid place-items-center overflow-hidden">
        <p className="absolute font-google md:text-[40px] text-lg sm:text-[30px] text-[#7f858c] font-bold md:mt-20 sm:mt-16 mt-12">
          {params.studentId}
        </p>
        <img
          className="w-full pointer-events-none h-full object-cover"
          src="/assets/poweron_cert.png"
          alt="PowerOn Certificate"
        />
      </div>
    </Tilt>
  );
};