export default {
    data(){
        return {
            path: '',
            pageName: ''
        }
    },
    beforeMount(){
        const pathName = window.location.pathname
        .split('/')
        .filter(path => path !== '')
        this.path = pathName.map(path => path.charAt(0).toUpperCase() + path.slice(1))
        this.pageName = this.path[this.path.length - 1]
    },
}