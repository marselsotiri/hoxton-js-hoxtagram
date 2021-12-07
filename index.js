const imgContainer = document.querySelector(".image-container")

state = {
    images: []
}


function getImages() {
    return fetch('http://localhost:3000/images').then(function (resp) {
        return resp.json()
    })
}




/* <section class="image-container">
        <!-- This is the Post card. Ust the following HTML as reference to build your cards using JS -->

        <article class="image-card">
            <h2 class="title">Title of image goes here</h2>
            <img src="./assets/image-placeholder.jpg" class="image" />
            <div class="likes-section">
                <span class="likes">0 likes</span>
                <button class="like-button">♥</button>
            </div>
            <ul class="comments">
                <li>Get rid of these comments</li>
                <li>And replace them with the real ones</li>
                <li>From the server</li>
            </ul>
        </article>
    </section> */

function renderImages() {
    imgContainer.innerHTML = ''

    for (const image of state.images) {
        const articleEl = document.createElement('article')
        articleEl.setAttribute('class', 'image-card')

        const h2El = document.createElement('h2')
        h2El.setAttribute('class', 'title')
        h2El.textContent = image.title

        const imgEl = document.createElement('img')
        imgEl.setAttribute('class', 'image')
        imgEl.setAttribute('src', image.image)

        const likeDiv = document.createElement('div')
        likeDiv.setAttribute('class', 'likes-section')

        const likesSpanEl = document.createElement('span')
        likesSpanEl.setAttribute('class', 'likes')
        likesSpanEl.textContent = image.likes + " likes"

        const likeBtnEl = document.createElement('button')
        likeBtnEl.setAttribute('class', 'like-button')
        likeBtnEl.textContent = '♥'

        likeDiv.append(likesSpanEl, likeBtnEl)

        const commentEl = document.createElement('ul')
        commentEl.setAttribute('class', 'comments')

        for (const comment of image.comments) {

            const comentsLiEl = document.createElement('li')
            comentsLiEl.textContent = comment.content
            console.log(comentsLiEl)
            commentEl.append(comentsLiEl)
        }

        

        articleEl.append(h2El, imgEl, likeDiv, commentEl)
        imgContainer.append(articleEl)
    }
}


function render() {
    renderImages()
}

getImages().then(function (imagesServer) {
    state.images = imagesServer
    console.log(state)
    render()
})

