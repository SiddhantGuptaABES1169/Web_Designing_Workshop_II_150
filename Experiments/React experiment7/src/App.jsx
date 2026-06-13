import Student from "./Components/Student";
function App() {
return (
<div>
  <h1>Student Information</h1>
  <Student
    name="Siddhant Gupta"
    course="Computer Science"
    marks="92" />
  <Student
    name="Aman Jha"
    course="MBBS"
    marks="96" />
  <Student
    name="Arjun Choudhary"
    course="Mechanical"
    marks="87" />
  <br /><br /><br /><br />
  <p>Siddhant Gupta<br />CSE-27</p>
</div>
);
}
export default App;