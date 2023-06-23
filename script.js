const stages = document.querySelectorAll('.stages');
const progressBar = document.getElementById('progress-bar');

let borderColor = '#ffffff';
let currentIdx = 0;

stages.forEach((stage, idx) => {
  stage.addEventListener('click', () => {
    currentIdx = idx;
    update();
  });
});

function update() {
  progressBar.style.width = (currentIdx / (stages.length - 1)) * 100 + '%';
  stages.forEach((stage, idx) => {
    idx <= currentIdx
      ? (stage.style.border = 'none')
      : (stage.style.border = 'solid' + borderColor);
  });
}
