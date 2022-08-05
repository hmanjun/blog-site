
//Open post
$(document).on("click", ".post-container", function () {
    window.open(`/post/${$(this).data("post_id")}`,"_self")
    console.log(`Clicked on post with id of ${$(this).data("post_id")}`)
})

//Go to home
$(document).on("click", "#home-btn", () => {
    window.open('/', "_self")
})

//Add new comment
$("#add-comment-btn").on("click", async function() {
    const body = $("#new-comment").val()
    const data = {
        post_id: $("#new-comment").data("post_id"),
        body: body
    }
    console.log(typeof data.post_id, data.post_id)

    $.post('/api/comment', data, () => {
        window.open(`/post/${data.post_id}`, "_self")
        $("#new-comment").val("")
    })
    console.log(body)
})

//Login temp
$("#login-btn").on("click", () => {
    const data = {
        "password": "7wampa0t",
        "username": "gentest"
    }
    $.post('/api/user/login', data, () => {

    })
})