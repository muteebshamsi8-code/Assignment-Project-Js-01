function changeView() {
  let view = document.getElementById("cont");
  if (view.className === "contianer") {
    view.className = "ChangeDisplay";
  } else {
    view.className = "contianer";
  }
}
