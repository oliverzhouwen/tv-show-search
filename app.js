const form = document.querySelector('#searchForm');
const input = document.querySelector('#searchBar');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    // const searchTerms = form.elements.query.value;
    const searchTerms = input.value;
    const config = { params: { q: searchTerms } };
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
    input.value = "";
});

const makeImages = (shows) => {
    for(let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}