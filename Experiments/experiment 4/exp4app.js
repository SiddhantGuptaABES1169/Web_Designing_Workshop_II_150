function calculateResult() {
  let count = Number(document.getElementById("subjectCount").value);

  if (count <= 0 || isNaN(count)) {
    alert("Enter valid number");
    return
  }

  let total = 0;

  for (let i = 1; i <= count; i++) {
    let marks = prompt("Enter marks for subject " + i);

    if (marks === null || marks === "" || isNaN(marks)) {
      alert("Invalid input");
      return;
    }

    marks = Number(marks);

    // Optional: Marks range check
    if (marks < 0 || marks > 100) {
      alert("Marks should be between 0 and 100");
      return;
    }

    total += marks;
  }

  let average = total / count;
  let grade;

  if (average >= 75) grade = "A";
  else if (average >= 60) grade = "B";
  else if (average >= 50) grade = "C";
  else grade = "F";

  let resultStatus = (average >= 40) ? "Pass" : "Fail";

  document.getElementById("result").innerHTML = `
    Total: ${total} <br>
    Average: ${average.toFixed(2)} <br>
    Grade: ${grade} <br>
    Result: ${resultStatus}
  `;
}