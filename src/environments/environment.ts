// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  firebase: {
    apiKey: 'AIzaSyDAG2ZRNzb_gxYSyW8y0I53YabhYzSqwz4',
    authDomain: 'myapp-7bb46.firebaseapp.com',
    databaseURL: 'https://myapp-7bb46.firebaseio.com',
    projectId: 'myapp-7bb46',
    storageBucket: 'gs://myapp-7bb46.appspot.com'
    ,
    messagingSenderId: '647153384204'
  }
};
