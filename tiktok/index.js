

function onRequestHanler(){
    let url="https://countik.com/api/userinfo/6956944909324698630"
const xhr = new XMLHttpRequest();
    if(this.readyState==4 && this.status==200){
        const data = JSON.parse(this.response);
        const HTMLResponse = document.querySelector("#app")
        console.log(data);
        HTMLResponse.innerHTML = `<div id="perfil"><img id="foto" src=${data.avatarThumb} alt="perfil"> <h3>CoderTS</h3></div> <div id="datos"><p>FOLLOWERS:${data.followerCount} <img src="Followers.png" alt="follow" style="width:20px;"> <br> ME GUSTAS: ${data.heartCount} <img src="Corazon.png" alt="heart" style="width:20px;"> <br> VIDEOS SUBIDOS:${data.videoCount} <img src="upload.png" alt="videos" style="width:20px;"></p></div>`
    }
    xhr.addEventListener('load',onRequestHanler);
xhr.open('GET',url);
xhr.send();
}
setInterval(()=>{onRequestHanler()},4000)


