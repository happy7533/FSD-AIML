console.log("helo");
console.log("helo123");
console.log("helo");
 for( i=0;i<=100;i++){
  console.log(i);
 }
 console.log("yes");
 console.log("thired");
setTimeout(()=>{
    setTimeout(()=>{
        setTimeout(()=>{
            setTimeout(()=>{
                setTimeout(()=>{
                    setTimeout(()=>{
                        setTimeout(()=>{
                            setTimeout(()=>{
                                setTimeout(()=>{
                                    setTimeout(()=>{

                                    console.log("1")},1000)
                                console.log("2")},1000)
                            console.log("3")},1000)
                        console.log("4")},1000)
                    console.log("5")},1000)
                console.log("6")},1000)
            console.log("7")},1000)
        console.log("8")},1000)
    console.log("9")},1000)
console.log("10")},1000)
 
Promise;
const myPromise=new Promise((resolve,reject)=>{
    usename="piyush tomar;"
    password="123456789";
    if(usename=="piyushtomar"&&password=="123456789"){
        resolve("sucess")
    }
    else{
        reject("username or password is incoresct")
    }
})
myPromise.then((msg)=>{
    console.log(msg)
}).catch((msg)=>{
    console.log(msg)
}).finally(()=>{
    console.log("all resorce have been  closed/memory released");
})
async function handlelogin(){
    try{
        await mypromise
    }
    catch(e){
        console.log(e);
    }
    finally{
        console.log("all resource have been declared")
    }
}
handlelogin();
