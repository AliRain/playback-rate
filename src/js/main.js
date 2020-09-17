document.getElementById('form').onsubmit = function adjustPlaybackRate(e) {
  e.preventDefault();

  const rate = parseFloat(document.getElementById('playbackRate').value);

  chrome.tabs.executeScript({
    code: `for (const video of document.getElementsByTagName("video")) video.playbackRate = ${rate};`,
  });
};

document.getElementById('numberInput').onchange = function copyToSlider() {
  document.getElementById('slider').value = document.getElementById('numberInput').value;
};

document.getElementById('slider').onchange = function copyToNumber() {
  document.getElementById('numberInput').value = document.getElementById('slider').value;
};
