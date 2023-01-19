import { Link } from "components/NavLink/NavLink.styled";
import { useState } from "react";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  return (
    <div className="Tabs">
      <ul className="nav">
        <Link
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          Tab 1
        </Link>
        <Link
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          Tab 2
        </Link>
      </ul>
 
      <div className="outlet">
        {activeTab === "tab1" ? <Test1 /> : <Test2 />}
      </div>
    </div>
  );
};