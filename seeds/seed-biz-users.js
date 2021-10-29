
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('business_users').del()
    .then(function () {
      // Inserts seed entries
      return knex('business_users').insert([
        {id: 'auth0|6177bed472efa80069d3070b', business_name:'Eco Cloth',username:'Hanako',email:'test@gmail.com'},
      ]);
    });
};
