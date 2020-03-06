## Team Members:
Aanchal Tiwari  
Alper Erel  
Michael Homer  
Nikoloz Dzidzava  
Od Purevsuren  

## Current Iteration Control Doc
https://github.com/umkc-cs-451-2020-spring/semester-project-group-5/issues/30

## Installation
Make sure to follow the steps for installing mysql and rbenv [here](https://github.com/umkc-cs-451-2020-spring/semester-project-group-5/wiki/Programming-Resources-and-Tutorials#installation-instructions) first.  

After doing so, clone this repository, then navigate to the "commerce_bank_api" directoryin your terminal. Type the following commands:
```bash
# there is a .ruby-version file in this repo that rbenv will detect, rbenv install will find that file and download the version specified
rbenv install
rbenv rehash

# bundler is used to manage gem dependencies in the api
gem install bundler

# It's a good idea to run the following command every time you pull in code from master. This makes sure your dependencies are up-to-date with the .lock file
bundle install
```

### Intializing the database
If you have never set up this project before, chances are you will need rails to create the database for you. Navigate to the "commerce_bank_api" directory and type in the following commands.
```bash
bundle exec rake db:create # or bundle exec rails db:create
bundle exec rake db:migrate # or bundle exec rails db:migrate
```  

_note:_ You will most likely need to run the migration command every time you pull in new code.  

To start the API server:
```bash 
bundle exec rails s
```
## Tools
It is recommended that you interface with the API via a program called [postman](https://www.postman.com/). Use the postman collection in this repo (commerce_api.postman_collection.json) so that you don't have to set it all up yourself. Use the reference [here](https://github.com/umkc-cs-451-2020-spring/semester-project-group-5/blob/master/commerce_bank_api/README.md#resource-endpoints) to understand the API endpoints.


