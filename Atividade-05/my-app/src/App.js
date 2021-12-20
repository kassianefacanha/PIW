// import Routes from './route/Route';
import "./App.css";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal';
import { PagePosts }  from './components/pages/PaginaPosts/PagePosts';
import history from './history';


function App() {
  return (
      <div class="pagina">
          <BrowserRouter>
                <Routes history={history}>
                  <Route path="/" element={<PaginaPrincipal />} />
                  <Route path="posts" element={<PagePosts />} />
                </Routes>
            </BrowserRouter>
        </div>
  );
}

export default App;