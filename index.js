function place_raw_button() {
    var tree_items = $(".list_item");
    console.log(tree_items);
}

function load_ipython_extension() {
    console.log("Loading raw-button extension...");
    place_raw_button();
}

exports.load_ipython_extension = load_ipython_extension
