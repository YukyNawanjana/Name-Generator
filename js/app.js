document.querySelector('#generate-names').addEventListener('submit', loadNames);

//Execute the function to query the API
function loadNames(e){
    e.preventDefault();

    // REad the Values from the form and create the variable
    const origin = document.getElementById('country').value;
    const genre = document.getElementById('genre').value;
    const amount = document.getElementById('quantity').value;

    //bild the url
    let url = 'https://cybertek-ui-names.herokuapp.com/api/?';
    //Read the orgin and apend to the url;
    //Read The country
    if(origin !==''){
        url +=`region=${origin}&`;
    }
    //read The gender
    if(genre !==''){
        url +=`gender=${genre}&`;
    }
    //Read the Amount
    if(amount !==''){
        url +=`amount=${amount}&`;
    }
    
    //Ajax Call
    const xhr = new XMLHttpRequest();

    //open  the conection
    xhr.open('GET', url, true);

    // Exuute the function
    xhr.onload = function(){
       if(this.status === 200){
            const names = JSON.parse(this.responseText);
            let output = '<h2> Geenerated Names </h2>';
                output +='<ul class="list">'
                    names.forEach(name => {
                        output +=`
                                <li>${name.name}</li>
                                `;
                    });
                output +='</ul>';
            document.getElementById('result').innerHTML = output;
       }
    }
    //send the request
    xhr.send();
}