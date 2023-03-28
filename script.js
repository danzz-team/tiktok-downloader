const submitButton = document.getElementById("submit-button");
	submitButton.addEventListener("click", () => {
	  const urlInput = document.getElementById("url").value;
	const apiUrl = `https://api.kem.my.id/api/downloader/tiktok?url=${urlInput}&apikey=danzz`;

	fetch(apiUrl)
	.then(response => response.json())
	.then(data => {
	  const pp = data.pp;
	  const username = data.username;
	  const video = data.video;
	  const audio = data.audio;
		const description = data.description;
		const resultDiv = document.getElementById("result");
		resultDiv.innerHTML = "";
		const ppImage = document.createElement("img");
		ppImage.src = pp;
		ppImage.classList.add("rounded-circle", "img-thumbnail", "mx-auto", "d-block", "mb-3");
		resultDiv.appendChild(ppImage);

		const usernameParagraph = document.createElement("p");
		usernameParagraph.innerText = `name: ${username}`;
		usernameParagraph.classList.add("text-center", "fw-bold", "mb-0");
		resultDiv.appendChild(usernameParagraph);
		
		const descriptionParagraph = document.createElement("p");
		descriptionParagraph.innerText = `Description: ${description}`;
		descriptionParagraph.classList.add("text-center", "mb-5");
		resultDiv.appendChild(descriptionParagraph);

		const videoButton = document.createElement("button");
		videoButton.innerText = "Download VIDEO";
		videoButton.classList.add("btn", "btn-success", "d-block", "mx-auto", "mb-3");
		videoButton.addEventListener("click", () => {
		  window.open(video);
		});
		resultDiv.appendChild(videoButton);
		
		const audioButton = document.createElement("button");
		audioButton.innerText = "Download Audio";
		audioButton.classList.add("btn", "btn-info", "d-block", "mx-auto");
		audioButton.addEventListener("click", () => {
		  window.open(audio);
		});
		resultDiv.appendChild(audioButton);
	})
.catch(error => console.log(error));
});