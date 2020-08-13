document.querySelector('#generate-names').addEventListener('submit', loadNames);

//Execute the function to query the API
function loadNames(e){
    e.preventDefault();

    // REad the Values from the form and create the variable
    const country = document.getElementById('country').value;
    const gender = document.getElementById('genre').value;
    const amount = document.getElementById('quantity').value;

    //bild the url
    let url = 'https://cybertek-ui-names.herokuapp.com/api/?';
    //Read the orgin and apend to the url;
    //Read The country
    if(country !==''){
        url +=`region=${country}&`;
    }
    //read The gender
    if(gender !==''){
        url +=`gender=${gender}&`;
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
            let output = '<div class="card text-center pt-3 mb-2">'
                 output += `<h2 class="text-success">${country}'s ${gender} Name List </h2>`;
                output +='<ul class="list">'
                    names.forEach(name => {
                        output +=`
                                <li class="text-primary">${name.name}</li>
                                `;
                    });
                output +='</ul>';
                output +='</div>';
            document.getElementById('result').innerHTML = output;
       }
    }
    //send the request
    xhr.send();
}