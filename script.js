const IP = "ThunderBDsmp.aternos.me:53494";
function copyAddress() {
  navigator.clipboard.writeText(IP).then(() => {
    document.querySelectorAll("#copyNote").forEach(el => el.textContent = "Server address copied!");
    setTimeout(() => document.querySelectorAll("#copyNote").forEach(el => el.textContent = ""), 2200);
  }).catch(() => alert("Copy failed. Server address: " + IP));
}
document.getElementById("copyIp").addEventListener("click", copyAddress);
document.getElementById("copyIp2").addEventListener("click", copyAddress);
