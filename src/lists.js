function list(title) {
    this.title = title;
}
const container = document.getElementById("container");



const listArray = [];
const list1 = new list("Hello");
listArray.push(list1);


function showList() {
    for(const list of listArray) {
        const para = document.createElement("p");
        para.textContent = list.title;
        container.appendChild(para)
        
    }
}


export {showList}