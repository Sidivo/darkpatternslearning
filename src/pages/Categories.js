import React from 'react'
import '../components/css-components/Categories.css';
import CategoriesBody from '../components/js-components/CategoriesBody'
import CategoriesHeader from '../components/js-components/CategoriesHeader'





function Categories() {

  return (
    <div className="categories">
      <CategoriesHeader />
      <CategoriesBody />
    </div>
  )
}

export default Categories