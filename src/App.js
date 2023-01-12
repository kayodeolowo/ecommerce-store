import { DataProvider } from "./Context/DataProvider";
import Products from "./Pages/Products";


function App() {
  return (
    <> 
      <DataProvider> 
        <Products/>
      </DataProvider>
    </>
  );
}

export default App;
