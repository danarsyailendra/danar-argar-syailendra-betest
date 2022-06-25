# BTPN Backend Test Danar Arga Syailendra
This repository for backend technical test from BTPN 

## How to Start Application
use this command, the server will run on port 3000
```
npm start
```

## Endpoint
| Request Method | Endpoint                                    | Description                             |
|----------------|---------------------------------------------|-----------------------------------------|
| GET            | /token                                      | Generate JWT Token and expire in 1 hour |
| GET            | /users                                      | Get all user                            |
| GET            | /users/getByAccountNumber/{accountNumber}   | Get a user by account number            |
| GET            | /users/getByidentityNumber/{identityNumber} | Get a user by identity number           |
| POST           | /users                                      | Create a user                           |
| PUT            | /users/{id}                                 | Update a user                           |
| DELETE         | /users/{id}                                 | Delete a user                           |
