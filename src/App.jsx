import "./App.css";
import Header from "./components/Header";
import StudentProfile from "./components/StudentProfile";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <StudentProfile
        id="1"
        name="Jey"
        email="jey@gmail.com"
        course="MERN Stack Development"
        cohort="Cohort- 03"
        skills={["HTML", "CSS", "JavaScript", "Reac"]}
        github="https://github.com/jey"
        onSelect={() => alert("Profile: Jey’s profile")}
      />
      <Footer />
    </>
  );
}

export default App;
