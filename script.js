const url = "https://dummyjson.com/users";
const fetchData = {
  method: "GET",
  headers: {
    "content-type": "application/json",
    Accept: "application/json",
  },
};

let users = document.querySelector("#users")

fetch(url, fetchData)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const response = data.users;
    console.log(response);
    users.innerHTML = response
      .map(function (value) {
        return `
        <div class="users">
        <img src="${value.image}" alt="">
        <p>Name:${value.firstName}-<span>${value.lastName}</span></P>
        <p>Age:${value.age}</p>
        <p>Date of Birth:${value.birthDate}</p>
        <p>Gender:${value.gender}</p>
        <p>SSN:${value.ssn}</p>
        </div>
        `;
      })
      .join("");
  });