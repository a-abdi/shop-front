export default function checkAuth(to) {
    const adminIsLoggedIn = localStorage.getItem('admin')

    if (to.meta.requiresAuthAdmin && !adminIsLoggedIn) {
        return {
            path: '/admin/login',
            // save the location we were at to come back later
            query: { redirect: to.fullPath },
        }
    }
}