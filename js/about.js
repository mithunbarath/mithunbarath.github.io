import { generateBio } from './geminiService.js';

document.addEventListener('DOMContentLoaded', () => {
  const generateButton = document.getElementById('generate-bio-button');
  const bioContent = document.getElementById('bio-content');
  const buttonContent = document.getElementById('button-content');
  const buttonLoading = document.getElementById('button-loading');

  if (generateButton && bioContent) {
    generateButton.addEventListener('click', async () => {
      // Set loading state
      generateButton.disabled = true;
      buttonContent.classList.add('hidden');
      buttonLoading.classList.remove('hidden');

      const newBio = await generateBio("Mithun Barath M R");

      // Update bio content, replacing newlines with <br> tags for HTML rendering
      bioContent.innerHTML = newBio.replace(/\n/g, '<br/><br/>');

      // Reset button state
      generateButton.disabled = false;
      buttonContent.classList.remove('hidden');
      buttonLoading.classList.add('hidden');
    });
  }
});
