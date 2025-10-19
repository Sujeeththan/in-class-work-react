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
        skills={["HTML", "CSS", "JavaScript", "React"]}
        github="https://github.com/jey"
        onSelect={() => alert("Props: Jey’s profile")}
      />
      <StudentProfile
        id="2"
        name="sujeeththan"
        email="sujeeththan@gmail.com"
        course="MERN Stack Development"
        cohort="Cohort- 03"
        skills={["HTML", "CSS", "JavaScript", "React"]}
        github="https://github.com/sujeeththan"
        onSelect={() => alert("Props: sujeeththan's profile")}
      />
       <StudentProfile
        id="3"
        name="vijay"
        email="vijay@gmail.com"
        course="MERN Stack Development"
        cohort="Cohort- 03"
        skills={["HTML", "CSS", "JavaScript", "React"]}
        github="https://github.com/vijay"
        onSelect={() => alert("Props: vijay's profile")}
      />
      <Footer />
    </>
  );
}

export default App;
