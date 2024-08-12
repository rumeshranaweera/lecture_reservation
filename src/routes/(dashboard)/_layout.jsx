import { createFileRoute, Outlet } from "@tanstack/react-router";
import DashboardLayout from "../../components/DashboardLayout";

export const Route = createFileRoute("/(dashboard)/_layout")({
  component: () => (
    <DashboardLayout>
      <h1>layout</h1>
      <Outlet />
    </DashboardLayout>
  ),
});
