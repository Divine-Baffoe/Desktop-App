const information = document.getElementById('info');

information.innerText = 'This app is using Chrome(v.${versions.chrome()}), Node(v.${versions.node()}), and Electron(v.${versions.electron()})';

const func = async () => {
  const response = await window.versions.ping();
  information.innerText += `\nResponse from main process: ${response}`;
}   

func().catch(err => {
  console.error('Error:', err);
  information.innerText += `\nError: ${err.message}`;
});