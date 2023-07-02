document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "yPfrR4NqcgVMswBg6lxVvLy32tPaonic";
  const apiUrl = "http://api.giphy.com/v1/gifs/search";

  const searchButton = document.getElementById("search-button");
  const deleteButton = document.getElementById("delete-button");
  const gifContainer = document.getElementById("gif-container");

  searchButton.addEventListener("click", () => {
    const searchInput = document.getElementById("search-input").value;
    const requestUrl = `${apiUrl}?q=${searchInput}&api_key=${apiKey}`;

    fetch(requestUrl)
      .then((response) => response.json())
      .then((data) => {
        displayGIF(data.data);
      })
      .catch((error) => {
        console.error(
          "Đã có lỗi xảy ra trong quá trình tìm kiếm ảnh GIF.",
          error
        );
      });
  });

  deleteButton.addEventListener("click", () => {
    gifContainer.innerHTML = "";
  });

  function displayGIF(gifs) {
    gifs.forEach((gif) => {
      const imageUrl = gif.images.fixed_height.url;
      const gifItem = document.createElement("div");
      gifItem.classList.add("gif-item");
      const image = document.createElement("img");
      image.src = imageUrl;

      gifItem.appendChild(image);
      gifContainer.appendChild(gifItem);
    });
  }
});
