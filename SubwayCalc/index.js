
let count =0
let countEl=  document.getElementById("count-el")

function increment(){
    count+=1
    countEl.innerText=count
}

function save(){
    console.log(count)
    let saveEl= document.getElementById("data")
    saveEl.innerText+=count
    count=0
    countEl.innerText=count
}



