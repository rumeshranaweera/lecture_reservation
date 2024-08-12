import { createFileRoute } from "@tanstack/react-router";
import DashboardLayout from "../../../components/DashboardLayout";
const lectureHallDetails = [
  { name: "Lecture Hall 1", department: "department 1" },
  { name: "Lecture Hall 2", department: "department 2" },
  { name: "Lecture Hall 3", department: "department 3" },
];

export const Route = createFileRoute("/(dashboard)/_paths/lecturehalls")({
  component: () => (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {lectureHallDetails.map((lectureHall) => (
          <div
            key={lectureHall.name}
            className="border border-yellow-500 shadow-xl card bg-base-100"
          >
            <div className="card-body ">
              <h2 className="card-title">{lectureHall.name}</h2>
              <p>{lectureHall.department}</p>
              <div className="justify-end card-actions">
                <button className="rounded-full btn bg-primary-gradient">
                  Reserve
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  ),
});
