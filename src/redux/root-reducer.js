import { combineReducers } from 'redux';

import categoryReducer from './category/category.reducer';
import productReducer from './product/product.reducer';

export default combineReducers({
    categories: categoryReducer,
    products: productReducer
});