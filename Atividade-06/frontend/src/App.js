// import Routes from './route/Route';
import "./App.css";
import { Route, Routes, BrowserRouter,  Navigate } from "react-router-dom";
import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal';
import { PagePosts }  from './components/pages/PaginaPosts/PagePosts';
import { PagePerfil }  from './components/pages/PaginaPerfil/PagePerfil';
import { PageLogin }  from './components/pages/Login/Login';
import { PageCadastro }  from './components/pages/Cadastro/Cadastro';
import history from './history';
import { createContext, useState } from 'react';
export const AuthContext = createContext(null);

function App() {
  const [auth, setAuth] = useState({ token: localStorage.getItem("token"), nome: localStorage.getItem("nome"), id: localStorage.getItem("id")  })

  const setAuthLS = (newAuth) => {
    setAuth(newAuth)
    localStorage.setItem("token", newAuth.token)
    localStorage.setItem("nome", newAuth.nome)
    localStorage.setItem("id", newAuth.id)
  }

  return (
      <div className="pagina">
        <AuthContext.Provider value={{ auth: auth, setAuth: setAuthLS }}>
          <BrowserRouter>
                <Routes history={history}>
                  <Route  path="/" element={ 
                    auth.token === "null" ||
                    auth.token == null ?
                    <Navigate to="/login"/> :
                    <PaginaPrincipal />} />
                  <Route  path="posts" element={<PagePosts />} />
                  <Route  path="perfil" element={<PagePerfil />} />
                  <Route  path="login" element={<PageLogin />} />
                  <Route  path="cadastro" element={<PageCadastro />} />
                </Routes>
            </BrowserRouter>
          </AuthContext.Provider>
        </div>
  );
}

export default App;