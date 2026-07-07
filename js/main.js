function checkdata(){
    let a = document.getElementById("getData").value;
    if(a%2==0){
        document.getElementById("outputshow").innerText="Even"
    }
    else{
        document.getElementById("outputshow").innerText="Odd"
    }
}