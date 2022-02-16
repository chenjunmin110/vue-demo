const route = {
  path: '/home',
  name: 'home',
  component: resolve => require(['@/pages/home/root'], resolve)
}
export default route
