import TopNavbar from "./Components/TopNavbar";
import SideNavBar from "./Components/SideNavBar";
import HeroSection from "./Components/HeroSection";
import MiniBanner from "./Components/MiniBanner";
import Filter from "./Components/Filter";
import { Data } from "./assects/Data/Data.js"
import { useState } from "react";
import PriceTag from "./Components/PriceTag";
import Popup from "./Components/Popup";


function App()
{
  const [product, setProduct] = useState(Data);
  const [hide, setHide] = useState(false);
  // console.log(product);
  const handleBtn = (e) =>
  {
    let productItems;
    console.log(e.target.value);
    if (e.target.value === "All") {
      console.log(product);
      setProduct(Data);
    }

    else {
      productItems = Data.filter(items => items.type === e.target.value)
      console.log(productItems);
      setProduct(productItems);
    }
  }

  const handlePop = () =>
  {

    setHide(!hide)
    console.log("POP")
  }
  return (
    <div className="App h-full w-full bg-Dark-blue relative flex flex-col">
      <TopNavbar handlePop={handlePop} />
      <SideNavBar />
      <HeroSection />
      <MiniBanner />
      <div className="w-full flex p-5 ">
        <Filter handleBtn={handleBtn} product={product} />
        <PriceTag />
      </div>
      {hide && <Popup handlePop={handlePop} />}
    </div>
  )
}

export default App;
