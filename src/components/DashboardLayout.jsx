import { Link } from "@tanstack/react-router";
import { useState } from "react";
import LoginForm from "./LoginForm";

function DashboardLayout({ children }) {
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  return (
    <div className="grid h-screen grid-cols-12">
      <aside className="min-h-screen col-span-2 p-2 shadow-md">
        <div className="flex items-center justify-center avatar placeholder">
          <div className="rounded-full w-36 bg-neutral text-neutral-content">
            <span className="text-3xl">D</span>
          </div>
        </div>
        <p className="text-2xl font-semibold text-center">User Name</p>
        <div className="divider"></div>
        <nav className="flex flex-col gap-y-2">
          {["home", "lab halls", "lecture halls", "exam", "settings"].map(
            (item) => (
              <Link
                key={item}
                to={"/" + item.replace(" ", "")}
                activeProps={{
                  className: "font-bold",
                }}
                className="capitalize btn btn-ghost active:font-bold"
              >
                {item}
              </Link>
            )
          )}
        </nav>
      </aside>
      <div className="col-span-10">
        <header className="flex justify-between w-full h-24 p-2 py-5 shadow-md">
          {/* left */}
          <div className="-">
            <h2 className="text-5xl font-semibold">
              Reserve{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                +
              </span>
            </h2>
          </div>
          {/* right */}
          <div className="flex gap-1">
            <input
              type="text"
              placeholder="Search..."
              className="w-full max-w-xs input input-bordered"
            />
            <button className="btn">🔍</button>
            <button className="btn btn-ghost">🔔</button>
            <button
              className="btn bg-primary-gradient"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              Login
            </button>
          </div>
        </header>
        <div className="m-2 overflow-y-auto h-[calc(100vh-7rem)]">
          {children}
        </div>
      </div>
      <LoginForm />
    </div>
  );
}

export default DashboardLayout;
