export function getLocalStorage() {
    return JSON.parse(localStorage.getItem('root'));
}

export function setLocalStorage(storage) {
    localStorage.setItem('root', JSON.stringify(storage))
}