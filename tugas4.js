let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

//soal 1
let newData = {
    ...data,
    name: "Wisnu Hidayat",
    email: "wisnuhidayat318@gmail.com",
    hobby: ['badminton','game'],
  };

  console.log(newData)
  
//soal 2
// bisa dengan code
const {street, suite} = data.address
// const { address: { street, city } } = data;
console.log(street)