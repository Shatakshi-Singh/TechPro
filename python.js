//PYTHON

function fetchData(){

    fetch('https://api.github.com/search/repositories?q=language:python+sort:stars').then(response =>{

    console.log(response);
    if(!response.ok){
        throw Error('Error');
    }
    return response.json();
    
    }).then(data => {
        
            console.log(data.items);
            const html = data.items.map(user =>{
                return `
                <div class="user">
                 <div class="avatar"><p><img class="xyz" src="${user.owner.avatar_url}"></img></p></div>
                <div class="description"><p><a href="${user.html_url}">Repository Link </a><br><br>
                Name: ${user.name}<br><br>
                Description: ${user.description}<br><br>
                Fork Count: ${user.forks_count}</p></div>
                
                </div>
                `
            }).join('');
            
            console.log(html);
            // document.querySelector('#name').insertAdjacentHTML('afterbegin',html1);
            document.querySelector('#python').insertAdjacentHTML('afterbegin',html);   
    }
    
    ).catch(error => {
        console.log(error);
    });
}

fetchData();
