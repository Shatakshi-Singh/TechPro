
//CPP
function fetchData(){

    fetch('https://api.github.com/search/repositories?q=language:c+++sort:stars').then(response =>{

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
                <p><img class="xyz" src="${user.owner.avatar_url}"></img></p>
                <p><a href="${user.html_url}">Repository Link</a></p>
                <p>Name: ${user.name}</p>
                <p>Fork Count: ${user.forks_count}</p>
                
                </div>
                `
            }).join('');
            
            console.log(html);
            document.querySelector('#cpp').insertAdjacentHTML('afterbegin',html);   
    }
    
    ).catch(error => {
        console.log(error);
    });
}

fetchData();
