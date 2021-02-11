import 'tailwindcss/base.css'
import 'tailwindcss/components.css'
import 'tailwindcss/utilities.css'
import React from 'react'
import Layout from './src/components/layout'

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
