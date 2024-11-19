// Connect to the admin database
var db = db.getSiblingDB('admin');
db.auth(
    process.env.MONGO_INITDB_ROOT_USERNAME,
    process.env.MONGO_INITDB_ROOT_PASSWORD,
);

// Create User if they don't exist
db = db.getSiblingDB(process.env.MONGO_DB_DATABASE);
db.createUser({
    user: process.env.MONGO_DB_USER,
    pwd: process.env.MONGO_DB_PASS,
    roles: [{
        role: 'readWrite',
        db: process.env.MONGO_DB_DATABASE,
    }]
});


print('User creation script executed');