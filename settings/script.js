// Selecting all required elements
const wrapper = document.querySelector(".contentor"),
toast = wrapper.querySelector(".toast"),
title = toast.querySelector(".span"),
subTitle = toast.querySelector(".notification"),
wifiIcon = toast.querySelector(".icone"),
closeIcon = toast.querySelector(".close-icon");

window.onload = ()=>{
    function ajax(){
        let xhr = new XMLHttpRequest(); //creating new XML object
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true); //sending get request on this URL
        xhr.onload = ()=>{ //once ajax loaded
            //if ajax status is equal to 200 or less than 300 that mean user is getting data from that provided url
            //or his/her response status is 200 that means he/she is online
            if(xhr.status == 200 && xhr.status < 300){
                toast.classList.remove("offline");
                title.innerText = "Online";
                subTitle.innerText = "Conexão estabelecida!";
                wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';
                title.style.color='#2ecc71'
                subTitle.style.color='#2ecc71'
                closeIcon.onclick = ()=>{ //hide toast notification on close icon click
                    wrapper.classList.add("hide");
                }
                setTimeout(()=>{ //hide the toast notification automatically after 3 seconds
                    wrapper.classList.add("hide");
                }, 3000);
            }else{
                offline(); //calling offline function if ajax status is not equal to 200 or not less that 300
            }
        }
        xhr.onerror = ()=>{
            offline(); ////calling offline function if the passed url is not correct or returning 404 or other error
        }
        xhr.send(); //sending get request to the passed url
    }

    function offline(){ //function for offline 
        wrapper.classList.remove("hide");
        toast.classList.add("offline");
        title.innerText = "Você está offline";
        subTitle.innerText = "Verifique a sua internet!";
        wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>';
        title.style.color='gray'
        subTitle.style.color='gray'
    }

    setInterval(()=>{ //this setInterval function call ajax frequently after 100ms
        ajax();
    }, 100);
}
