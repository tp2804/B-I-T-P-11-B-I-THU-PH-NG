const animalData = localStorage.getItem("animal");

if (animalData) {
  const animal = JSON.parse(animalData);

  document.getElementById("ten").innerText = animal.ten;
  document.getElementById("mota").innerText = animal.mota;

  const gallery = document.getElementById("gallery");

  for (let i = 1; i <= animal.imacount; i++) {
    const img = document.createElement("img");
    img.src = `${animal.folder}${animal.preflx}_${i}.jpg`;
    gallery.appendChild(img);
  }
}

function backHome() {
  window.history.back();
}