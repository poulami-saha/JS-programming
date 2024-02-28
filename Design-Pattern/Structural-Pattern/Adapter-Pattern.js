//The Adapter allows two objects with incompatible interfaces to interact with each other.

const Profile = [
  { fullName: "John Doe", experience: 8.9 },
  { fullName: "Michael Koe", experience: 2.8 },
  { fullName: "Harry Potter", experience: 8.8 },
];

const NewPerson = {
  firstName: "Kelly",
  lastName: "Muller",
  experienceInMonths: 72,
};

const personAdapter = (newEntry) => {
  return {
    fullName: `${newEntry.firstName} ${newEntry.lastName}`,
    experience: newEntry.experienceInMonths / 12,
  };
};

Profile.push(personAdapter(NewPerson));
console.log(Profile);
