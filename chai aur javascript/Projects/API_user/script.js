const btn=document.querySelector(".user-btn");

btn.addEventListener('click',function(e){
const requestUrl="https://api.github.com/users/hiteshchoudhary"
const xhr=new XMLHttpRequest();
xhr.open('GET',requestUrl);
xhr.onreadystatechange=function(){
    if(xhr.readyState===4){
        const data=JSON.parse(this.responseText);
        const card=document.createElement('div')
        card.setAttribute("class","card-container");
        card.innerText=data.followers;
        const div = document.createElement('div')
        const image=document.createElement('img')
        image.setAttribute("src",data.avatar_url);
        div.appendChild(image)
        card.appendChild(div)
        document.body.appendChild(card);
    }
}
xhr.send();
})
