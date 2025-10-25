const section = document.querySelector("#section");
const formContainer = document.querySelector("#form");
const form = document.querySelector("#callForm");
const container = document.querySelector(".container");

document.querySelector("#openForm").onclick = () => {
  section.style.display = "none";
  formContainer.style.display = "block";
};

document.querySelector("#closeForm").onclick = () => {
  section.style.display = "flex";
  formContainer.style.display = "none";
};

// Save data to localStorage
function saveToLocalStorage(obj) {
  const old = JSON.parse(localStorage.getItem("task")) || [];
  old.push(obj);
  localStorage.setItem("task", JSON.stringify(old));
}

// Show all cards
function showCards() {
  container.innerHTML = "";
  const all = JSON.parse(localStorage.getItem("task")) || [];

  all.forEach((task) => {
    const box = document.createElement("div");
    box.className = "box";
    box.innerHTML = `
      <img src="${task.imageUrl}" alt="">
      <h1>${task.fullName}</h1>
      <div class="details">
        <div>
          <h3>Home town</h3>
          <h3>Purpose</h3>
        </div>
        <div>
          <h3>${task.homeTown}</h3>
          <h3>${task.purpose}</h3>
        </div>
      </div>
      <div class="btn">
        <button>Call</button>
        <button>Message</button>
      </div>
    `;
    container.appendChild(box);
  });
  updateCards();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const imageUrl = document.querySelector("#image").value.trim();
  const fullName = document.querySelector("#fullname").value.trim();
  const homeTown = document.querySelector("#hometown").value.trim();
  const purpose = document.querySelector("#purpose").value.trim();
  const category = document.querySelector("input[name='category']:checked");

  if (!category) return alert("Please select a category!");

  saveToLocalStorage({
    imageUrl,
    fullName,
    homeTown,
    purpose,
    category: category.value,
  });

  form.reset();
  section.style.display = "flex";
  formContainer.style.display = "none";
  showCards();
});

function updateCards() {
  const cards = document.querySelectorAll(".box");
  cards.forEach((card, i) => {
    card.style.zIndex = cards.length - i;
    card.style.transform = `translate(-50%, ${i * 12}px) scale(${1 - i * 0.02})`;
    card.style.opacity = `${1 - i * 0.02}`;
  });
}

document.querySelector("#upbtn").onclick = () => {
  const last = container.lastElementChild;
  if (last) container.insertBefore(last, container.firstElementChild);
  updateCards();
};

document.querySelector("#downbtn").onclick = () => {
  const first = container.firstElementChild;
  if (first) container.appendChild(first);
  updateCards();
};

// Initial load
showCards();

