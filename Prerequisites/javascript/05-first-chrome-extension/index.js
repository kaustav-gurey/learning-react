let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads){
    let listItems = ""
    for(let i = 0; i<leads.length; i++){
        //add this line in the html file via a template string
        listItems += `
            <li>
                <a target="_blank" href="${leads[i]}">
                ${leads[i]}
                </a>
            </li>
        `
        
        // //same but without using template string
        // listItems += '<li><a target="_blank" href=' + myLeads[i] +'> ' + myLeads[i]+ '</a></li>'

        // //same this but a different way(2)
        // //create element
        // const x = document.createElement("li")
        // //set the text conetnt
        // x.textContent = myLeads[i]
        // //append to the ul
        // ulEl.append(x)
    }
    ulEl.innerHTML = listItems
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})
// tabBtn.addEventListener("click", function(){    
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//         myLeads.push(tabs[0].url)
//         localStorage.setItem("myLeads", JSON.stringify(myLeads) )
//         render(myLeads)
//     })
// })

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function(){

    if(inputEl.value != ""){
        myLeads.push(inputEl.value)
    }
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
})
