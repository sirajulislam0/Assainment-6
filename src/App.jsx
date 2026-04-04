import { Suspense, useState } from 'react'
import './App.css'
import ActiveUser from './component/HeaderSection/ActiveUser/ActiveUser'
import HeaderSection from './component/HeaderSection/HeaderSection'
import Items from './component/Items/Items'
import NavBar from './component/NavBar/NavBar'
import StartSection from './component/StartSection/StartSection'


const featchProducts = async () => {
  const res = await fetch('/productData.json')
  return res.json();


}
function App() {


  const productsPromised = featchProducts();
  const [cart, setCart] = useState(0);
  const [selectedCarts, setSelectedCarts] = useState([]);



  return (
    <>




      <NavBar  selectedCarts={selectedCarts} />


      <HeaderSection />
      <ActiveUser />

      <Suspense fallback={<span className="loading loading-spinner text-error"></span>
      }>
        <Items productsPromised={productsPromised} cart={cart} setCart={setCart} selectedCarts={selectedCarts} setSelectedCarts={setSelectedCarts}> </Items>
      </Suspense>
      <StartSection/>



    </>
  )
}

export default App
