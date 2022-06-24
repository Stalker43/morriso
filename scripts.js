let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
  let theme = document.getElementById("theme");
  if (theme.getAttribute("href") == "./style/light.css")
    theme.href = "./style/dark.css";
  else theme.href = "./style/light.css";
};
