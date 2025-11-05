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
        <p><strong>Name:</strong>${value.firstName}-<span>${value.lastName}</span></P>
        <p><strong>Age:</strong>${value.age}</p>
        <p><strong>Date of Birth:</strong>${value.birthDate}</p>
        <p><strong>Gender:</strong>${value.gender}</p>
        <p><strong>SSN:</strong>${value.ssn}</p>
        <p><strong>Phone:</strong>${value.phone}</p>
        </div>
        `;
      })
      .join("");
  });