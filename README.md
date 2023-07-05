# Progress metrics

This is a self-designed and self-built project. I was inspired by the idea of switching the content of a page depending on the current stage of a timeline or a progress bar. The component I built can be used to demonstrate the stages of a project or as a timeline for an event.

## Table of contents

- [Overview](#overview)
  - [Functionality](#functionality)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Functionality

Users should be able to:

- Navigate between the various stages of a project.
- View hover states for the interactive elements on the page.
- Read content and view pictures associated with each stage.

### Screenshots

![](/screenshots/screenshot1.png)
![](/screenshots/screenshot2.png)

### Links

- Live Site URL: [GitHub Pages](https://aref-akminasi.github.io/progress-metrics/)

## My process

### Built with

- HTML5
- CSS3
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

What was challenging was having multiple elements that needed to be updated based on the status, as everything happens within one function. I have chosen not to split it into multiple functions because I believe that the entire project is an integrated unit and should be updated together. This unity of the project ensures that all elements stay synchronized and up to date.

```js
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
```

### Continued development

Based on my observations, I found it quite challenging to incorporate all the content into HTML while trying to mimic a React component. In the future, when I learn React, I will look back and compare what I have built with the functionality of a React component.

Moreover, I believe it would be ideal for projects like this to store the content in a JSON file, simulating the process of fetching content from the backend. This is because directly embedding content into HTML is not considered best practice. I am looking forward to researching how to achieve this using JSON.

### Useful resources

- [Love Pik](https://lovepik.com/) - This is the website from which I obtained the assets for this project, including the images for the stages. Attribution is not required for these assets. However, it is a valuable tool that offers a wide range of samples, making it a handy resource.

## Author

**Aref Akminasi**

- LinkedIn - [Aref Akminasi](https://www.linkedin.com/in/aref-akminasi-91412b207/)
- Twitter - [@aref_akminasi](https://twitter.com/aref_akminasi)
