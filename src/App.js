import './App.css';
import {PasswordGen} from './components/PasswordGen'


function App() {
  return (
    <main>
      <div className="container">
        <h1 className="title">Gerador de Senhas</h1>
        <PasswordGen/>
      </div>
    </main>
  );
}

export default App;