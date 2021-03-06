// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 12,

    // font family with optional fallbacks
    fontFamily: 'Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: 'rgba(255,0,0,0)',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'BLOCK',

    // set to true for blinking cursor
    cursorBlink: false,

    // color of the text
    foregroundColor: '#888',

    // terminal background color
    backgroundColor: '#222',

    // border color (window, tabs)
    borderColor: '#333',

    // custom css to embed in the main window
    css: ``,

    // custom css to embed in the terminal window
    termCSS: `
      @keyframes anim{
        0%{opacity: 0;}
        100%{ opacity: 1;}
      }
      @keyframes rotate{
        0%{transform: rotate(0deg);}	
        100%{transform: rotate(350deg);}
      }
      html > * .terminal:not(.focus) .terminal-cursor,
      html > * .terminal-cursor{
        display: inline-block;
        width: 12px !important;
        height: 12px !important;
        background: transparent;
        border-radius: 50%;
        border: 1px solid #0df !important;
        position: relative;
        box-shadow: 0px 0px 10px green;
        animation: anim .8s infinite alternate linear;
        box-sizing: content-box;
      }
      html > * .terminal:not(.focus) .terminal-cursor{
        animation: rotate 1s infinite linear;
        box-shadow: none !important;
        border-color: gray !important;
        border-top-color: transparent!important;
      }
      html > * .terminal-cursor:before{
        content: '';
        border-radius: 50%;
        position: absolute;
        width: 8px;
        height: 8px;
        background: #0df;
        top: 2px;
        left: 2px;
      }
      html > * .terminal:not(.focus) .terminal-cursor:before{
        background: gray;
        opacity: 0.8;
      }
    `,

    // set to `true` (without backticks) if you're using a Linux setup that doesn't show native menus
    // default: `false` on Linux, `true` on Windows (ignored on macOS)
    showHamburgerMenu: true,

    // set to `false` if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` on windows and Linux (ignored on macOS)
    showWindowControls: true,

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '12px 14px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#000000',
      red: '#ff0000',
      green: '#33ff00',
      yellow: '#ffff00',
      blue: '#0066ff',
      magenta: '#cc00ff',
      cyan: '#00ffff',
      white: '#d0d0d0',
      lightBlack: '#808080',
      lightRed: '#ff0000',
      lightGreen: '#00dd00',
      lightYellow: '#ffff00',
      lightBlue: '#0066ff',
      lightMagenta: '#cc00ff',
      lightCyan: '#00ffff',
      lightWhite: '#ffffff'
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    // make sure to use a full path if the binary name doesn't work
    // (e.g `C:\\Windows\\System32\\bash.exe` instead of just `bash.exe`)
    // if you're using powershell, make sure to remove the `--login` below
    shell: '',

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to false for no bell
    bell: 'SOUND',

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: false

    // if true, on right click selected text will be copied or pasted if no
    // selection is present (true by default on Windows)
    // quickEdit: true

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    'hyperpower'
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};
