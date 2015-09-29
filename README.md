# apex-gulpfile
This is a super basic Gulpfile for anyone who only needs JavaScript, CSS, images and vendor files (3rd party) handling.

See http://vmorneau.me/basic-gulpfile/ for more info.

#Changelog
##v1.2
- Updated dependencies
- Changed terminology
    - `client` to `src`
    - `build` to `dist`
- Removed image minification package
    - was not generic enough for this project
- Removed assets intermediate folder 

#Features
- CSS (concatenation, minification, autoprefixer)
- JS (concatenation, minification)
- IMG (optimization)
- Vendor files (copy)
- Output of minified and un-minified JS & CSS
- Filesize indicator
- User friendly error handling

#Install
```npm install```

#Run
```npm start```

#How to use
From the root folder, You can create, edit or delete any files in:
```
|-/src
    |-css
    |-img
    |-js
    |-lib
```

The Gulp magic will happen and compile your files to this folder structure:

```
|-/dist
    |-css
    |-img
    |-js
    |-lib
```

Note: Everything in the ```/src/``` folder of this repo is to be replaced by your files.

###That's all! Enjoy a faster & cleaner static files handling.