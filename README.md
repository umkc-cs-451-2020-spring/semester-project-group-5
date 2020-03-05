## Team Members:
Aanchal Tiwari  
Alper Erel  
Michael Homer  
Nikoloz Dzidzava  
Od Purevsuren  

## Installation
Make sure to follow the steps for installing mysql and rbenv [here](https://github.com/umkc-cs-451-2020-spring/semester-project-group-5/wiki/Programming-Resources-and-Tutorials#installation-instructions) first.  

After doing so, clone this repository, then navigate to the "commerce_bank_api" directoryin your terminal. Type the following commands:
```bash
rbenv install
rbenv rehash
gem install bundler
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


