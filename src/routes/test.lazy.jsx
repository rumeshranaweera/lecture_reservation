import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/test")({
  component: Test,
});

function Test() {
  return (
    <div className="p-2">
      <h3>Welcome test!</h3>
    </div>
  );
}
