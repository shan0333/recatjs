import React from 'react';
import './App.css';
import AppRouter from "./component/RouterComponent";

import Container from '@material-ui/core/Container';

function App() {
    return (
        <div>
            
            <Container>
                <AppRouter/>
            </Container>
        </div>
    );
}

export default App;
