# message-board-backend

## How to manage Postgres database on Heroku

Basically follow this: [How to create or manage heroku_postgres database instance
](https://stackoverflow.com/a/23333798)

Using Heroku CLI:

```sh
> heroku pg:credentials:url --app your-app-name
# Should show something like this
Connection information for default credential.
Connection info string:
   "dbname=random_db_name host=random_host_name port=5432 user=random_username password=really_long_random_password_here sslmode=require"
Connection URL:
   url_here
```

Alternatively, go to your app on Heroku's website > Installed add-ons and click on Heroku Postgres > Settings > Database Credentials > View Credentials.

Then you can use the credentials to connect to the database through your terminal

```sh
> psql -h [**Host Name**] -U [**Username**] [**Database Name**]
```

Should show something like this

```sh
Password for user name_heroku_has: (paste password)
psql (your_psql_version (Linux distro stuff), server 13.2 (Linux distro stuff))
SSL connection (blah blah blah)
Type "help" for help.

name_heroku_has=>
```

Create a table or exit with `\q`. Now you know how to connect to a Heroku Postgres database!
