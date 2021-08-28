
const $field = $("#field");
let myForm = document.querySelector('#myForm');


const $mySearch = $("#mySearch");



$('form').on('submit', async function (e) {
    e.preventDefault()

    let searchGif = $mySearch.val();
    $mySearch.val("");

    let myApi = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
            q: searchGif,
            api_key: 'hp9uAsAfcd8HBs9lwjiboFzb0Dp6N5vD'
        }
    })
    makeGif(myApi.data);
})

function makeGif(myApi) {
    let finalNum = myApi.data.length;
    if (finalNum) {
        let index = Math.floor(Math.random() * finalNum)
        let $newDiv = $("<div>")
        let $newGif = $("<img>", {
            src: myApi.data[index].images.original.url
        })
        $newDiv.append($newGif)
        $field.append($newDiv)
    }
}


$("#delete").on("click", function () {
    $field.empty();
});

