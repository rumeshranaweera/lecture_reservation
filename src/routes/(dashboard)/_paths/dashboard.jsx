import { createFileRoute } from "@tanstack/react-router";
import DashboardLayout from "../../../components/DashboardLayout";

export const Route = createFileRoute("/(dashboard)/_paths/dashboard")({
  component: () => (
    <DashboardLayout>
      <div className="grid h-full place-items-center animate-pulse">
        <h2 className="text-5xl font-semibold text-center opacity-25">
          Reserve{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
            +
          </span>
        </h2>
      </div>
    </DashboardLayout>
  ),
});
