var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");


//function para carregar os repos ao clicar no botão
let repos = [] ;

function getReposbyUsername(){
  
  axios.get("https://api.github.com/users/" + inputElement.value + "/repos")
    .then(function (response){
       for (i = 0; i < response.data.length; i++){
        repos.push(response.data[i].name)
        }
        
        return repos;
          
    })
    .catch(function(error){
      console.log(error)
    })
  }
    
  function RenderRepos(){
    getReposbyUsername();
    for(repo of repos){
    var repoElement = document.createElement('li');
    var repoText = document.createTextNode(repo);
  
    repoElement.appendChild(repoText);
    listElement.appendChild(repoElement);
    } 

  }