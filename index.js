function place_raw_button() {
    var tree_items = $(".list_item");
    var button = $("<button>Raw</button>");
    for (var i in tree_items) {
        var item = tree_items[i];
        console.log(item);
    }
}

function load_ipython_extension() {
    console.log("Loading raw-button extension...");
    place_raw_button();
}

exports.load_ipython_extension = load_ipython_extension
