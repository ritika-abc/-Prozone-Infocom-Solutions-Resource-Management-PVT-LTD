
// TABS JS

function makeTabActive() {

    var url = window.location.href;

    var indexof = url.indexOf("#");

    if (indexof > 0) {

        var activeTab = url.substring(indexof + 1);

        if (typeof activeTab != 'undefined' && activeTab != '' && activeTab != '#') {

            // to dispaly give tab content

            jQuery(".tab-pane").removeClass("active in show");

            jQuery("#" + activeTab).addClass("active in show")

            // to make active given tab

            jQuery(".nav-tabs li a").removeClass("active");

            jQuery(".nav-tabs li a[href='#" + activeTab + "']").addClass("active");
        }
    }
}



function contact() {
    var na = document.querySelector(".name").value;
    var em = document.querySelector(".email").value;
 
    var mes = document.querySelector(".message").value;
    var url1 = "https://wa.me/919911030329?text=" +
        "Name: " + na + "%0A" +
        "Email: " + em + "%0A" +       
        "Message: " + mes;
    window.open(url1, "_blank").focus();
}

