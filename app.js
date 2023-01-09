const $searchText = $("#search-text");
const $searchButton = $("#search-giphy");
const $removeButton = $("#remove-images");
const $imageContainer = $("#image-container");

function addPicture(response_data) {
    console.log(response_data);
    $imageContainer.append(`<img src=${response_data} width=200 height=200 class="m-2">`) 
}

$searchButton.on("click", async function (event) {
  event.preventDefault();
  console.log("You just clicked");
  console.log($searchText.val());
  const searchTerm = $searchText.val();
  $searchText.val('');
  const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      api_key: "D9lOp3hW5izRqR90GzV4OisTp2nCke7z",
      q: searchTerm,
      limit: 25,
    },
  });
//   console.log(res.data.data.length);
//   for (let i = 0; i < res.data.data.length; i++) {
//     console.log(res.data.data[i].images.original.url);
//   }

  // Let's choose a random image now
  const image_number = Math.floor(Math.random() * 25);
  console.log("Random Number is", image_number);
  addPicture(res.data.data[image_number].images.original.url);

});

$removeButton.on('click', function(event) {
    $imageContainer.empty()
})
 