import { StrictMode } from 'react'
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import {createRoot} from "react-dom/client";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
)
