import React from 'react';
import { useDispatch } from 'react-redux';
import { categoriesActions } from '../redux/categories/categoriesSlice';

function CategoriesPage() {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="categories-wrapper row">
        <button type="button" onClick={() => dispatch(categoriesActions.checkStatus('Under Construction'))}>Check status</button>
      </div>
    </div>
  );
}

export default CategoriesPage;
