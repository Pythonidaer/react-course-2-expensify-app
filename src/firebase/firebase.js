import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_API_ID,
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// child_removed
// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref("notes/-NDeL2HJhZ-30tz6RV0N").update({
//   body: "Take bath",
// });
// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("notes/-NDeL2HJhZ-30tz6RV0N").remove();
// how we integrate firebase with our application
// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     console.log(snapshot.val());
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });

//     console.log(expenses);
//   });

// database
//   .ref("expenses")
//   .on("value", (snapshot) => {
//     console.log(snapshot.val());
//   })
//   .catch((e) => {
//     console.log("e", e);
//   });
// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
// });

// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
// });

// setTimeout(() => {
//   database.ref("age").off(onValueChange);
// }, 7000);

// database.ref("expenses").push({
//   description: "Phone and Cable",
//   note: "Comm Utilities",
//   amount: 25000,
//   createdAt: 10 - 5,
// });
// database.ref("notes/-NDeL2HJhZ-30tz6RV0N").update({
//   body: "Take bath",
// });

// {
//     description: "Rent",
//   note: "Mik Venmo'd other half",
// amount: 180000
// createdAt: 10-5
// }
// {
//      description: "Phone and Cable",
//   note: "Comm Utilities",
// amount: 25000
// createdAt: 10-5
// }

// const firebaseNotes = {
//   notes: {
//     tawitniaowt: {
//       title: "First note!",
//       body: "This is my note",
//     },
//     io258u1098u09u: {
//       title: "Another note",
//       body: "This is my note",
//     },
//   },
// };

// // firebase doesn't support arrays
// const notes = [
//   {
//     id: "12",
//     title: "First note!",
//     body: "This is my note",
//   },
//   {
//     id: "761ase",
//     title: "Another note",
//     body: "This is my note",
//   },
// ];

// database.ref("notes").set(notes);

// Set up Data subscription - once, on, off
// const onValueChange = database.ref().on(
//   "value",
//   (snapshot) => {
//     console.log(snapshot.val());
//     console.log("test");
//     // Jonathan is a React Developer at Wayfair.
//     const user = snapshot.val();
//     const username = user.name;
//     const jobTitle = user.job.title;
//     const jobCompany = user.job.company;
//     // const username = snapshot.val("name");
//     // const jobTitle = snapshot.val("job/title");
//     // const jobCompany = snapshot.val("job/company");
//     console.log(`${username} is a ${jobTitle} at ${jobCompany}.`);
//   },
//   (e) => {
//     console.log("Error with data fetching", e);
//   }
// );

// setTimeout(() => {
//   database.ref("age").off(onValueChange);
// }, 7000);

// const onValueChange = database.ref().on(
//   "value",
//   (snapshot) => {
//     console.log(snapshot.val());
//   },
//   (e) => {
//     console.log("Error with data fetching", e);
//   }
// );

// // when changes are made
// database
//   .ref()
//   .on("value", (snapshot) => {
//     console.log(snapshot.val());
//   })
//   .catch((e) => {
//     console.log("e", e);
//   });

// setTimeout(() => {
//   database.ref("age").set(31);
// }, 3500);

// setTimeout(() => {
//   database.ref("age").off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref("age").set(35);
// }, 10500);

// database
//   //   .ref()
//   .ref("location/city")
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("Eror fetching data", e);
//   });

// database
//   .ref()
//   .set({
//     name: "Jonathan Hammond",
//     age: 31,
//     stressLevel: 9,
//     job: {
//       title: "React Developer",
//       company: "Beacon Hill Staffing",
//     },
//     location: {
//       city: "Salem",
//       country: "United States",
//     },
//   })
//   .then(() => {
//     console.log("Data is saved!");
//   })
//   .catch((e) => {
//     console.log("This failed.", e);
//   });

//   To wipe data - equivalent to calling remove
// database.ref("isSingle").set(null);

// whole point is to update multiple things in one shot
// only updates at the root level, not nested objects
// UPDATES SUPPORT PROMISES
// database.ref().update({
//   //   name: "Jonny Hambone",
//   //   age: 32,
//   //   job: "React Developer",
//   "location/city": "Boston",
//   stressLevel: 4,
//   "job/company": "Wayfair",
//   //   location: {
//   //     city: "Beverly",
//   //   },
// });

// Delete a DB's information
// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("Successfully removed.");
//   })
//   .catch((e) => {
//     console.log("Failed to remove: ", e);
//   });

// Remove a reference attribute
// const singleRef = firebase.database().ref("isSingle");
// singleRef
//   .remove()
//   .then(() => {
//     console.log("Successfully removed.");
//   })
//   .catch((e) => {
//     console.log("Failed to remove: ", e);
//   });

// database.ref().set({
//   name: "Jonathan Hammond",
// });
// database.ref().set({
//   name: "Jonathan Hammond",
//   age: 31,
//   isSingle: true,
//   location: {
//     city: "Salem",
//     country: "United States",
//   },
// });
//   .then(() => {
//     console.log("Data is saved!");
//   })
//   .catch((e) => {
//     console.log("This failed.", e);
//   });

// INSTRUCTION CODE
// database.ref().set("This is my data.");

// overrides if we just do db.ref().set({age: 27})
// database.ref("age").set(27);
// database.ref("location/city").set("Peabody");

// database
//   .ref("attributes")
//   .set({
//     height: 70,
//     weight: 175,
//   })
//   .then(() => {
//     console.log("Data for reference request is saved!");
//   })
//   .catch((e) => {
//     console.log("This reference request failed.", e);
//   });

console.log("I made a request to change the data.");
