window.onload = function () {
    if(localStorage.getItem('darkMode') === 'enabled'){
      document.body.classList.add('dark-mode');
    }
};

document.getElementById('darkModeToggle').onclick = function () {
  document.body.classList.toggle('dark-mode');

  if(document.body.classList.contains('dark-mode')){
      localStorage.setItem('darkmode', 'enabled');
  } else {
    localStorage.setItem('darkMode','disabled');
  }
};
