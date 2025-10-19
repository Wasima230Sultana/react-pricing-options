
import { Suspense } from 'react';
import './App.css'
import DaisyUINav from './Components/DaisyUINav';
import Navbar from './Components/Navbar';
import PricingOptions from './Components/PricingOptions';

const pricingPromise = fetch('pricingData.json').then((res) => res.json());

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyUINav></DaisyUINav> */}
      </header>

      <main>

        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>
        }>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
      </main>

    </>
  )
}

export default App
