'use strict'

function main(){

const url1 = "http://www.omdbapi.com/?i=tt3896198&apikey=e92ab3d6";
const url2 = "http://www.omdbapi.com/?i=tt1285016&apikey=e92ab3d6";
const url3 = "http://www.omdbapi.com/?i=tt1285014&apikey=e92ab3d6";

const body = document.body;
const select = document.createElement('select');
select.innerHTML= '<option>' + 'selct a movie' + '</option>'
body.appendChild(select);

const conatiner = document.createElement('div');
const poster = document.createElement('img');
const plot = document.createElement('p');
const name = document.createElement('h2');

conatiner.appendChild(name)
conatiner.appendChild(poster)
conatiner.appendChild(plot)
body.appendChild(conatiner)


// select.addEventListener('change', appendToDom)

function getOptions(){
const mypromis = axios.get(url1);
mypromis.then((result) => {
    console.log(result.data)
    const title = result.data.Title
    select.innerHTML += '<option>' +  title + '</option>'
    select.addEventListener('change', function(){
        if (result.data.Title === select.value){
            name.innerText = result.data.Title
            poster.src = result.data.Poster
            plot.innerText= result.data.Plot       
         } 
    })
    return axios.get(url2);

    })
    .then((result) => {
        const title = result.data.Title
        select.innerHTML += '<option>' +  title + '</option>'
        select.addEventListener('change', function(){
            if (result.data.Title === select.value){
                name.innerText = result.data.Title
                poster.src = result.data.Poster
                plot.innerText= result.data.Plot       
             }
            })
        return axios.get(url3);
    })

    .then((result) => {
        const title = result.data.Title
        select.innerHTML += '<option>' +  title + '</option>'
        select.addEventListener('change', function(){
            if (result.data.Title === select.value){
                name.innerText = result.data.Title
                poster.src = result.data.Poster
                plot.innerText= result.data.Plot       
             }
            })
    }) 
 }
getOptions()
    
}
main()


