const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for(const placeholder of placeholders) {
    placeholder.addEventListener('dragover')
    placeholder.addEventListener('dragenter')
    placeholder.addEventListener('dragleave')
    placeholder.addEventListener('drop')
}

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => 
    event.target.classList.add('hide'), 0)
}

function dragend(event) {
    // event.target.classList.remove('hold', 'hide')
    event.target.className = 'item'
}

function dragover(event) {
    
}
function dragenter(event) {
    
}
function dragleave(event) {
    
}
function drop(event) {
    
}