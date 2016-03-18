function place_raw_button() {
    var navbar = $(".navbar-default .container-fluid .navbar-right").get(0);
    $(navbar).append("<button class='btn btn-xs btn-default' id='raw-btn'>Get Raw</button>");
    $('#raw-btn').bind("click", function() {
        var filename = Jupyter.editor.file_path;
        var raw_path = window.location.href.replace("edit", "files");
        window.open(raw_path);
    });
}

function load_ipython_extension() {
    console.log("Loading raw-button extension...");
    place_raw_button();
}

exports.load_ipython_extension = load_ipython_extension
