const basicInfo = {
  name: "Rahul",
  age: 25
};

const contactInfo = {
  email: "rahul@gmail.com",
  city: "Kolkata"
};

const userProfile = {
  ...basicInfo,
  ...contactInfo
};

console.log(userProfile);