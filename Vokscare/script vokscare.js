let currentIndex = 0; // Indeks slide saat ini
let direction = 1; // 1 untuk maju, -1 untuk mundur

function bookSchedule(counselorName) {
  alert(`You have booked a schedule with ${counselorName}.`);
}

function autoSlide() {
  const cards = document.querySelector('.cards');
  const totalCards = document.querySelectorAll('.card').length;

  // Ubah arah jika mencapai akhir atau awal
  if (currentIndex === 0) {
    direction = 1; // Mundur
  } else if (currentIndex === 1) {
    direction = -1; // Maju
  }

  // Perbarui indeks berdasarkan arah
  currentIndex += direction;

  // Terapkan transformasi untuk menggeser slider
  cards.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Navigasi manual dengan tombol panah
function navigateSlide(directionInput) {
  const cards = document.querySelector('.cards');
  const totalGroups = document.querySelectorAll('.group').length;

  // Perbarui indeks berdasarkan navigasi manual
  currentIndex = (currentIndex + directionInput + totalGroups) % totalGroups;
  cards.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Reset autoslide setelah navigasi manual
  resetAutoSlide();
}

// Reset interval autoslide
let autoSlideInterval = setInterval(autoSlide, 5000);

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoSlide, 5000);
}

const openBtn = document.getElementById("OpenModal1");
const closeBtn = document.getElementById("CloseModal1");
const modal = document.getElementById("modal1");

openBtn.addEventListener('click', () => {
  modal.classList.add("open");
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove("open");
});

console.log(openBtn);
console.log (closeBtn);
console.log (modal); // Pastikan semuanya tidak null

