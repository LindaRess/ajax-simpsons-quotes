function fetchSimpsonJSON() {
const url = "https://simpsons-quotes-api.herokuapp.com/quotes";
    axios.get(url)
        .then(function(response) {
            return response.data[0]; // response.data instead of response.json() with fetch
        })
        .then(function(simpson) {
            console.log('data decoded from JSON:', simpson);
  
        // Build a block of HTML
        const simpsonHtml = `
          <p><strong>${simpson.character}</strong></p>
          <img src="${simpson.image}" />
        `;
        document.querySelector('#simpson-quote').innerHTML = simpsonHtml;
});
}

document.getElementById("myBtn").addEventListener("click", fetchSimpsonJSON) 

fetchSimpsonJSON();