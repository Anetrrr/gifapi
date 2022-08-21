let API_Key = "deokzgUjxm6QHQdp3H3aca1LSZcCpucc";   
let Btn = document.getElementById('btn-gif');
let SearchInput = document.getElementById('input-gif')
let Output = document.getElementById('output')
document.addEventListener('DOMContentLoaded', showGif);
let fig = document.createElement('figure')
                let img = document.createElement('img')

function showGif() {
    Btn.addEventListener('click', (e) => {

        e.preventDefault();
        Output.innerHTML = '';
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${API_Key}&limit=1&q=`    

        let searchValue = SearchInput.value.trim();
        url = url.concat(searchValue);

        fetch(url).then(response => response.json())
        .then(content =>{
            console.log(content.data)
            try{
                let fig = document.createElement('figure')
                let img = document.createElement('img')
                let figLabel = document.createElement('caption')
                img.src = content.data[0].images.downsized.url;
                img.alt = content.data[0].title;
                img.username = content.data[0].username;
                
                img.onclick = function(){ 
                    window.open(img.src)
                }    
                
                figLabel.textContent = content.data[0].title;
                fig.appendChild(img)
                fig.appendChild(figLabel)
                Output.appendChild(fig)
                SearchInput.value = '';  
            }
            catch(err)
            
            {
                alert('Invalid input')
                SearchInput.value = ''
            } 
           
        } )
              
        })
        }
