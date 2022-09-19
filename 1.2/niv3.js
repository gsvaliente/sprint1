// const names = ['John', 'Gabriel', 'Mike'];
// const greet = names.map(name => `Hello ${name}`);
// console.log(greet);

// const greeting = function (name) {
//   console.log(`Hello ${name}`);
// };

// const greeting2 = name => console.log(`Hello ${name}`);

// const userInfo = (firstName, lastName, callback) => {
//   const fullName = `${firstName} ${lastName}`;
//   callback(fullName);
// };

// userInfo('Gabriel', 'Valiente', greeting2);

const hasMeeting = true;
const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: 'Marketing Meeting',
      location: 'Skype',
      time: '1:00 PM',
    };
    resolve(meetingDetails);
  } else {
    reject(new Error('Meeting already scheduled'));
  }
});

meeting
  .then(res => {
    //resolve data
    console.log('Meeting scheduled');
    console.log(res);
  })
  .catch(err => {
    //reject data
    console.log(err.message);
  });
