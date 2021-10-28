
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tapsToUsers').del()
    .then(function () {
      // Inserts seed entries
      return knex('tapsToUsers').insert([
        {tap_id:178334,business_user_id:'auth0|6177bed472efa80069d3070b'},  
        {tap_id:178336,business_user_id:'auth0|6177bed472efa80069d3070b'},
        {tap_id:196743,business_user_id:'auth0|6177bed472efa80069d3070b'}    
      ]);
    });
};
