const detailContainer = document.getElementById("detail-container");

const selectedPhoto = JSON.parse(localStorage.getItem("selectedPhoto"));

if (selectedPhoto) {
  const image = document.createElement("img");
  image.src = selectedPhoto.galWebImageUrl;

  const info = document.createElement("div");
  info.className = "detail-info";

function formatDate(dateStr) {
  if (!dateStr || dateStr.length < 8) return "정보 없음";

  const yy = dateStr.slice(2, 4);
  const mm = dateStr.slice(4, 6);
  const dd = dateStr.slice(6, 8);

  return `${yy}/${mm}/${dd}`;
}

const date = formatDate(selectedPhoto.galCreatedtime);

  info.innerHTML = `
    <p><strong>📌제목:</strong> ${selectedPhoto.galTitle}</p>
    <p><strong>📍장소:</strong> ${selectedPhoto.galPhotographyLocation}</p>
    <p><strong>📅날짜:</strong> ${date}</p>
    <p><strong>📸촬영자:</strong> ${selectedPhoto.galPhotographer || "정보 없음"}</p>
    <p><strong>✨키워드:</strong> ${selectedPhoto.galSearchKeyword || "정보 없음"}</p>
  `;

  detailContainer.appendChild(image);
  detailContainer.appendChild(info);
} else {
  detailContainer.innerText = "선택된 사진 정보가 없습니다.";
}