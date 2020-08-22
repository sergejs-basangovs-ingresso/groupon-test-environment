# React APPLICATION:

-   Frontend: React with create-react-app
-   backend/express-server: express app server to serve the app in production and make authentication calls to groupon.

to start application: npm run dev

# Heroku

info: https://dashboard.heroku.com/apps/groupon-test-environment/deploy/heroku-git

login: sergejs.basangovs@ingresso.co.uk
pw: calvi187439@

to deploy:

\$ heroku login

( you will see open browser window with heroku login , use the login details above to login)

$ git add .
$ git commit -m "my commit message"
$ git push heroku master
(wait until the build completed, then)
$ heroku open
( it will open zee browser at url: https://groupon-test-environment.herokuapp.com/ )
