window.addEventListener('load',()=>{
    //Get All Inputs
    let userName=document.getElementById('profile');
    let myDiv=document.getElementById('showData');
    let hStar=document.getElementById('halfStars');
    let fStar=document.getElementById('fullStars');
    let cl1=document.getElementById('client1');
    let cl2=document.getElementById('client2');
    let cl3=document.getElementById('client3');
    let cl4=document.getElementById('client4');
    //data from localStorage
    let data=JSON.parse(localStorage.getItem("loginData"))?JSON.parse(localStorage.getItem("loginData")):[];
    console.log(data);
    let userData=(JSON.parse(localStorage.getItem("userLoginSuccess")));
    userName.innerText+=userData;
    console.log(userData);

    function doLoop(id,feedback){
        for(let i=0;i<data.length;i++){
            if(data[i].id==id){
                if(data[i].feedback=feedback){
                    if(data[i].feedback==4.5){
                        hStar.style.display='block';
                    }
                    else if(data[i].feedback==5){
                        fStar.style.display='block';
                    }
                    
                     myDiv.innerText+=data[i].userName+" ";
                    
                }
                 
            }
        }
    }
    function clear(){
        myDiv.innerText=" ";
        hStar.style.display='none';
        fStar.style.display='none';
    }
    cl1.addEventListener('click',()=>{
        clear();
        doLoop(1,4.5);    
    })
    cl2.addEventListener('click',()=>{
        clear();
        doLoop(2,5);
    })
    cl3.addEventListener('click',()=>{
        clear();
        doLoop(3,4.5);
    })
    cl4.addEventListener('click',()=>{
        clear();
        doLoop(4,5);
    })
    
})