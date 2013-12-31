sample = { phoneNumbers: [ { type: 'home', pref: false, value: '(914) 419-1539' } ],
  id: '1',
  name: 
   { givenName: 'Jason',
     familyName: 'Novack',
     formatted: 'Jason Novack' },
  displayName: 'Jason Novack',
  urls: [],
  emails: 
   [ { type: 'home',
       pref: false,
       value: 'jason.novack@gmail.com' } ],
  ims: [],
  organizations: [ { name: 'Placemeter' } ],
  addresses: [] }

var sampleContacts = [
  { name: { formatted: 'Jason Novack' }, phoneNumbers: [ { type: 'home', pref: false, value: '(914) 419-1539' }], emails: [{ value: 'jason.novack@gmail.com' }], twitter: '@jnovack', skype: 'jnovack' },
  { name: { formatted: 'Sonny Byrd' }, phoneNumbers: [ { type: 'home', pref: false, value: '(914) 419-1539' }], emails: [{ value: 'jason.novack@gmail.com' }], twitter: '@jnovack', skype: 'jnovack' },
  { name: { formatted: 'John Resig' }, phoneNumbers: [ { type: 'home', pref: false, value: '(914) 419-1539' }], emails: [{ value: 'jason.novack@gmail.com' }], twitter: '@jnovack', skype: 'jnovack' },
  { name: { formatted: 'George Clooney' }, phoneNumbers: [ { type: 'home', pref: false, value: '(914) 419-1539' }], emails: [{ value: 'jason.novack@gmail.com' }], twitter: '@jnovack', skype: 'jnovack' },
  { name: { formatted: 'Edward Norton' }, phoneNumbers: [ { type: 'home', pref: false, value: '(914) 419-1539' }], emails: [{ value: 'jason.novack@gmail.com' }], twitter: '@jnovack', skype: 'jnovack' }
];

sampleLists = [
  { id: 1, name: 'Favorites', contacts: [{ name: { formatted: 'Jason Novack' }}, { name: { formatted: 'Sonny Byrd' }}] },
  { id: 2, name: 'Friends', contacts: [{ name: { formatted: 'Dale Doback' }}, { name: { formatted: 'Brendan Doback' }}] },
  { id: 3, name: 'Family', contacts: [{ name: { formatted: 'Don Jon' }}, { name: { formatted: 'Eddy' }}] },
  { id: 4, name: 'Work', contacts: [{ name: { formatted: 'Harold' }}, { name: { formatted: 'Kumar' }}] },
  { id: 5, name: 'Late Night', contacts: [{ name: { formatted: 'John Cho' }}, { name: { formatted: 'Kal Penn' }}] }
];