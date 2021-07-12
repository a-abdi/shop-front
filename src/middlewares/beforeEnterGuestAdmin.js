export default function UserGuest(next) {
    const adminIsLoggedIn = localStorage.getItem('admin')

    if(adminIsLoggedIn) {
        next('/admin/dashboard')
    } else {
        next()
    }
}