export function displayMsg(msg, color) {
  const msgEle = document.createElement("p");
  msgEle.textContent = msg;
  msgEle.style.position = "fixed";
  msgEle.style.bottom = "20px";
  msgEle.style.right = "20px";
  msgEle.style.padding = "10px 20px";
  msgEle.style.background = "#fff";
  msgEle.style.color = color;
  msgEle.style.border = `1px solid ${color}`;
  msgEle.style.borderRadius = "10px";
  msgEle.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
  msgEle.style.zIndex = "99999";
  document.body.appendChild(msgEle);

  setTimeout(() => msgEle.remove(), 3000);
}
