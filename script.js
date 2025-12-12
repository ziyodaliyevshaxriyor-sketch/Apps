function updatePayment() {
  let exp = parseFloat(document.getElementById("otr").value);
  let cpm = document.getElementById("cpm");
  let percent = document.getElementById("percent");
  let hazmat = document.getElementById("hazmat").checked;
  let tanker = document.getElementById("tanker").checked;

  if (hazmat && tanker) {
    cpm.value = "70 CPM"; percent.value = "30%";
  } else {
    if (exp >= 1 && exp < 2) {
      cpm.value = "60 CPM"; percent.value = "25%";
    } else if (exp >= 2) {
      cpm.value = "65 CPM"; percent.value = "27%";
    } else {
      cpm.value = ""; percent.value = "";
    }
  }
}
