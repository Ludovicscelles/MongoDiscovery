const mongoose = require("mongoose");
const WilderModel = require("./wilder/wilder.model");
const TechModel = require("./tech/tech.model");

const wilders = [
  {
    age: 28,
    author: "Tom",
    city: "London",
    languages: ["JavaScript", "Python"],
    training: [
      {
        year: 2020,
        label: "MSc Computer Science",
      },
    ],
  },
  {
    age: 19,
    author: "John",
    city: "Paris",
    languages: ["Java", "C++"],
    training: [
      {
        year: 2019,
        label: "BSc Computer Science",
      },
    ],
  },
  {
    age: 35,
    author: "Jane",
    city: "Berlin",
    languages: ["Python", "Ruby"],
    training: [
      {
        year: 2010,
        label: "BSc Computer Science",
      },
    ],
  },
  {
    age: 25,
    author: "Alice",
    city: "New York",
    languages: ["JavaScript", "Python"],
    training: [
      {
        year: 2015,
        label: "BSc Computer Science",
      },
    ],
  },
  {
    age: 32,
    author: "Bob",
    city: "Madrid",
    languages: ["JavaScript", "Java"],
    training: [
      {
        year: 2012,
        label: "BSc Computer Science",
      },
    ],
  },
];

const techs = [
  {
    name: "JavaScript",
    description:
      "JavaScript is a programming language that conforms to the ECMAScript specification.",
    level: 3,
    linkedProject: {
      date: new Date("2021-01-01"),
      description: "My first  project",
    },
  },
  {
    name: "Python",
    description:
      "Python is an interpreted high-level general-purpose programming language.",
    level: 2,
    linkedProject: {
      date: new Date("2021-02-01"),
      description: "My second project",
    },
  },
  {
    name: "Java",
    description:
      "Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
    level: 1,
    linkedProject: {
      date: new Date("2021-03-01"),
      description: "My third project",
    },
  },
  {
    name: "Ruby",
    description:
      "Ruby is an interpreted, high-level, general-purpose programming language.",
    level: 3,
    linkedProject: {
      date: new Date("2021-04-01"),
      description: "My fourth project",
    },
  },
  {
    name: "C++",
    description:
      "C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language.",
    level: 2,
    linkedProject: {
      date: new Date("2021-05-01"),
      description: "My fifth project",
    },
  },
];

mongoose
  .connect("mongodb://mongodb:27017/tom", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");

    await WilderModel.deleteMany({});
    await WilderModel.insertMany(wilders);
    console.log("Wilders done");

    await TechModel.deleteMany({});
    await TechModel.insertMany(techs);
    console.log("Techs done");

    console.log("Seed done");

    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
  });
