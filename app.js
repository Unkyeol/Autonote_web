const root = document.getElementById("root");

// 간단한 UI 구성
root.innerHTML = `
  <h1>📝 AutoNote Web (베타)</h1>
  <p>대상자 이름을 입력하세요:</p>
  <input id="nameInput" type="text" placeholder="예: 김가은" />
  <button id="registerBtn">대상자 등록</button>
  <div id="output" style="margin-top: 20px;"></div>
`;

// 버튼 클릭 시 동작
document.getElementById("registerBtn").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value;
  const output = document.getElementById("output");

  if (name.trim() === "") {
    output.innerHTML = "<p style='color:red;'>이름을 입력해주세요.</p>";
    return;
  }

  output.innerHTML = `
    <h3>✅ 등록 완료</h3>
    <p><strong>${name}</strong> 님이 등록되었습니다.</p>
    <p>다음 단계: 회기 입력 및 목표 생성 기능 연결 예정</p>
  `;
});
