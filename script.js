document.querySelectorAll('.read-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    btn.querySelector('span').textContent='↗';
  });
});
