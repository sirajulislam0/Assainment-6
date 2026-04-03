import { Suspense, use } from 'react'
import './App.css'
import ActiveUser from './component/HeaderSection/ActiveUser/ActiveUser'
import HeaderSection from './component/HeaderSection/HeaderSection'
import Items from './component/Items/Items'
import NavBar from './component/NavBar/NavBar'


const featchProducts = async () => {
  const res = await fetch('/productData.json')
  return res.json();


}
function App() {


  const productsPromised = featchProducts();



  return (
    <>



      <NavBar />
      <HeaderSection />
      <ActiveUser />

      <Suspense fallback={<span className="loading loading-spinner text-error"></span>
      }>
        <Items productsPromised = {productsPromised} > </Items>
      </Suspense>



    </>
  )
}

export default App
