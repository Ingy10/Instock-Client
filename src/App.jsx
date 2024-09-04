import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehouseListPage from "./pages/WarehouseListPage/WarehouseListPage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import WarehouseEditPage from "./pages/WarehouseEditPage/WarehouseEditPage";
import WarehouseAddPage from "./pages/WarehouseAddPage/WarehouseAddPage";
import InventoryListPage from "./pages/InventoryListPage/InventoryListPage";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import InventoryEditPage from "./pages/InventoryEditPage/InventoryEditPage";
import InventoryAddPage from "./pages/InventoryAddPage/InventoryAddPage";

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SectionComponent from "./components/SectionComponent/SectionComponent";
import SectionComponent2 from "./components/SectionComponent2/SectionComponent2";

function App() {
  return (
    <>
    <Header />
    <SectionComponent />
    <SectionComponent2 />
      <Footer />
    </>
  );
}

export default App;
