import DashboardLayout from "./components/DashboardLayout";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex flex-row bg-gray-100">
      <SideBar />
      <DashboardLayout />
    </div>
  );
}

export default App;
