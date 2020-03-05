# README

## Resource Endpoints
### Users
**POST /api/users**  
Example Request:
```json
{
  "email": "example.com",
  "first_name": "Dan",
  "last_name": "Smith",
  "username": "DopeUser"
}
```
Response: 201  
```json
{
    "id": 2,
    "email": "example.com",
    "first_name": "Dan",
    "last_name": "Smith",
    "username": "DopeUser",
    "created_at": "2020-03-05T02:53:41.771Z",
    "updated_at": "2020-03-05T02:53:41.771Z"
}
```

**GET /api/users/:id**  
Example Response: 200  
```json
{
    "id": 2,
    "email": "example.com",
    "first_name": "Dan",
    "last_name": "Smith",
    "username": "DopeUser",
    "created_at": "2020-03-05T02:53:41.771Z",
    "updated_at": "2020-03-05T02:53:41.771Z"
}
```

**PUT /api/users/:id**  
Example Request: _Note: Since this is a PUT request, the entire object should be given, not just parts_
```json
{
	"email": "changed@example.com",
	"first_name": "Dan",
	"last_name": "Smith",
	"username": "DopeUser"
}
```
Response: 204  

**DELETE /api/users/:id**  
Successful Response: 204

