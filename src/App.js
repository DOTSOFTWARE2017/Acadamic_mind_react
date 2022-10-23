import "./App.css";
import { Route, Routes } from "react-router-dom";
import Allmeetup from "./pages/Allmetup";
import Fevmeetup from "./pages/Fevmeetup";
import Newmeetup from "./pages/Newmeetup";
import { Main_nav } from "./components/layout/Main_nav";
function App() {
  return (
    <>
      {" "}
      <Main_nav/>
      <Routes>
        <Route path="/" element={<Allmeetup />}></Route>
        <Route path="fev_page" element={<Fevmeetup/>}></Route>
        <Route path="new_page" element={<Newmeetup />}></Route>
      </Routes>
    </>
  );
}
export default App;
