import { getTopChartsDeezer } from "@/lib/deezer";
import TopChartsClient from "./TopChartsClient";

export default async function TopCharts() {
  const topTracks = await getTopChartsDeezer();
  return <TopChartsClient topTracks={topTracks} />;
}