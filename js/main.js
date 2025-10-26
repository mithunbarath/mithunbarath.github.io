document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const header = document.getElementById('header');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      const isMenuOpen = !mobileMenu.classList.contains('translate-x-full');
      mobileMenu.classList.toggle('translate-x-full');
      
      const spans = mobileMenuButton.querySelectorAll('span');
      if (isMenuOpen) {
        spans[0].classList.remove('rotate-45', 'translate-y-2');
        spans[1].classList.remove('opacity-0');
        spans[2].classList.remove('-rotate-45', '-translate-y-2');
      } else {
        spans[0].classList.add('rotate-45', 'translate-y-2');
        spans[1].classList.add('opacity-0');
        spans[2].classList.add('-rotate-45', '-translate-y-2');
      }
    });
  }

  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('bg-dark-bg/80', 'backdrop-blur-md', 'shadow-lg', 'shadow-black/20', 'h-16');
        header.classList.remove('h-20');
      } else {
        header.classList.remove('bg-dark-bg/80', 'backdrop-blur-md', 'shadow-lg', 'shadow-black/20', 'h-16');
        header.classList.add('h-20');
      }
    };
    window.addEventListener('scroll', handleScroll);
  }
});
