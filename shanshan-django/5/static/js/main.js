$(function () {
    $("#like").on("click", function () {
        var csrf = $(this).attr("csrf");
        var current = $("#likecount").html();
        $.ajax({
            url: '/like/',
            data: {
                'current': current,
                'csrfmiddlewaretoken': csrf
            },
            type: 'post',
            cache: false,
            success: function (data) {
                $("#likecount").html(data);
                location.href = 'https://campaign.gitcafe.com/pingpp-hackathon2014/candidates?page=2';
            }
        });
        return false;
    });
});
