import React from "react";
import UseState from "./Hooks/UseState/UseState";
import State from "./State/State";
import UseEffect from "./Hooks/UseEffect/UseEffect";
import Timer from "./Components/Timer";
import UseContext from "./Hooks/UseContext/useContext";
import ContextProvider from "./Hooks/UseContext/Context";
import UseReducer from "./Hooks/UseReducer/UseReducer";
// import UseMemo from "./Hooks/UseMemo/UseMemo";
import UseCallBack from "./Hooks/UseCallBack/UseCallBack";
import User from "./HigherOrderComponent/User";
import Props from "./Props/Props";
// import ContextProvider from "./Props/ContextAPI/Context";
import RegistrationForm from "./CustomHooks/RegistrationForm";
import Login from "./CustomHooks/Login";
import LazyLoading from "./LazyLoading/LazyLoading";
import Routing from "./Routing/Routing";
import LifeCycleMain from "./ReactLifeCycleMethods/LifeCycleMain";
import Parent from "./Props/ClassComponent/Parent";
import Home from "./Shopy/Home";
import UseRef from "./Hooks/UseRef/UseRef";
import ParentCompont from "./LiftStateup/ParentCompont";
import HOC from "./HigherOrderComponent/ClassComponent/HOC";
import UseMemo from "./UseMemo";

function App() {
  return (
    <div>
      {/* <State /> */}
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <Timer /> */}
      {/* <ContextProvider>
        <UseContext />
      </ContextProvider> */}
      {/* <UseReducer /> */}
      {/* <UseMemo /> */}
      {/* <UseCallBack /> */}
      {/* <User /> */}
      {/* <ContextProvider>
        <Props />
      </ContextProvider> */}
      {/* <RegistrationForm /> */}
      {/* <Login /> */}
      {/* <LazyLoading /> */}
      {/* <Routing /> */}
      {/* <LifeCycleMain /> */}
      {/* <Parent /> */}
      {/* <Home /> */}
      {/* <UseRef /> */}
      {/* <ParentCompont /> */}
      {/* <HOC /> */}
      <UseMemo />
    </div>
  );
}

export default App;
