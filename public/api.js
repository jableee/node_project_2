
function getSelf(callback) {
    $.ajax({
        type: "GET",
        url: "/users/me",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        success: function (response) {
            callback(response.user);
        },
        error: function (xhr, status, error) {
            console.log(xhr, status, error)
            if (status == 401 || error == "Unauthorized") {
                alert("로그인이 필요합니다.");
            } else {
                localStorage.clear();
                alert("에러 발생... 로그인 이외의 문제");
            }
            window.location.href = "/";
        },
    });
}


function signOut() {
    localStorage.clear();
    window.location.href = "/";
}
