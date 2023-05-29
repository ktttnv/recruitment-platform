# SOVOK RECRUITMENT

## Setup app
1. Clone project and install all dependancies
    ```js
    git clone https://git.codenrock.com/sovcombank-team-challenge-2023/cnrprod-team-29409/recruitment.git
    cd recruitment
    npm run setup
    ```
2. 

## Migration
1. Install MongoDB Compass Download (GUI) - https://www.mongodb.com/try/download/compass
2. Install Docker - 
3. run in cmd
    ```bash
    docker run -d -p 37017:27017 -e "MONGO_INITDB_ROOT_USERNAME=admin" -e "MONGO_INITDB_ROOT_PASSWORD=admin"  --name recruitment_sovkombank mongo:5.0
    ```
4. Open folder `cd recruitment`
5. Run migration `npm run migration`
