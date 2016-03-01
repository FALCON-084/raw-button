define(['base/js/namespace', 'base/js/utils', 'jquery'], function(Jupyter, utils, $) {
    function place_raw_button() {
        if (!Jupyter) {
            $([Jupyter.events]).on("app_initialized.Dashboard", place_raw_button);
        }
        console.log(Jupyter);
    }

    function load_ipython_extension() {
        console.log("Loading raw-button extension...");
        place_raw_button();
    }

    return {
        load_ipython_extension: load_ipython_extension
    };
});
