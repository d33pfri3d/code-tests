// Custom debounce function

function debounce(func, time) {
    let timer;

    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, arguments)
        }, time)
    }
}