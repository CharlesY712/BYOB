const cityData = require('../../../cityData');
const stateData = require('../../../stateData');

exports.seed = function(knex, Promise) {
  return knex('cities').del()
    .then(() => {
      return knex('states').del();
    })
    .then(() => {
      return knex('states').insert(stateData);
    })
    .then(() => {
      let cityPromises = [];

      cityData.forEach(city => {
        let state = city.state;

        cityPromises.push(createCity(knex, city, state));
      })

      return Promise.all(cityPromises)
    })
}

const createCity = (knex, city, state) => {
  return knex('states').where('state', state).first()
    .then(stateRecord => {
      let fuels = city.station_counts.fuels
      
      return knex('cities').insert({
        city: city.name,
        BD: fuels.BD.total,
        CNG: fuels.CNG.total,
        E85: fuels.E85.total,
        ELEC: fuels.ELEC.total,
        HY: fuels.HY.total,
        LNG: fuels.LNG.total,
        LPG: fuels.LPG.total,
        state_id: stateRecord.id
      })
    })
}