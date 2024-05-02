import mongoose from "mongoose";
import Person from "./schemas/person.js";
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// const person = new Person({
//     name: 'John Doe',
//     age: 30,
//     favoriteFoods: ['pizza', 'pasta'],
//   });

//   person.save((err, savedPerson) => {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     console.log('Person saved:', savedPerson);
//   });

// const arrayOfPeople = [
//     { name: 'Alice', age: 25, favoriteFoods: ['sushi', 'ramen'] },
//     { name: 'Bob', age: 40, favoriteFoods: ['steak', 'potatoes'] },
//     { name: 'Charlie', age: 18, favoriteFoods: ['pizza', 'burgers'] },
//   ];

//   Person.create(arrayOfPeople, (err, createdPeople) => {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     console.log('People created:', createdPeople);
//   });

// Person.find({ name: 'John' }, (err, foundPeople) => {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     console.log('People found:', foundPeople);
//   });

// Person.findOne({ favoriteFoods: 'pizza' }, (err, foundPerson) => {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     console.log('Person found:', foundPerson);
//   });

// const personId = '_id';

// Person.findById(personId, (err, foundPerson) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   console.log('Person found:', foundPerson);
// });
