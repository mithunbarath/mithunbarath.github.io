document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tab = button.getAttribute('data-tab');

      // Update button styles
      tabButtons.forEach(btn => {
        btn.classList.remove('text-accent', 'border-accent', 'bg-light-bg');
        btn.classList.add('text-slate', 'border-slate-700', 'hover:bg-light-bg/50', 'hover:text-accent');
      });
      button.classList.add('text-accent', 'border-accent', 'bg-light-bg');
      button.classList.remove('text-slate', 'border-slate-700', 'hover:bg-light-bg/50', 'hover:text-accent');

      // Update content visibility
      tabContents.forEach(content => {
        if (content.getAttribute('data-content') === tab) {
          content.classList.remove('hidden');
          content.classList.add('block');
        } else {
          content.classList.remove('block');
          content.classList.add('hidden');
        }
      });
    });
  });
});
