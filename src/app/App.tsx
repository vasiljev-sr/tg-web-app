import { useTelegram } from 'shared/hooks/useTelegram'
import { Button } from 'shared/ui/Button/Button'
import './styles/global.css';
const App = () => {
    const { onClose } = useTelegram()
    return (
        <div className="content">
            <h1>Rsbuild with React</h1>
            <p>Start building amazing things with Rsbuild.</p>
            <Button onClick={onClose}>Close</Button>
        </div>
    )
}

export default App
