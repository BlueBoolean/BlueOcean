# Nexdoor
Nexdoor is a hyperlocal neighborhood assistance social networking platform. Ask your neighbors for help. Help your neighbors. 

# Installation Instructions
1. Fork repo & clone down
2. Create a new Amazon RDS Instance using easy setup
3. In your root project directory, run `npm install`
4. change `.env example` file name to `.env`
5. Inside your newly-renamed `.env` file, 
  * Fill in all `DB` information with your credentials from AWS RDS
  * Create a new `SECRET` (not required, but recommended)
  * Update `REDIS` information (if you already had Redis installed on your computer; if not, the defaults should work)
6. In a bash terminal, boot up your Redis database. This varies by OS, but `sudo service redis-server start` should work on most OSes.
7. In a bash terminal, run `npm  run server`
8. In a SECOND bash terminal, run `npm run start`. If that doesn't work, try running the following commands:
  * `npm run build-dev`
  * `npm run start`
