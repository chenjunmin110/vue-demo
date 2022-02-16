const route = {
  path: '/cart',
  name: 'cart',
  component: resolve => require(['@/pages/cart/root'], resolve)
}
export default route
