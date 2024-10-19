window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    for (const section of sections) {
      // Check if the section is in view
      const rect = section.getBoundingClientRect();
      const isInView = (rect.top >= 0 && rect.bottom <= window.innerHeight);
  
      if (isInView) {
        // Add animation class (replace 'animation-name' with your desired animation)
        section.classList.add('animation-name');
      } else {
        // Remove animation class if out of view
        section.classList.remove('animation-name');
      }
    }
  });
  