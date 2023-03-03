import React from 'react';
import { useDispatch } from 'react-redux';

function CategoriesPage() {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="categories-wrapper row">
        <button type="button" onClick={() => dispatch(checkStatus("Under Construction"))}>Check status</button>
      </div>
    </div>
  );
}

export default CategoriesPage;
