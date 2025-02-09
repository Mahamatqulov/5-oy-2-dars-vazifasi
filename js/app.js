const showBtn = document.getElementById("show-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

const addHidden = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const removeHidden = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
showBtn.addEventListener("click", () => {
  removeHidden();
});

closeBtn.addEventListener("click", () => {
  addHidden();
});

overlay.addEventListener("click", () => {
  addHidden();
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addHidden();
  }
});

const numbers = prompt(Number("Nechta rang kerak:"));
const list = document.querySelector("ol");
const clearBtn = document.querySelector("#clear");
const colors = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

const randomColor = () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colors[Math.trunc(Math.random() * colors.length)];
  }
  return color;
};

for (let i = 0; i < Number(numbers); i++) {
  const color = randomColor();
  list.innerHTML += `
    <li style="color:${color}"> ${color}
      <div>
        <button data-color=${color}>Apply</button>
        <button>Delete</button>
      </div>
    </li>`;
}

document.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    if (e.target.textContent == "Delete") {
      e.target.closest("li").remove();
    } else if (e.target.textContent == "Apply") {
      const color = e.target.dataset.color;
      e.target.closest("li").style.backgroundColor = color;
    }
  }
});
