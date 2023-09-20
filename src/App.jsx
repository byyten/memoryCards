import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { json, code } from './json'

import { CardLayout } from './components/cardLayout'

const count = 18

const giphyApiKey="11sptLEN2oMJ7gMzr9pcjnL0HashZAUt"
const giphyTrendingURL = (count) => 'https://api.giphy.com/v1/stickers/trending?limit=' + count + '&api_key=' + giphyApiKey

function App() {
  // const [count, setCount] = useState(0)
  const [urls, setUrls] = useState(json) // useState(code) // .slice(0,10)
  const [data, setData] = useState([])

  console.log('using local urls')
  useEffect(() => {
    async function getGiphyTrendingData() {
      try {
        const resp = await fetch(giphyTrendingURL(count))
        const json = await resp.json()
        console.log(json)
        setData(json.data)
        console.log(' ran effect urls ' + urls.length )
      } catch (err) {
        console.log(err)
      }      
    }
    getGiphyTrendingData()
  }, [] )

 
  
  return (
    <>
      <div className='container'>
        <div className="head">
          
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h3>Vite / React / Logic / Memory</h3>
                  {/* <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                      count is {count}
                    </button>
                    <p>
                      Edit <code>src/App.jsx</code> and save to test HMR
                    </p>
                  </div>
            */}

        <div className="cards">
          { CardLayout(urls) }
        </div>
      </div>
     
    </>
  )
}

export default App
