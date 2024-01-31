import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import PrivacyMessage from "./components/PrivacyMessage";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <Header />
        <div className="col-lg-6 mx-auto">
          {!privacy ? <DisplayCounter /> : <PrivacyMessage />}
          <Controls />
        </div>
      </div>
    </>
  );
}

export default App;
