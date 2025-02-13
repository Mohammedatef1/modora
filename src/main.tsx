import { createRoot } from 'react-dom/client'
import Mainlayout from './layouts/MainLayout.tsx'
import './styles/main.css'

createRoot(document.getElementById('root')!).render(
    <Mainlayout />,
)
