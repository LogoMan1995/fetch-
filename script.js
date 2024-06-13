let postsContainer = document.querySelector('#table-container');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        data.forEach((elem) => {
            let tbody = `
            <tr>
                <td>${elem.title}</td>
                <td>${elem.body}</td>
            </tr>`;
            postsContainer.innerHTML += tbody;
        });
    });


 




