## Team Members:
Aanchal Tiwari  
Alper Erel  
Michael Homer  
Nikoloz Dzidzava  
Od Purevsuren  

## Current Iteration Control Doc
https://github.com/umkc-cs-451-2020-spring/semester-project-group-5/issues/30

## Installation
Make sure to follow the steps for installing mysql and rbenv [here](https://github.com/umkc-cs-451-2020-spring/semester-project-group-5/wiki/Programming-Resources-and-Tutorials#installation-instructions) first. Our docs on these two tools may not be complete so verify that you are installing both of them correctly for your platform. (It is recommended to only install ruby on macOS or linux. Ruby has historically had issues on its windows versions)

After doing so, clone this repository, then navigate to the "commerce_bank_api" directoryin your terminal. Type the following commands:
```bash
# there is a .ruby-version file in this repo that rbenv will detect
# rbenv install will find that file and download the version specified
rbenv install
rbenv rehash

# bundler is used to manage gem dependencies in the api
gem install bundler

# It's a good idea to run the following command every time you pull in code from master.
# This makes sure your dependencies are up-to-date with the .lock file
bundle install
```

### Intializing the database
If you have never set up this project before, chances are you will need rails to create the database for you.

You will first need to verify that your mysql server is running. After running the mysql server, create a file called '.env' inside the "commerce_bank_api" directory. inside this file you will need to set the environment variable that tells rails what socket your mysql server is communicating through. Example 
```.env
DB_SOCKET=/tmp/mysql.sock
```
it's possible you may not need to do this step, but sometimes rails has difficulty connecting, so just in case, there it is.

##### creating the tables
Navigate to the "commerce_bank_api" directory and type in the following commands.
```bash
bundle exec rake db:create # or bundle exec rails db:create
bundle exec rake db:migrate # or bundle exec rails db:migrate
```  

_note:_ You will most likely need to run the migration command every time you pull in new code.  

To start the API server:
```bash 
bundle exec rails s
```

### Starting the UI server
First thing you should do is install the most recent version of nvm for you platform. Follow the directions on their github to do so.

After installing nvm, run the following command to install the latest version of node
```bash
nvm install node 
```

navigate to the commerce-app directory and run `npm install`. The project is setup so that all you should need to do next is run `rpm start` and the front end will open on port 3001

## Tools
It is recommended that you interface with the API via a program called [postman](https://www.postman.com/). Use the postman collection in this repo (commerce_api.postman_collection.json) so that you don't have to set it all up yourself. Use the reference [here](https://github.com/umkc-cs-451-2020-spring/semester-project-group-5/blob/master/commerce_bank_api/README.md#resource-endpoints) to understand the API endpoints.



