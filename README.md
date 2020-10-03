This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is the University of California, San Diego's Women in Computing's revamped website that was officially launched on September 29th, 2020.<br />
We decided to create our website from scratch the summer of 2020, and the finished result can be found here at wic.ucsd.edu.<br />
We are continuously making changes to the site so be on the lookout for updates!<br />

How to make changes to the site and deploy them correctly.

1. Make changes locally. <br />
    git clone (if first time using) git pull if folder is already stored locally<br />
    npm install [to download node modules locally]<br />
    npm start [to view the website locally]<br />
    make whatever changes necessary<br />
2. npm install
3. npm run build [locally]
4. Push to github<br />
    git add .<br />
    git commit -m "commit message"<br />
    git push<br />
5. Go inside website folder, the directory one up from build [locally]
6. Copy build to server: scp -r build wic@acsweb.ucsd.edu:~/ [this should create a build folder on the server]
7. Move public_html to temp [on the server]: mv public_html/* temp
8. Move build to public_html [on the server]: mv build/* public_html
9. Check the website at wic.ucsd.edu to ensure all changes were made and uploaded successfully!

### `npm start`
How to view the website locally as you make changes.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
Since npm start has a lot of node modules and UCSD's server doesn’t support node - only static pages - we have to do npm run build every time we make changes.<br />
This step generates a build folder, generates a static version of everything, then creates an index.html folder that holds the information.<br />
The index.html file is not that legible as it is simply one long line of code, but it makes things faster when building the website.
