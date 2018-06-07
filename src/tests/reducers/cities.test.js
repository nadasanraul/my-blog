import citiesReducer from '../../reducers/cities';
import cities from '../fixtures/cities';

test('should set the cities state', () => {
    const action = {
        type: 'SET_CITIES',
        cities
    };
    const state = citiesReducer(undefined, action);
    expect(state).toBe(cities);
});

// test('should add city to state', () => {
//     const city = {
//         name: 'Amsterdam',
//         country: 'Netherlands',
//         description: 'This is amsterdam',
//         image: undefined
//     }
//     const action = {
//         type: 'ADD_CITY',
//         city
//     };
//     const state = citiesReducer(undefined, action);
//     expect(state).toEqual([city]);
// });