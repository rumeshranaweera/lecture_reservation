import { createFileRoute } from "@tanstack/react-router";
import DashboardLayout from "../../../components/DashboardLayout";

const lectureHallDetails = [
  { name: "Lecture Hall 1", location: "Lecture Hall 1 location" },
  { name: "Lecture Hall 2", location: "Lecture Hall 2 location" },
  { name: "Lecture Hall 3", location: "Lecture Hall 3 location" },
];

export const Route = createFileRoute("/(dashboard)/_paths/home")({
  component: () => (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {lectureHallDetails.map((lectureHall) => (
          <div
            key={lectureHall.name}
            className="shadow-xl card bg-base-100 bg-primary-gradient"
          >
            <div className="card-body ">
              <h2 className="card-title">{lectureHall.name}</h2>
              <p>{lectureHall.location}</p>
              <div className="justify-end card-actions">
                <button className="btn btn-ghost">Show More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  ),
});
