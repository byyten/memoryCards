import { useState } from 'react'
import { Card } from './card'

import './cardLayout.css'


// const giphyApiKey="11sptLEN2oMJ7gMzr9pcjnL0HashZAUt"   components/
// const giphyTrendingURL = () => 'https://api.giphy.com/v1/stickers/trending?limit=12&api_key=' + giphyApiKey

// async function getGiphyTrendingData() {
//     resp = await fetch(giphyTrendingURL)
//     return await resp.json().data
// }


function CardLayout( Urls) {
    const [urls, setUrls] = useState(Urls)
    const [clicked, setClicked] =  useState([])
    const [score, setScore] = useState(0)
    const [best, setBest] = useState(0)
    // console.log(urls[0])
    // console.log(urls.length)
    function shuffle() {
        let shuffled = urls.slice(0);
		for (let i = 0; i < shuffled.length; i++) {
			const j = Math.floor(Math.random() * shuffled.length);
			[shuffled[i], shuffled[j]] = [shuffled[j],shuffled[i]];
		}
        setUrls(shuffled)
      }
    
    const handleClick = (evt) => {
        if(clicked.includes(evt.target.classList[1])) {
            console.log(evt.target.classList[1] + ' clicked a second time')
            setScore(0)
            shuffle()
        } else {
            setClicked([ ...clicked, evt.target.classList[1] ])
            setScore(score + 1)
            if (score > best) {
                setBest(score)
            }
            shuffle()
            console.log([score, best])
            console.log(evt.target.classList[1])
        }
    }

    return (
        <>
            <div className="control">
                {/* <button className="shuffle" onClick={() => { shuffle(urls) }}>
                    Shuffle
                </button> */}
                <div className="scoring">
                    <span className="score"> { 'Score: '  + score }</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="best">{ 'Best Score: ' + best }</span>
                </div>
            </div>
            <div className="grid">
                {
                    urls.map(url => { 
                        return (<>
                            <Card
                                id = { url.id}
                                // url = {url.images.original.url } // yes
                                // url = {url.images.downsized_still.url} // no
                                url = {url.images.fixed_width.webp} // yes w=200 url/mp4/webp
                                username = {url.username}
                                title= {url.title}
                                handleClick= {handleClick}
                            />
                        </>)
                    })
                }

            </div>
        </>
    )
}

export  { CardLayout }