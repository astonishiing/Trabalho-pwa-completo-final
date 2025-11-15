const API = (window._API_URL) || `${location.protocol}//${location.hostname}:3000`;

async function fetchApi(){
  const el = document.getElementById('api-result');
  try {
    const res = await fetch(`${API}/api/extension/info`);
    const json = await res.json();
    el.textContent = JSON.stringify(json);
  } catch(err) {
    el.textContent = 'Erro ao acessar API: ' + err.message;
  }
}

document.getElementById('refresh').addEventListener('click', fetchApi);
fetchApi();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(r => console.log('SW registrado', r.scope))
    .catch(e => console.warn('SW falhou', e));
}
