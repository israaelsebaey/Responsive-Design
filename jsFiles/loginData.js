
window.addEventListener('load',()=>{
    //Get All Inputs
    let user=document.getElementById('user');
    let pass=document.getElementById('pass');
    let spinner=document.getElementById('spinner');
    let loginBtn=document.getElementById('loginBtn');

    //debugger;
    //Login Data
    let usersData=[
        {id:1,userName:"Omar",password:"123",feedback:4.5},
        {id:2,userName:"Israa",password:"123",feedback:5},
        {id:3,userName:"Ahmed",password:"123",feedback:4.5},
        {id:4,userName:"Mona",password:"123",feedback:5},
    ]
    
    localStorage.setItem("loginData",JSON.stringify(usersData));
    let data=JSON.parse(localStorage.getItem("loginData"))?JSON.parse(localStorage.getItem("loginData")):[]
    console.log(data);
    // for(let i=0;i<data.length;i++){
    //     console.log(data[i].userName);
    // }
  
     loginBtn.addEventListener('click',(e)=>{
         e.preventDefault();     
         for(let i=0;i<data.length;i++){
             
              if(user.value==""&&pass.value==""){
                  Error2();
              }
             else if(data[i].userName==user.value && data[i].password==pass.value){
                 console.log("true");
                 localStorage.setItem("userLoginSuccess",JSON.stringify(user.value));
                 spinner.style.display='block';
                 setTimeout(()=>{
                    window.location.replace("../components/home.html");  
                 },5000)
                  
             }          
             else if(data[i].userName!=user.value && data[i].password!=pass.value){
                 console.log("false");
                 Error();
             }
            
         }

     })
    function Error(){
        swal({
           title: " Oops...",
           text: "Invalid UserName OR Password",
           icon: "error",
         });
     }
     function Error2(){
        swal({
           title: "Empty Fields....Please Enter Data to login",
           icon: "error",
         });
     }

});












