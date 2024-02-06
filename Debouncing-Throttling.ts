//Debouncing:
//Debouncing is a technique that delays the execution of a function until a certain amount of time has passed since the last event's occurrence. 
//It's useful when you want the function to be called after a period of inactivity, and 
// it prevents rapid consecutive calls.

function debounce(func, delay) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args)
        }, delay)
    }
}

const debounceSearch = debounce((query) => {
    console.log(`Searching for ${query}`)
    //Make some API
}, 300)

const searchInput = document.getElementById("search-input");
searchInput?.addEventListener("input", (event: any) => {
    debounceSearch(event.target.value)
})


//Throttling:
//Throttling typically involves setting a fixed interval between function calls using timers or timestamps to track the last invocation time.
function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall >= delay) {
            func(...args);
            lastCall = now;
        }
    }
}

const throttledScrollHandler = throttle(() => {
    console.log("Loading more content")
}, 1000)

window.addEventListener("scroll", throttledScrollHandler)