import { createFileRoute } from "@tanstack/react-router";
import DashboardLayout from "../../../components/DashboardLayout";

export const Route = createFileRoute("/(dashboard)/_paths/labhalls")({
  component: () => (
    <DashboardLayout>
      {
        <div className="grid place-items-center">
          <p className="text-xl font-bold">See Where your Labs are</p>
          <article className="m-1 shadow-xl card bg-base-100 w-96">
            <div className="card-body">
              <h2 className="card-title">Subject code - Subject name</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </article>
        </div>
      }
    </DashboardLayout>
  ),
});
