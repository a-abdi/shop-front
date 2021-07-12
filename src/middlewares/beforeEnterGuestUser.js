export default function UserGuest(next) {
    const userIsLoggedIn = localStorage.getItem('user')

    if(userIsLoggedIn) {
        next('/')
    } else {
        next()
    }
}