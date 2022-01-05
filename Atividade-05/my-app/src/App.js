// import Routes from './route/Route';
import "./App.css";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal';
import { PagePosts }  from './components/pages/PaginaPosts/PagePosts';
import { PagePerfil }  from './components/pages/PaginaPerfil/PagePerfil';
import history from './history';


function App() {
  return (
      <div className="pagina">
          <BrowserRouter>
                <Routes history={history}>
                  <Route path="/" element={<PaginaPrincipal />} />
                  <Route path="posts" element={<PagePosts />} />
                  <Route path="perfil" element={<PagePerfil />} />
                </Routes>
            </BrowserRouter>
        </div>
  );
}

export default App;