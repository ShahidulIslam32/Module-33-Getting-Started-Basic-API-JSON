function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => tryAnother(data))
}


function tryAnother(data){
    let ul = document.getElementById('users');
    for(const user of data){
       let li = document.createElement('li')
        li.innerText = `Name:${user.name} ${'***'} User Email:  ${user.email}`
       ul.appendChild(li);
    }
}


function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(comments => showComments(comments))
}

function showComments(comments){
    let moreUl = document.getElementById('comments')
    for(let comment of comments){
        let divNew = document.createElement('div')
        divNew.classList.add('comment')
        divNew.innerHTML = `
        <h4 class="bg-info text-center p-2";>User ID : ${comment.id}</h4>
        <h5 class="";>Post Title : ${comment.title}</h5>
        <p class="bg-warning p-3">Post Body : ${comment.body}</p>`;
        moreUl.appendChild(divNew)
        divNew.style.width = '1120px'
        divNew.style.margin = '30px auto'
    }
}

function loadImages(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => ShowPhoto(data))
}

function ShowPhoto(data){
    let img = document.getElementById('images')
    for(let image of data){
        let div = document.createElement("img")
        img.src = image.url
        img.appendChild(div)
    }
}