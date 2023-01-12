import Navbar from "./Components/Navbar";
import Cart from "./Components/cart";
import { DataProvider } from "./Context/DataProvider";
import Products from "./Pages/Products";
import { AuthContextProvider } from "./Context/AuthContext";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <> 
    <AuthContextProvider> 
      <DataProvider> 
        <Navbar/>
          
          <Routes> 
             <Route path="/" element={<Products/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
      </DataProvider>
    </AuthContextProvider>
    </>
  );
}

export default App;
