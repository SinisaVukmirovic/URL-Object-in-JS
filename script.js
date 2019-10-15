const myUrl = new URL('https://www.youtube.com');

// URL Object
console.log(myUrl);

// protocol of the URL
console.log(myUrl.protocol);

// URL hostname
console.log(myUrl.hostname);

// to change URL hostname
myUrl.hostname = 'google.com';

// to get the entire URL after change
console.log(myUrl.href);
// or
console.log(myUrl.toString());

// modify the search params (query string) for the URL
// least prefered way
myUrl.search = '?name=dom&age=56';
// prefered way
myUrl.searchParams.set('name', 'Dom');
myUrl.searchParams.set('age', 72);
console.log(myUrl.toString());

// using URL Object for the current page
const myNewUrl = new URL(window.location.href);
console.log(myNewUrl);