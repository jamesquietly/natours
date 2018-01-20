$(document).ready(
    function() {
        $(".navigation__link").on("click", function() {
            $("#navi-toggle").prop("checked", false);
        });
    }
);