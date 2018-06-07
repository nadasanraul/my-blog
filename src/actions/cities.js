import database from '../firebase/firebase';

//SET_CITIES
export const setCities = cities => ({
    type: 'SET_CITIES',
    cities
});

//SET START CITIES
export const startSetCities = () => {
    return dispatch => {
        return database.ref('cities')
            .once('value')
            .then(snapshot => {
                const cities = [];
                snapshot.forEach(childSnapshot => {
                    cities.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });
                dispatch(setCities(cities));
            });
    };
};