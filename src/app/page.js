import TopCharts from "@/app/components/TopCharts";
import GenreGrid from "@/app/components/GenreGrid";


export default function Home() {
  return (
    <>
      {/* GenreGrid stays in flow, but visually behind using z-index */}
      <div className="relative z-0">
        <GenreGrid />
      </div>

      {/* Top charts section on top */}
      <div className="relative z-10">
        <TopCharts />
      </div>

     
    </>
  );
}
