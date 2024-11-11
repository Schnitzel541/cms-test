document.addEventListener("DOMContentLoaded", async () => {
    const blogPostsContainer = document.getElementById("blog-posts");
    const apiUrl = "https://api.contentful.com/spaces/blog/environments/master/entries?access_token=cnmwYiZJd39v26GkT97un5mk5ET90_5lb3E07KUHft8"; // replace with your CMS API URL and access token

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const posts = data.items;

        posts.forEach((post) => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");

            postElement.innerHTML = `
                <h2>${post.fields.title}</h2>
                <img src="${post.fields.image.fields.file.url}" alt="${post.fields.title}">
                <p>${post.fields.content}</p>
            `;
            blogPostsContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
        blogPostsContainer.innerHTML = "<p>Failed to load blog posts.</p>";
    }
});