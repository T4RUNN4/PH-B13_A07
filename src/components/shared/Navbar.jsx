import { History, House, ChartSpline } from "lucide-react";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm px-6 md:px-20 py-4 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold text-[#244D3F]">
          <span className="text-[#1F2937] font-extrabold">Keen</span>Keeper
        </h1>
      </div>
      <div>
        <a className="btn btn-primary text-base font-semibold bg-green-800 text-white">
          <House /> Home
        </a>
        <a className="btn text-base font-semibold bg-white border-0 drop-shadow-white text-[#64748B]">
          <History /> Timeline
        </a>
        <a className="btn text-base font-semibold bg-white border-0  text-[#64748B]">
          <ChartSpline /> Status
        </a>
      </div>
    </div>
  );
}
