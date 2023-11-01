import dynamic from "next/dynamic";
import TableComponent from "./chart/page";

export default function Home() {
  const BarCSR = dynamic(() => import("./chart/Bar"), { ssr: false });
  const PieCSR = dynamic(() => import("./chart/Pie"), { ssr: false });
  return (
    <div className="m-3">
      <div className="lg:flex items-center justify-between">
        <BarCSR />
        <PieCSR />
      </div>
      <TableComponent searchParams={{}} />
    </div>
  );
}
