# apex-gulpfile
This is a super basic Gulpfile for anyone who only needs JavaScript, CSS and vendor (3rd party) file handling.

See http://vmorneau.me/basic-gulpfile/ for more info.

#Features
- JS concatenation
- JS minification
- CSS concatenation
- CSS minification
- CSS autoprefixer
- Output of both minified and un-minified 
- Filesize indicator
- User friendly error handling

#Install
```npm install```

#Run
```npm start```

#How to use
From the root folder, You can create, edit or delete any files in:
```
|-/client
	|-/assets
		|-css
		|-js
		|-vendor
```

The Gulp magic will happen and compile your files to this folder structure:

```
|-/build
	|-/assets
		|-css
		|-js
		|-vendor
```

Note: Everything in the ```/client/``` folder of this repo is to be replaced by your files.

That's all! Enjoy a faster & cleaner static files handling.