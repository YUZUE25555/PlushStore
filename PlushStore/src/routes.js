import React from 'react'

const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const membermanage = React.lazy(() => import('./views/member/membermanage'))

const manageplush = React.lazy(() => import('./views/plush/manageplush'))
const insertplush = React.lazy(() => import('./views/plush/insertplush'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/member/membermanage', name: 'membermanage', element: membermanage },
  { path: '/plush/manageplush', name: 'manageplush', element: manageplush },
  { path: '/plush/insertplush', name: 'insertplush', element: insertplush },

  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
]

export default routes
