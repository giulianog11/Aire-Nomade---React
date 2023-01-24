import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar/Navbar.jsx'
import ItemListContainer from './components/itemListContainer/ItemListContainer';


function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer saludo={'Bienvenido a la página de mates más picante del condado'}/>
    </>
  );
}

export default App;
