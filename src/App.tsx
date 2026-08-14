import HolographicScene from "./components/HolographicScene";
import LoginPanel from "./components/LoginPanel";

export default function App() {
  return (
    <div className="flex min-h-screen w-full">
      <HolographicScene className="hidden lg:block lg:h-screen lg:w-[56%]" />
      <LoginPanel className="w-full lg:w-[44%]" />
    </div>
  );
}
