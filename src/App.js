import "./index.css";
import "./App.css";
import Random from "./components/Random";
import Tag from "./components/Tag";
function App() {
  return (
    <div className="background h-screen w-full flex flex-col  overflow-x-hidden items-center">
      <div className="bg-white rounded-lg w-11/12 text-center mt-[40px] text-2xl py-2 px-10 font-bold mx-auto">
        <h1>Random GIFS</h1>
      </div>
      <div className="flex flex-col item-center">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
