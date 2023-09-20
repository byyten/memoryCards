// import { useState, useEffect } from 'react'




// function shuffle(array) {
//     // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array#2450976
//     let currentIndex = array.length
//     let randomIndex;
  
//     // While there remain elements to shuffle.
//     while (currentIndex > 0) {  
//       // Pick a remaining element.
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
//       // And swap it with the current element.
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex], array[currentIndex]];
//     }
//     return array;
//   }
  
//   // Used like so
//   var arr = [2, 11, 37, 42, 67, 4, 34, 95, 38, 16];
//   shuffle(arr);
//   console.log(arr);






// const apikey="11sptLEN2oMJ7gMzr9pcjnL0HashZAUt"


// searchFor = (apikey, srch) => 'https://api.giphy.com/v1/gifs/translate?api_key=' + apikey + '&s=' + srch

// async function wasteBandwidth(apikey, srch) {
//     resp = await fetch(searchFor(apikey, srch))
//     return await resp.json()
// }

// trending = (apikey) => 'https://api.giphy.com/v1/stickers/trending?api_key=' + apikey
// async function wasteTrendBandwidth(apikey) {
// 	let ret = ''
//   resp = await fetch(trending(apikey))
//     ret = await resp.json()
//   return ret
// }

// stickertrend = {}


// stickertrend = await wasteTrendBandwidth(apikey)
// stickertrend



// img = document.getElementById('img')
// srch = 'code'
// // fetch(searchFor(apikey, srch)).then(_r => _r.json()).then(_d => img.src = _d.data.images.original.url)

// json = Promise.resolve(wasteBandwidth(apikey, srch))
// img.src = json.data.original.url