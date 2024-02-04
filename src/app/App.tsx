import { useTelegram } from 'shared/hooks/useTelegram'
import './styles/global.css';
import Button from "@mui/material/Button";
import  Container from "@mui/material/Container";

const App = () => {
    const { onClose } = useTelegram()
    return (
        <Container className="content">
            <h1>Rsbuild with React</h1>
            <p>Start building amazing things with Rsbuild.</p>
            <Button onClick={onClose}>Close</Button>
        </Container>
    )
}

export default App
