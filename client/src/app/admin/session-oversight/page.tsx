import StatCardSection from "../../components/admin-panel/StatCard/StatCardSection";
import { Comparison } from "../../components/admin-panel/StatCard/Comparison";
import Sessions from "@/app/components/admin-panel/StatCard/Sessions";

export default function SessionOversight(): JSX.Element {
  return (
    <div>
      <div className="px-4 md:px-1">
        <div className="mt-[20px] md:mt-[0px]">
          <StatCardSection />
        </div>
        <Comparison />
        <Sessions />
      </div>
    </div>
  );
}
