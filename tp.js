const animals = [
    { /* 24NT01038 BÙI THU PHƯƠNG */
        ten:"Mèo",
        mota:"Mèo là một loài động vật có vú nhỏ thuộc họ Mèo. Chúng thường được nuôi làm thú cưng và có khả năng săn mồi tốt.",
        folder:"images/meo/",
        imacount:6,
        preflx:"meo",
        nguon:"images/meo/meo_1.jpg",
    },
    {/* 24NT01038 BÙI THU PHƯƠNG */
        ten:"Thỏ",
        mota:"Thỏ là loài động vật có vú nhỏ, nổi tiếng với đôi tai dài và khả năng sinh sản nhanh chóng. Chúng thường sống trong các hang dưới đất.",
        folder:"images/tho/",
        imacount:6,
        preflx:"tho",
        nguon:"images/tho/tho_1.jpg",
    },
    {
        ten:"Nhím",
        mota:"Nhím là loài động vật có vú nhỏ, nổi tiếng với chiếc lông cứng và khả năng tự vệ tốt. Chúng thường sống trong rừng rậm.",
        folder:"images/nhim/",
        imacount:6,
        preflx:"nhim",
        nguon:"images/nhim/nhim_1.jpg",
    },
    {
        ten:"Bươm bướm",
        mota:"Bươm bướm là loài côn trùng có cánh, thường sống trong môi trường có nhiều hoa và cây cối.",
        folder:"images/buom_buom/",
        imacount:6,
        preflx:"buom_buom",
        nguon:"images/buom_buom/buom_buom_1.jpg",
    },
    {
        ten:"Rắn",
        mota:"Rắn là loài động vật có vú nhỏ, nổi tiếng với khả năng bò và săn mồi hiệu quả. Chúng thường sống trong rừng rậm.",
        folder:"images/ran/",
        imacount:6,
        preflx:"ran",
        nguon:"images/ran/ran_1.jpg",
    }
];

const ds = document.getElementById("location");

animals.forEach(animal => {
  const card = document.createElement("div");
  card.classList.add("location-card");

  card.innerHTML = `
    <img src="${animal.nguon}">
    <div class="location-name">${animal.ten}</div>
  `;

  card.addEventListener("click", () => {
    localStorage.setItem("animal", JSON.stringify(animal));
    window.location.href = "detail.html";
  });

  ds.appendChild(card);
});