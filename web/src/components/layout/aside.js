import React from 'react'

const Aside = ({ children }) => {
  return (
    <aside className="w-72 hidden md:block flex-shrink-0 relative">
      <section className="fixed w-72 my-36 pt-24 pl-14 overflow-scroll inset-y-0">
        {children}
      </section>
    </aside>
  )
}

export default Aside
