ballin-octo-cyril
=================

A simple JavaScript img src switcher for high density displays. The name was suggested by GitHub.

Usage:

    <img src="path/to/low/res.png" class="ballin-octo-cyril" data-src="path/to/low/res.png" data-hires="path/to/high/res.png" />
    
If the script detects a device with a higher pixel density window.devicePixelRatio than 1, it switches the image src to a high resolution image src and back.
