import { Route, Routes } from "react-router-dom";
import LifeCycle from "./LifeCycle";
import About from "./About";
import LifeCycleNew from "./LifeCycleNew";

function LifeCycleMain() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<LifeCycle />} > */}
        <Route path="/" element={<LifeCycleNew />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </div>
  );
}

export default LifeCycleMain;
