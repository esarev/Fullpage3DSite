const burger = document.querySelector('.burger'),
      container = document.querySelector('.container');

burger.addEventListener('click', () => {
  container.classList.toggle('active');
});