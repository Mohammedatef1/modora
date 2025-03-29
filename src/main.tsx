import AppRouter from '@routes/AppRouter'
import '@styles/main.css'
import 'swiper/css';
import { createRoot } from 'react-dom/client'
import { persistor, store } from '@store/store'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
//axios
import './services/axios-default-values'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null} >
      <AppRouter/>
    </PersistGate>
  </Provider>
)
