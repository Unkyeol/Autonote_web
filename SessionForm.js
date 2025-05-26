export function renderSessionForm() {
  const root = document.getElementById("root");

  root.innerHTML = `
    <h2>대상자 정보 입력</h2>
    <form id="session-form">
      <label>이름: <input type="text" name="name" required /></label><br /><br />
      <label>생년월일: <input type="date" name="dob" required /></label><br /><br />
      <label>성별:
        <select name="gender">
          <option value="남">남</option>
          <option value="여">여</option>
        </select>
      </label><br /><br />
      <label>치료영역:
        <select name="area">
          <option value="심리치료">심리치료</option>
          <option value="언어치료">언어치료</option>
          <option value="작업치료">작업치료</option>
          <option value="물리치료">물리치료</option>
          <option value="특수교육">특수교육</option>
        </select>
      </label><br /><br />
      <button type="submit">등록</button>
    </form>
    <div id="output"></div>
  `;

  document.getElementById("session-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const dob = form.dob.value;
    const gender = form.gender.value;
    const area = form.area.value;

    const output = document.getElementById("output");
    output.innerHTML = `<h3>등록 완료: ${name} (${dob}, ${gender}, ${area})</h3>`;
  });
}
