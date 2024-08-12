import { createFileRoute } from "@tanstack/react-router";
import DashboardLayout from "../../../components/DashboardLayout";

export const Route = createFileRoute("/(dashboard)/_paths/dashboard")({
  component: () => (
    <DashboardLayout>Hello /dashboard/dashboard!</DashboardLayout>
  ),
});
