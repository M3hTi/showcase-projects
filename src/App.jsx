import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element="<AppLayout />"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
