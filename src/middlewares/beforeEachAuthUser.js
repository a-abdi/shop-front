export default function checkAuth(to) {
    const userIsLoggedIn = localStorage.getItem('user')

    if (to.meta.requiresAuthUser && !userIsLoggedIn) {
        return {
            path: '/login',
            // save the location we were at to come back later
            query: { redirect: to.fullPath },
        }
    }
}