const stages = document.querySelectorAll('.stages');
const progressBar = document.getElementById('progress-bar');

let borderColor = '#ffffff';
let currentIdx = 0;

stages.forEach((stage, idx) => {
  stage.addEventListener('click', () => {
    currentIdx = idx;
    //After a stage is clicked the current stage var is updated and based on that stage the progress bar, stages border and stages content should be updated as well
    updateProgress();
  });
});

function updateProgress() {
  //Updating the progress bar
  progressBar.style.width = (currentIdx / (stages.length - 1)) * 100 + '%'; //Here should stages.length decremented by 1, because the steps between the 5 stages are 4.
  //Updating the stages border
  stages.forEach((stage, idx) => {
    idx <= currentIdx
      ? (stage.style.border = 'none')
      : (stage.style.border = 'solid' + borderColor);
  });
  //Updating the stage content
  stages.forEach((stage, idx) => {
    document.querySelector('.stage' + (idx + 1) + '-content').style.display = //First, display:none; for all stages
      'none';
  });
  document.querySelector(
    //Seconnd, display that particular stage (the stage that is clicked on)
    '.stage' + (currentIdx + 1) + '-content'
  ).style.display = 'flex';
}
