export default function checkGuest(next) {
    const isLoggedIn = localStorage.getItem('user')

    if(isLoggedIn) {
        next('/')
    } else {
        next()
    }
}