import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="font-medium">Hello World</div>
    </div>
  );
}
