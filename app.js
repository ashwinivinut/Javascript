const form = document.getElementById("form");
const itemsList = document.getElementById("items-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const item = document.getElementById("item").value;
  const desc = document.getElementById("desc").value;
  const quantity = document.getElementById("quan").value;
  const price = document.getElementById("price").value;

  // Create an object with form data
  const details = {
    item: item,
    desc: desc,
    quantity: quantity,
    price: price,
  };

  // Make POST request to Crudcrud API using Axios
  axios
    .post(
      "https://crudcrud.com/api/ef2ed093350a420fbc1af1751877975d/app", // Replace with your valid API key
      details
    )
    .then((response) => {
      console.log("Response:", response);

      // Create a new list item to display the submitted data
      const li = document.createElement("li");
      li.textContent = `Item: ${response.data.item}, Description: ${response.data.desc}, Quantity: ${response.data.quantity}, Price: ${response.data.price}`;

      // Append the new list item to the unordered list
      itemsList.appendChild(li);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  // For debugging
  console.log("Stored object:", details);
});
