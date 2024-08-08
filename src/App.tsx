import "./App.scss";
import AppRouter from "$/router";
import { Toaster } from "sonner";
// import AppRouter from "./router";

function App(){

  return (
    <>
      <AppRouter/>
      <Toaster richColors position="top-right"/>
    </>
  );
}
export default App;
