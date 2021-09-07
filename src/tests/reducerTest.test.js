import categoryReducer from '../store/reducers/categoryReducer';
import foodReducer from '../store/reducers/foodReducer';

describe('Category reducer', () => {
  it('should return the initial state', () => {
    expect(categoryReducer({}, 'ADD_CATEGORIES')).toEqual({});
  });

  it('should return categories', () => {
    expect(categoryReducer(['a', 'b', 'c'], 'ADD_CATEGORIES')).toEqual(['a', 'b', 'c']);
  });
});

describe('Food reducer', () => {
  it('should return the initial state', () => {
    expect(foodReducer({}, 'FETCH_FOODS')).toEqual({});
  });

  it('should return categories', () => {
    expect(foodReducer(['a', 'b', 'c'], 'FETCH_FOODS')).toEqual(['a', 'b', 'c']);
  });
});