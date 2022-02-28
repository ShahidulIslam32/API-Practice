let searchUni = () => {
    let searchBox = document.getElementById('university')
    let searchField = searchBox.value 
    searchBox.value = ''
    if (searchField == ''){
        return alert('Write A Country Name First !!')
    }
    let url = `http://universities.hipolabs.com/search?country=${searchField}`
    fetch(url)
    .then(response => response.json())
    .then(data => showUni(data))
    toggleSpinner('block')
}
// add spinner 
const toggleSpinner = displayShow => {
    document.getElementById('spinner').style.display = displayShow;

}

const showUni = (receive) => {
    let container = document.getElementById('search-result')
    container.textContent = '';
    if(receive.length == 0){
        let erorMsg = document.getElementById('erorMsg')
        erorMsg.innerText = 'Sorry We Cannot Find Anything For You . Enter a valid Country name'    
    }
    for(const versity of receive){
        let div = document.createElement("div")
        div.innerHTML = 
        `<div class="card p-5 mb-3 col-md-12">
                <h5>Versity Name - ${versity.name}</h5>
                <h5>Country - ${versity.country}</h5>
                <h5>Versity State - ${versity.state_province}</ h5>
                <h5>Website - ${versity.web_pages}</h5>          
            </div>
        </div>`
        container.appendChild(div)
        erorMsg.innerText = ' ';
    };
    toggleSpinner('none')
    

}