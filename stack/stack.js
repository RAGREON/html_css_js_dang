const stack_div = document.querySelector('.stack');
const push_btn = document.querySelector('.push-btn');
const pop_btn = document.querySelector('.pop-btn');

const item_height = 60;
let item_count = 0;

const max_count = 15

push_btn.addEventListener('click', () => {
    push_btn.disabled = true

    if (item_count == max_count) {
        alert("cannot push more into the stack")
        return
    }

    const stack_item = document.createElement('div')
    stack_item.className += 'stack-item'
    
    const item_position = (item_count++) * item_height
    stack_item.style.bottom = `${item_position}px`

    document.documentElement.style.setProperty('--top-stack-pos', `${item_position}px`)
    
    const stack_text = document.querySelector('.stack-input').value
    console.log(stack_text)

    stack_item.innerText = stack_text
    stack_item.id = item_count


    stack_div.append(stack_item)

    setTimeout(() => {
        push_btn.disabled = false;
    }, (870));

    console.log(item_count)
})

pop_btn.addEventListener('click', () => {
    const top_element = document.getElementById(`${item_count}`)
    
    if (!top_element) {
        item_count = 0
        alert("no element in the stack")    
        return
    }
    
    pop_btn.disabled = true

    top_element.style.animation = "0.87s remove-anim ease-in-out"

    setTimeout(() => {
        pop_btn.disabled = false;
        top_element.remove()
        item_count = item_count - 1

        console.log(item_count)
    }, (870));


})