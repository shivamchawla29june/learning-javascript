// function save(){

// }

let myLeads = []

const inputEl = document.getElementById("input-el")
const inputButton = document.getElementById("save-btn")
const deleteButton= document.getElementById("delete-btn")
const tabButton = document.getElementById("tab-btn")

let ulEl = document.getElementById("ul-el")

let dataPoints= JSON.parse(localStorage.getItem("myLeads"))
if(dataPoints){
    myLeads=dataPoints
}

printingLeads(myLeads)


deleteButton.addEventListener("click", function(){
    localStorage.clear()
    myLeads=[]
    printingLeads(myLeads)
})

inputButton.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    printingLeads(myLeads)
    inputEl.value = ""
})

tabButton.addEventListener("click", function(){
    chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        printingLeads(myLeads)
    })
})

function printingLeads(leads) {
    let data = ""
    // let dataPoints= JSON.parse(localStorage.getItem("myLeads"))
    console.log(leads.length)
    for (let i = 0; i < leads.length; i += 1) {
        data += `
        <li>
        <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
        </a>
        </li>
        `
        // data += "<li><a target='_blank' href='#'>"+myLeads[i]+"</a></li>"
        // ulEl.innerHTML+="<li>"+myLeads[i]+"</li>"
        // const li=document.createElement("li")
        // li.textContent=myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = data
}