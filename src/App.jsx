import Intro from "./component/intro/intro";
import About from "./component/about/about";
import Contact from "./component/contact/contact";
import Profile from "./component/profile/profile";

const App = () => {
  return <div>
  <Profile/>
  <Intro/>
  <About/>
  <Contact/>
  </div>;
};

export default App;