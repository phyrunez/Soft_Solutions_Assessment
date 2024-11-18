import Customer from "./Customer";
import Header from "./Header";
import Hero from "./Hero";
import Menu from "./Menu";
import Revenue from "./Revenue";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <Hero />
      <Revenue />
      <Customer />
      <Menu />
    </div>
  );
};

export default DashboardLayout;
