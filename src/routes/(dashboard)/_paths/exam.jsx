import { createFileRoute } from "@tanstack/react-router";
import DashboardLayout from "../../../components/DashboardLayout";

export const Route = createFileRoute("/(dashboard)/_paths/exam")({
  component: () => (
    <DashboardLayout>
      <div className="grid place-items-center">
        <div className="shadow-xl card bg-base-100 w-96">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <label className="w-full max-w-xs form-control">
              <div className="label">
                <span className="label-text">What is your name?</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="w-full max-w-xs input input-bordered"
              />
            </label>
          </div>
        </div>
      </div>
    </DashboardLayout>
  ),
});
