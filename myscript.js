var currentImage = 1;

function nextImage() {
  if (currentImage < 4) {
    currentImage++;
  } else {
    currentImage = 1;
  }

  // Hide the current image
  document.getElementById('image' + (currentImage - 1)).style.display = 'none';

  // Show the next image
  document.getElementById('image' + currentImage).style.display = 'block';
}