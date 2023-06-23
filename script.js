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
  //Updating the progress bar
  progressBar.style.width = (currentIdx / (stages.length - 1)) * 100 + '%';
  //Updating the stages border
  stages.forEach((stage, idx) => {
    idx <= currentIdx
      ? (stage.style.border = 'none')
      : (stage.style.border = 'solid' + borderColor);
  });
  //Updating the stage content
  stages.forEach((stage, idx) => {
    document.querySelector('.stage' + (idx + 1) + '-content').style.display =
      'none';
  });
  document.querySelector(
    '.stage' + (currentIdx + 1) + '-content'
  ).style.display = 'flex';
}
