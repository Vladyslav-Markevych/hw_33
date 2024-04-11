const images = [
  {
    src: "https://avotar.ru/avatar/krutye/100/76.jpg",
    alt: "cat",
  },
  {
    src: "https://avotar.ru/avatar/krutye/100/79.jpg",
    alt: "boy",
  },
  {
    src: "https://avotar.ru/avatar/smeshnye-jivotnye/100/10.jpg",
    alt: "monkey",
  },
  {
    src: "https://avotar.ru/avatar/smeshnye-jivotnye/100/7.jpg",
    alt: "frog",
  },
  {
    src: "https://avotar.ru/avatar/smeshnye-jivotnye/100/41.jpg",
    alt: "cow",
  },
  {
    src: "https://avotar.ru/avatar/krutye/100/78.jpg",
    alt: "cat",
  },
  {
    src: "https://avotar.ru/avatar/smeshnye-jivotnye/100/57.jpg",
    alt: "dog",
  },
  {
    src: "https://avotar.ru/avatar/smeshnye-jivotnye/100/63.jpg",
    alt: "hamster",
  },
  {
    src: "https://avotar.ru/avatar/minony/100/13.jpg",
    alt: "minion",
  },
  {
    src: "https://avotar.ru/avatar/smeshnye-jivotnye/100/112.jpg",
    alt: "owl",
  },
  {
    src: "https://avotar.ru/avatar/smeshnye-jivotnye/100/116.jpg",
    alt: "cat",
  },
  {
    src: "https://avotar.ru/avatar/smeshnye-jivotnye/100/128.jpg",
    alt: "eagle",
  },
  {
    src: "https://avotar.ru/avatar/smeshnye-jivotnye/100/12.jpg",
    alt: "leopard",
  },
  {
    src: "https://avotar.ru/avatar/smeshnye-jivotnye/100/6.jpg",
    alt: "cat",
  },
  {
    src: "https://avotar.ru/avatar/smeshnye-jivotnye/100/5.jpg",
    alt: "dog",
  },
  {
    src: "https://avotar.ru/avatar/smeshnye-jivotnye/100/30.jpg",
    alt: "squirrel",
  },
];

function addImages() {
  let wrapper = document.createElement("div");
  wrapper.id = "wrapper";
  wrapper.className = "wrapper";
  const fragment = new DocumentFragment();
  images.forEach((elem) => {
    let img = new Image();
    img.src = elem.src;
    img.alt = elem.alt;
    img.dataset.date = day();
    fragment.append(img);
  });

  wrapper.append(fragment);

  document.body.append(wrapper);
}

addImages();

// ДЗ
function listener(event) {
  if (event.target.tagName == "IMG") {
    firstDiv.removeEventListener("click", listener);
    let modalImage = document.getElementById("modalImage");
    let textModal = document.getElementById("textModal");
    let date = document.getElementById("date");

    let { alt, src, dataset } = event.target;
    modalImage.alt = alt;
    modalImage.src = src;
    textModal.textContent = alt;
    date.textContent = dataset.date;

    document.getElementById("modal").style.display = "block";
    document.getElementsByClassName("background")[0].style.display = "block";
  }
}

function day() {
  let d = new Date();
  let day = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();
  let today = `${day}.${month + 1}.${year}`;
  return today;
}

let firstDiv = document.getElementById("wrapper");
firstDiv.addEventListener("click", listener);

document.getElementById("close").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
  document.getElementsByClassName("background")[0].style.display = "none";
  firstDiv.addEventListener("click", listener);
});
