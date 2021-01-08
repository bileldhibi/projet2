//the btoa() method  encodes a string in base-64.
// btoa()       يتم استخدامها لتشفير بيانات النصية الى تشفير بنظامالقاعدة64
// let text="bilel dhibi";
// let encode=btoa(text);
// document.getElementById("h1").innerHTML=encode;
// //atob()      عنصر يتم استخدامها لفك التشفير بنظام القاعدة 64
// let decode=atob(encode);
// document.getElementById("hh1").innerHTML=decode;
var text=document.getElementById("text");
var result=document.querySelector("#resultat");
var select=document.getElementById("select");
text.addEventListener("input",()=>{
    code();
});
select.addEventListener("change",()=>{
    code();
});
function code(){
    if(select.value=="decode"){
        result.value=window.atob(text.value);
        //alert("decode");
    }else {
        result.value=window.btoa(text.value);
        //alert("encode");
    }
}