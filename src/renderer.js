const information = document.getElementById('info');

information.innerText = 'This app is using Chrome(v.${versions.chrome()}), Node(v.${versions.node()}), and Electron(v.${versions.electron()})';



document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
  const isDarkMode = await window.darkMode.toggle()
  document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark Mode' : 'Light Mode';
});

document.getElementById('reset-to-system').addEventListener('click', async () => {
  await window.darkMode.system()
  document.getElementById('theme-source').innerHTML = 'System';
});