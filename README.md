# API Documentation

## 1️⃣ Getting Started

### API Base URL 
`https://unit4-build-week-backend.herokuapp.com/api`

### To confirm the API is online...
Send a GET request to the base URL. No headers or body is required for this test. Success will return status code 200. Failure will return error.  

---
## 2️⃣ Endpoints Overview

### All Endpoints
| Request | URL | Description | Requires Auth Token |
|----------|----------|----------|----------|
|POST | /auth/register | register a new user | N |
|POST | /auth/login | login an existing user | N |
</br>

### Unfinished Endpoints (subject to change)
| Request | URL | Description | Requires Auth Token |
|----------|----------|----------|----------|
|GET | /trucks | get all truck objects | Y |
|GET | /trucks/reviews | get all reviews | Y |
|GET | /trucks/reviews/:id | get reviews by food truck id | Y |
|POST | /trucks/reviews/:id | add new review to db | Y |

---
## 3️⃣ Endpoints Details 

### ***-Register New User***
*Returns json blob about new user.*

* **URL:**

  *baseURL*/auth/register

* **Method:**

  `POST`
  
*  **Request Body:**
 
   ```
   {
       "username": "foodieFan",             #required
       "password": "password123",           #required
       "email": "example@example.net",      #required
       "current_location_lat": "16.293869", #optional, defaults to target market if not provided.
       "current_location_long": "26.2199",  #optional, defaults to target market if not provided.
   }
   ```

* **Success Response:**

  **Code:** 201 <br />
    **Content:** 
    
    ```
    {
        "user_id": 7,
        "username": "foodieFan",
        "current_location_lat": "16.293869",
        "current_location_long": "26.2199", 
        "created_at": "2020-12-23 19:56:28",
        "updated_at": "2020-12-23 19:56:28"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Required field(s) Username, Password, or Email missing from req.body" }`

  OR

  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ message: "(relevant message will be returned)" }`

---

### ***-Login***
*Returns json blob containing authentication token.*

* **URL:**

  *baseURL*/auth/login

* **Method:**

  `POST`
  
*  **Request Body:**
 
   ```
   {
       "username": "foodieFan",             #required
       "password": "password123",           #required
   }
   ```

* **Success Response:**

  **Code:** 200 <br />
    **Content:** 
    
    ```
    {
        "message": "Welcome to the API, ${username}",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6Ik..."
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Required field(s) Username, Password, or Email missing from req.body" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message: "Invalid credentials." }`

  OR

  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ message: "(relevant message will be returned)" }`

