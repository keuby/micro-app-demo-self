import { createRoot, type Root } from 'react-dom/client';
import App from './App';

let root: Root;

function mount() {
  root = createRoot(document.getElementById('root')!);
  root.render(<App />);
}

function unmount() {
  root?.unmount();
}

if (window.__MICRO_APP_ENVIRONMENT__) {
  window[`micro-app-${window.__MICRO_APP_NAME__}`] = {
    mount,
    unmount,
  };
} else {
  console.log('mount');
  mount();
}
