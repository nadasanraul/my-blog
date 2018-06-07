import thunk from 'redux-thunk';
import database from '../../firebase/firebase';
import configureMockStore from 'redux-mock-store';
import {setCities, startSetCities} from '../../actions/cities';
import cities from '../fixtures/cities';

const uid = 'test';
const testState = {auth: {uid}};
const createMockStore = configureMockStore([thunk]);

beforeEach(done => {
    const data = {};
    cities.forEach(({id, name, country, image}) => {
        data[id] = {name, country, image};
    });
    database.ref('cities').set(data).then(() => done());
});

test('should set up setCities', () => {
    const action = setCities(cities);
    expect(action).toEqual({
        type: 'SET_CITIES',
        cities
    });
});

test('should set up startSetCities', done => {
    const store = createMockStore(testState);
    store.dispatch(startSetCities())
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'SET_CITIES',
                cities
            });
            done();
        });
});

// test('should set up addCity with city data', () => {
//     const city = {
//         name: 'Amsterdam',
//         country: 'Netherlands',
//         description: 'This is Amsterdam',
//         image: undefined
//     }
//     const action = addCity(city);
//     expect(action).toEqual({
//         type: 'ADD_CITY',
//         city
//     });
// });