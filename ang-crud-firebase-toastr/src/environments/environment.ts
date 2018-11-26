// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//implementamos dentro de firebase el siguiente codigo al elegir una app web.
export const environment = {
  production: false,
  firebase: {
      apiKey: "AIzaSyC_qtlmsaKqvZmCErnw4wGFw2E5rH4bf28",
      authDomain: "ang-crud-firebase-toastr.firebaseapp.com",
      databaseURL: "https://ang-crud-firebase-toastr.firebaseio.com",
      projectId: "ang-crud-firebase-toastr",
      storageBucket: "ang-crud-firebase-toastr.appspot.com",
      messagingSenderId: "142225534785"
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
