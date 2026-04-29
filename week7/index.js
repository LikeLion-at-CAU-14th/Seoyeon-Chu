//한국 관광 공사 사진 갤러ㅣ api의 기본 주소
const baseURL = "https://apis.data.go.kr/B551011/PhotoGalleryService1";

//APi에 데이터를 요총할 때 필요한 옵션
const option = {
    //인증키
  serviceKey:
    "769b737037d34d03c2233b8c10bab201769fbbcc9dec70f03637fbc54149c311",
  numofRows: 6, //한번에 불러올 사진 개수
  MobileApp: "test", //어플리케이션 이름
  MobileOS: "ETC", //OS 구분
  arrange: "A", //정렬 기준
  _type: "json", //응답 데이터 타입
};

//html에서 id= "container"인 요소를 찾아 변수에 저장자
// -> 앞으로 불러오는 사진들이 이 공간에 채워짐
const container = document.getElementById("container");

//사진의 순번을 매기기 위해 사용하는 숫자 변수
let photoIndex = 1; 

//비동기 함수 -> API 서버에서 데이터들을 가져오는 시간이 겅이는 작업들을 순차적으로 처리
async function getData() {
    let count =1;

    //baseURL과 option 객체들의 값을 조합하여 최동적으로 데이터를 요청할 주소를 만듦
    const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${option.pageNo}&serviceKey=${option.serviceKey}`;

    const fetchData = await fetch(url); //해당 url로 네트워크 요청을 보내 데이터를 가져 온다
    const toJSON = await fetchData.json(); //가져온 데이터를 JSON 형태로 변환
    const datas = await toJSON.response.body.items.item; //json구조에서 실제로 우리가 필요한 '사전 정보'들을 뽑아서 써야 함. //변환된 데이터에서 사진 정보가 담긴 배열을 추출

    datas.forEach((data, i) => {
        const list = document.createElement("div");
        list.id = "list"; //위에서 만든 <div에 대해

        const image = document.createElement("img");
        //자바그크립트가 image라는 변수로 만든 img 태그의 주소(src) 값으로 api에서 가져온 진짜 이미지 url과 연결
        image.src = data.galWebImageUrl; //사진의 주소를 img 요소의 src 속성에 할당
        const info = document.createElement("span");
        info.innerText = `
        ${photoIndex++}번째 사진
        제목: ${data.galTitle}
        장소: ${data.galPhotographyLocation}`;

        list.appendChild(image); //list라는 div 요소 안에 image 요소를 자식으로 추가
        list.appendChild(info); //list라는 div 요소 안에 info 요소를 자식으로 추가
        container.appendChild(list); //container라는 요소 안에 list 요소를 자식으로 추가
    });
}
