
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tapsToUsers').del()
    .then(function () {
      // Inserts seed entries
      return knex('tapsToUsers').insert([
        {tap_id:'178334',business_user_id:'1'},
        {tap_id:'178335',business_user_id:'2'},
        {tap_id:'178336',business_user_id:'3'},
        {tap_id:'178339',business_user_id:'4'},
        {tap_id:'178340',business_user_id:'5'},
        {tap_id:'196740',business_user_id:'6'},
        {tap_id:'196742',business_user_id:'7'},
        {tap_id:'196743',business_user_id:'8'},
        {tap_id:'196745',business_user_id:'9'},
        {tap_id:'196747',business_user_id:'10'},
        {tap_id:'196776',business_user_id:'11'},
        {tap_id:'196777',business_user_id:'12'},
        {tap_id:'196778',business_user_id:'13'},
        {tap_id:'196783',business_user_id:'14'},
        {tap_id:'196819',business_user_id:'15'},
        {tap_id:'196849',business_user_id:'16'},
        {tap_id:'196864',business_user_id:'17'},
        {tap_id:'196886',business_user_id:'18'},
        {tap_id:'196897',business_user_id:'19'},
        {tap_id:'196991',business_user_id:'20'},
        {tap_id:'196992',business_user_id:'21'},
        {tap_id:'196993',business_user_id:'22'},
        {tap_id:'196994',business_user_id:'23'},
        {tap_id:'196995',business_user_id:'24'},
        {tap_id:'196997',business_user_id:'25'},
        {tap_id:'196998',business_user_id:'26'},
        {tap_id:'196999',business_user_id:'27'},
        {tap_id:'197000',business_user_id:'28'},
        {tap_id:'197001',business_user_id:'29'},
        {tap_id:'197003',business_user_id:'30'},
        {tap_id:'197004',business_user_id:'31'},
        {tap_id:'197006',business_user_id:'32'},
        {tap_id:'197008',business_user_id:'33'},
        {tap_id:'197009',business_user_id:'34'},
        {tap_id:'197015',business_user_id:'35'},
        {tap_id:'197064',business_user_id:'36'},
        {tap_id:'197068',business_user_id:'37'},
        {tap_id:'197070',business_user_id:'38'},
        {tap_id:'197071',business_user_id:'39'},
        {tap_id:'197072',business_user_id:'40'},
        {tap_id:'197107',business_user_id:'41'},
        {tap_id:'197119',business_user_id:'42'},
        {tap_id:'197122',business_user_id:'43'},
        {tap_id:'197123',business_user_id:'44'},
        
      ]);
    });
};
