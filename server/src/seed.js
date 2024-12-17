const mongoose = require("mongoose");
const WilderModel = require("./wilder/wilder.model");

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
