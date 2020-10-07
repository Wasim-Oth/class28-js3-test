const select= document.querySelector('select')
const container= document.createElement('div')
container.style.cssText= 'display: none;  margin: auto; padding: 1rem; width:20rem; box-shadow: 4px 4px 10px black;'
const title = document.createElement('h2')
title.style.textAlign='center'
const img = document.createElement('img')
const description = document.createElement('p')

document.body.appendChild(container)
container.appendChild(title)
container.appendChild(img)
container.appendChild(description)

select.addEventListener('change', getMovie)

            // using async function  
async function getMovie(event){
    try{
    const url = `http://www.omdbapi.com/?apikey=e92ab3d6&t=${event.target.value}`;
    const response = await fetch (url)
    const data = await response.json()
    // console.log(data)
    container.style.display= 'block'
    title.innerText= data.Title
    img.src= data.Poster
    description.innerText= data.Plot

     } catch {
         console.error('ops! something went wrong')
     }

    }


        //  using old promises

// function getMovie(event) {
//     const url = `http://www.omdbapi.com/?apikey=e92ab3d6&t=${event.target.value}`;
//     const response = fetch(url)
//     response.then((result) => {
//         const data = result.json()
//         data.then((movieInfo) =>{
//             container.style.display= 'block'
//             title.innerText= movieInfo.Title
//             img.src= movieInfo.Poster
//             description.innerText= movieInfo.Plot
//         })
//     }).catch ( err => console.error('ops! something went wrong' + err))
// }
