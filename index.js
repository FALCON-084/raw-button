function place_raw_button() {
    var tree_items = $(".list_item");
    console.log(tree_items);
}

export function load_ipython_extension() {
    console.log("Loading raw-button extension...");
    place_raw_button();
}
