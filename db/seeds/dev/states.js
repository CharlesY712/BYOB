import {cityData} from '../../../cityData';
import {stateData} from '../../../data.json';

const createStates = (knex, state) => {
  return knex('state').insert({
    state: state.state,
    numberOfStations: state.numberOfStations
  }, 'id')
    .then(stateId => {
      let cityPromises = [];

      state.cities.forEach(city => {
        cityPromises.push(
          createCity(knex, {
            name: city.name,
            
          })
        )
      });
    })
}


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
