import AppRouter from '@routes/AppRouter'
import '@styles/main.css'
import { createRoot } from 'react-dom/client'
import { store } from '@store/store'
import {Provider} from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)
