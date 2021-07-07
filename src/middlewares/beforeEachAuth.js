export default function checkAuth(to) {
    const isLoggedIn = localStorage.getItem('user')

    if (to.meta.requiresAuth && !isLoggedIn) {
        return {
            path: '/login',
            // save the location we were at to come back later
            query: { redirect: to.fullPath },
        }
    }
}