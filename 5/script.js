// Base URL
const apiUrl = "https://api.example.com/data";

// Function to make a GET request using
// TODO: 1. find the error and fix it, 2. finish the function
function fetchData(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) { // Fix:  non-OK responses
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Fetch error:", error); // Handle errors
    });
}

fetchData(apiUrl);

// Function to make a POST request
// TODO: Implement the function
function postData(url, data) {
  fetch(url, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error("There was a problem with the fetch operation: " + response.statusText);
    }
    return response.json(); 
  })

.then((responseData) => {
  console.log("Posted Data Response:", responseData); // Log response
})
.catch((error) => {
  console.error("Post error:", error); // Handle errors
});
}

const dataToPost = {
  name: "John Doe",
  age: 21,
};

postData(apiUrl, dataToPost);
