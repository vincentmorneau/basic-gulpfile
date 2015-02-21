# apex-gulpfile
This is a sample Gulpfile for a developer who needs only basic handling of JavaScript, CSS and Vendor (3rd party) files.

See http://vmorneau.me/my-first-blog-post/

#Features
- JS concatenation
- CSS concatenation
- JS minification
- CSS minification
- CSS Autoprefixer
- Output both minified and un-minified 
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

That's all! Enjoy a faster & cleaner static files handling.