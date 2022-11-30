import style from '../style/style.scss';
const btn = document.querySelector('.btn_container');
const window1 = document.body;
btn.addEventListener('click', () => {
  window1.classList.toggle('change_theme_dark');
});
