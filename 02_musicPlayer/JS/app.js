function changeBox() {
    const first = document.getElementById('page1')
    const second = document.getElementById('page2')
    const button = document.getElementById('btn');
    if (button.innerHTML == 'page1') {
        first.style.display = 'none'
        second.style.display = 'block'
        button.innerHTML = 'page2'
    } else if (button.innerHTML = 'page2') {
        first.style.display = 'block'
        second.style.display = 'none'
        button.innerHTML = 'page1'
    }
}