import "./App.css"
import "../src/components/Item/Item.css"
import Title from "./components/Title/Title"
import Layout from "./components/Layout/Layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemDetail from "./components/ItemDetail/ItemDetail"
import Elaboraciones from "./pages/Elaboraciones"
import { HomePage } from "./index"
import { ContactPage } from "./index"
import { CartProvider } from "../src/components/CartWidget/CartContext"
import Checkout from "./pages/Checkout"

function App() {

  return (

    <BrowserRouter>
    <CartProvider> 
    
    <Layout>
    <Title greeting={"Aportando un granito de harina al mundo.. 🍞"}/>

    <Routes>
      <Route path="/" element= {<ItemListContainer/>}/>
      <Route path="/product/:idProduct" element= {<ItemDetail/>}/>
      <Route path="/category/:id" element= {<ItemListContainer/>}/>
      <Route path="/item/:id" element= {<ItemDetailContainer/>}/>
      <Route path="/elaboraciones" element= {<Elaboraciones/>}/>
      <Route path="/nosotros" element= {<HomePage/>}/>
      <Route path="/contacto" element= {<ContactPage/>}/>
      <Route path="/checkout" element= {<Checkout/>}/>
    </Routes>
    </Layout>
    </CartProvider>
    </BrowserRouter>

    
  );
}
  
  export default App;