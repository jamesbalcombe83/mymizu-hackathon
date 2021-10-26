
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('business_users').del()
    .then(function () {
      // Inserts seed entries
      return knex('business_users').insert([
        {business_name:'A&F COUNTRY 本店',username:'dummyname',email:'dummy@email.com'},
        {business_name:'Aruru （アルル）',username:'dummyname',email:'dummy@email.com'},
        {business_name:'Bakery - Bike stop',username:'dummyname',email:'dummy@email.com'},
        {business_name:'beachhouse',username:'dummyname',email:'dummy@email.com'},
        {business_name:'BLINK cafe',username:'dummyname',email:'dummy@email.com'},
        {business_name:'brigk Café',username:'dummyname',email:'dummy@email.com'},
        {business_name:'Cafe ROSE MARY / カフェローズマリー',username:'dummyname',email:'dummy@email.com'},
        {business_name:'cafē水照玉 / Suishodama Cafe / Hostel',username:'dummyname',email:'dummy@email.com'},
        {business_name:'Cinema Heaven',username:'dummyname',email:'dummy@email.com'},
        {business_name:'Coppice 吉祥寺',username:'dummyname',email:'dummy@email.com'},
        {business_name:'Glocal Nagoya Backpackers Hostel',username:'dummyname',email:'dummy@email.com'},
        {business_name:'GRANNE HANTVERK / 皆木重人家具デザイン製作所',username:'dummyname',email:'dummy@email.com'},
        {business_name:'Guesthouse Waya',username:'dummyname',email:'dummy@email.com'},
        {business_name:'Kolbo',username:'dummyname',email:'dummy@email.com'},
        {business_name:'LikeMeetWork - Innovation Lab and CoWorking Space',username:'dummyname',email:'dummy@email.com'},
        {business_name:'London Cupcakes',username:'dummyname',email:'dummy@email.com'},
        {business_name:'love lotus Bean to Bar chocolate cafe',username:'dummyname',email:'dummy@email.com'},
        {business_name:'lululemon Lazona Kawasaki',username:'dummyname',email:'dummy@email.com'},
        {business_name:'mimet（ミメ）Cafe Bistro',username:'dummyname',email:'dummy@email.com'},
        {business_name:'Nagatacho GRiD',username:'dummyname',email:'dummy@email.com'},
        {business_name:'Nagoya Travellers Hostel',username:'dummyname',email:'dummy@email.com'},
        {business_name:'Naorai Brewery / ナオライ神石高原',username:'dummyname',email:'dummy@email.com'},
        {business_name:'Nue @ Wonderland / ニュー',username:'dummyname',email:'dummy@email.com'},
        {business_name:'Organic Café & restaurant RK GARDEN',username:'dummyname',email:'dummy@email.com'},
        {business_name:'Osteria Mio (Italian Restaurant)',username:'dummyname',email:'dummy@email.com'},
        {business_name:'Pangaea Field',username:'dummyname',email:'dummy@email.com'},
        {business_name:'Patagonia Hiroshima',username:'dummyname',email:'dummy@email.com'},
        {business_name:'Port Of Call',username:'dummyname',email:'dummy@email.com'},
        {business_name:'SETOUCHI kubibase',username:'dummyname',email:'dummy@email.com'},
        {business_name:'small alley cafe - butter',username:'dummyname',email:'dummy@email.com'},
        {business_name:'Social Book Cafe ハチドリ舎',username:'dummyname',email:'dummy@email.com'},
        {business_name:'SOUPHOLIC',username:'dummyname',email:'dummy@email.com'},
        {business_name:'SUZUKI GUESTHOUSE',username:'dummyname',email:'dummy@email.com'},
        {business_name:'TENT幕張 / TENT Makuhari',username:'dummyname',email:'dummy@email.com'},
        {business_name:'TokyoMTG / 東京MTG水道橋店',username:'dummyname',email:'dummy@email.com'},
        {business_name:'Up To You Coffee',username:'dummyname',email:'dummy@email.com'},
        {business_name:'オープンオフィスSENSE（センス）Open Office, Sense',username:'dummyname',email:'dummy@email.com'},
        {business_name:'こじま整骨院 / Kojima Osteopath',username:'dummyname',email:'dummy@email.com'},
        {business_name:'タコリッコ Taco Rico 愛宕グリーンヒルズ店',username:'dummyname',email:'dummy@email.com'},
        {business_name:'ヨヨナム / Yoyonam',username:'dummyname',email:'dummy@email.com'},
        {business_name:'旅花 / Tabihana Cafe',username:'dummyname',email:'dummy@email.com'},
        {business_name:'淡路島リトリート',username:'dummyname',email:'dummy@email.com'},
        {business_name:'追分そば茶家 / Oiwake Soba Noodle Shop',username:'dummyname',email:'dummy@email.com'},
        {business_name:'遠野醸造TAPROOM / TONO BREWING',username:'dummyname',email:'dummy@email.com'},        
      ]);
    });
};
