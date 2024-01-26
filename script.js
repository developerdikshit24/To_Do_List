let input = document.querySelector("#input");
let list_item = document.querySelector("#list_item")

function addtask() {
    if (input.value == "") {
        alert('Please Enter Something..');
        
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list_item.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    
    }
    input.value = "";
    savetask()
}

input.addEventListener("keypress", (e) => {
    
    if (e.key === "Enter") {
        addtask()
    }
}
)

list_item.addEventListener("click", (e) => {

    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savetask()
    }
    else if (e.target.tagName ===  "LI") {
        e.target.classList.toggle("checked")
        savetask()
    }
}, false
)

function savetask() {
    localStorage.setItem("data", list_item.innerHTML)

}
function getdata() {
    list_item.innerHTML = localStorage.getItem("data")
}

getdata()
