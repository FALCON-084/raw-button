# raw-button
A Jupyter Notebook extension for adding a GitHub-like "Raw" button to the filetree. Although,
@captainsafia made this extension, it would not have been possible without the
project's PokeMon sponsor, Marshtop.

![Marshtomp](http://randompokemon.com/sprites/animated/259.gif)

## Installation

1. Run `pip install raw-button` to install the extension.
2. Symlink the extension assets to your Jupyter installation using the following command.
```
ln -s $(python -c "import os; print(os.path.join(os.path.dirname(__import__('raw-button').__file__), 'amd'))") $(ipython locate)/raw-button
```
3. Create a new folder called `static` inside `$(ipython locate)/profile_default`.
4. Create a new folder inside `static` called `custom`.
5. Create a new file inside custom titled `custom.js`.
6. Place the following inside `custom.js`.
```
Jupyter.utils.load_extensions("raw-button");
```

And that's it! Run `jupyter notebook` at the command line and enjoy your new feature!

## Usage Screencast

![Raw Button Usage Screencast](http://g.recordit.co/6snU7Y5GRG.gif)
