import Cardcom from "./components/card";
import Dragon from "./components/dragon";
import Features from "./components/features";
import ContactForm from "./components/form";
import HomePage from "./components/home";
import NavBar from "./components/navbar";
import Why from "./components/why";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <div className="playground">
        <span className="text-secondary">AI Playground {'>'}</span> Text to 2D
      </div>
      <HomePage/>
      <Cardcom/>
      <Dragon/>
      <Features/>
      <Why/>
      <ContactForm/>
    </div>
  );
}
