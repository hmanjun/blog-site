
$(document).on("click", ".post-container", function () {
    console.log(`Clicked on post with id of ${$(this).data("post_id")}`)
})