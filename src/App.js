import "./App.css";
import ControlledForm from "./components/ControlledForm";
// import LifeCyclesCDM from "./components/LifeCyclesCDM";
// import LifeCyclesCDU from "./components/LifeCyclesCDU";
import LifeCyclesCWU from "./components/LifeCyclesCWU";
import UncontrolledForm from "./components/UncontrolledForm";

function App() {
  return (
    <div className="App">
      {/* <LifeCyclesCDM /> */}
      {/* <LifeCyclesCDU /> */}
      {/* <LifeCyclesCWU /> */}
      {/* <ControlledForm /> */}
      <UncontrolledForm />
    </div>
  )
}

export default App;
