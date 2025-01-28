const stack_div = document.querySelector('.stack');
const push_btn = document.querySelector('.push-btn');
const pop_btn = document.querySelector('.pop-btn');

const item_height = 60;
let item_count = 0;

const max_count = 15

push_btn.addEventListener('click', () => {
    if (item_count == max_count) {
        alert("cannot push more into the stack")
        return
    }

    const stack_item = document.createElement('div')
    stack_item.className += 'stack-item'
    
    const stack_text = document.querySelector('.stack-input').value
    console.log(stack_text)

    stack_item.innerText = stack_text
    stack_item.id = item_count

    const item_position = (item_count++) * item_height;
    stack_item.style.bottom = `${item_position}px`

    stack_div.append(stack_item)
})

pop_btn.addEventListener('click', () => {
    const top_element = document.getElementById(`${--item_count}`)

    if (item_count == -1) {
        item_count = 0
        alert("no element in the stack")
        return
    }

    top_element.remove()
})