# raw-button
A Jupyter Notebook extension for adding a GitHub-like "Raw" button to the filetree. Although,
@captainsafia made this extension, it would not have been possible without the
project's PokeMon sponsor, Marshtop.

![Marshtomp](http://randompokemon.com/sprites/animated/259.gif)

## Installation

1. Run `ipython locate` to determine the location of your Jupyter Notebook configuration.
2. Download `raw-button.js` and copy it to `$(ipython locate)/nbextensions`.
3. Create a new folder called `static` inside `$(ipython locate)/profile_default`.
4. Create a new folder inside `static` called `custom`.
5. Create a new file inside custom titled `custom.js`.
6. Place the following inside `custom.js`
```
$([Jupyter.events]).on("app_initialized.NotebookApp", function() {
    Jupyter.load_extensions("raw-button");
});
```

And that's it! Run `jupyter notebook` at the command line and enjoy your new feature!

## Usage Screencast
