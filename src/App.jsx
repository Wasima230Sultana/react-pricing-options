
import { Suspense } from 'react';
import './App.css'
import DaisyUINav from './Components/DaisyUINav';
import Navbar from './Components/Navbar';
import PricingOptions from './Components/PricingOptions';
import ResultChart from './Components/ResultChart';
import axios from 'axios';
import MarksChart from './Components/MarksChart';

const pricingPromise = fetch('pricingData.json').then((res) => res.json());
const marksPromise = axios.get('marksData.jsx')

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

        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>
        }>
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>

        <ResultChart></ResultChart>
      </main>

    </>
  )
}

export default App
