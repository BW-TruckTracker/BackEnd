# API Documentation

## 1️⃣ Getting Started

### API Base URL 
`https://foodtruck-backend-api.herokuapp.com/api`

### To confirm the API is online...
Send a GET request to the base URL. No headers or body is required for this test. Success will return status code 200. Failure will return error.  

---
## 2️⃣ Endpoints Overview

### All Endpoints
| Request | URL | Description | Requires Auth Token |
|----------|----------|----------|----------|
|POST | /auth/register | registers a new user | N |
|POST | /auth/login | login an existing user | N |
|GET | /favorites/:id | returns favorite trucks for that user_id | Y |
|POST | /favorites/ | save a favorite truck to db | Y |
|GET | /menu/:id | returns menu when given truck id | Y |
|GET | /reviews/:id | returns all reviews for a truck id | Y |
|POST | /reviews | adds new review to the db | Y |
|GET | /trucks | returns all trucks and their lat/lng | Y |
|GET | /trucks/:id | returns all db data for a truck id | Y |
</br>

---
## 3️⃣ Endpoints Details 

### ***POST /auth/register***

*  **Request Body:**
 
   ```
   {
       "username": "foodieFan",             #required
       "password": "password123",           #required
       "email": "example@example.net",      #required
   }
   ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    
    ```
    {
        "user_id": 7,
        "username": "foodieFan",
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

### ***POST /auth/login***

*  **Request Body:**
 
   ```
   {
       "username": "foodieFan",             #required
       "password": "password123",           #required
   }
   ```

* **Success Response:**

  * **Code:** 200 <br />
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
  
  ---

### ***GET /favorites/:id***

*  **Request Body:**
 
   ```
  no body required. empty body accepted.
   ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    ```
  [
    {
        "fav_id": 5,
        "user_id": 2,
        "truck_id": 3,
        "truck_name": "Bahn Mi",
        "cusine_type": "Thai"
    },
    {
        "fav_id": 6,
        "user_id": 2,
        "truck_id": 7,
        "truck_name": "Expensive Smoothies",
        "cusine_type": "Health and Wellness"
    },
  ]
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message: 'Provided user_id has no saved favorites.' }`

  OR

  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ message: "(relevant message will be returned)" }`
  
    ---
### ***POST /favorites***

*  **Request Body:**
 
   ```
   {
     "user_id": 1,          #required
     "truck_id": 7,         #required
   }
   ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    ```
    {
    "message": "Successfully updated user favorites."
    }
    ```
 
* **Error Response:**

  * **Code:** 403 BAD REQUEST <br />
    **Content:** `{ message: 'This user_id has already faved this truck_id.' }`

  OR

  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ message: "(relevant message will be returned)" }`
  
  ---

### ***GET /menu/:id***

*  **Request Body:**
 
   ```
   no body required. empty body accepted.
   ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    ```
    [
    {
        "item_id": 1,
        "truck_id": 1,
        "item_name": "Taco Plate",
        "item_description": "5 tacos with your choice of meat.",
        "item_img_url": "",
        "item_price": 10
    },
    {
        "item_id": 2,
        "truck_id": 1,
        "item_name": "Burrito",
        "item_description": "Grilled Burrito with your choice of meat.",
        "item_img_url": "",
        "item_price": 5
    },
    ]
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message: 'could not find menu with given truck id' }`

  OR

  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ message: "(relevant message will be returned)" }`
  
  ---

### ***GET /reviews/:id***

*  **Request Body:**
 
   ```
   no body required. empty body accepted.
   ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    ```
    [
    {
        "review_id": 1,
        "truck_id": 1,
        "user_id": 1,
        "comment": "I'll be back!!"
    },
    {
        "review_id": 6,
        "truck_id": 1,
        "user_id": 1,
        "comment": "wow"
    },
    ]
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message: 'could not find reviews with given truck id' }`

  OR

  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ message: "(relevant message will be returned)" }`

---

### ***POST /reviews***

*  **Request Body:**
 
   ```
   {
      "truck_id": 1,                  #required
      "user_id": 1,                   #required
      "food_quality_star_count": 4,   #required
      "service_star_count": 4,        #required
      "cleanliness_star_count": 5,    #required
      "comment": "woweee"             #optional
   }
   ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ message: 'Successfully added new review to database.' }`

 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: 'Required info missing from request body.' }`

  OR

  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ message: "(relevant message will be returned)" }`

---

### ***GET /trucks***

*  **Request Body:**
 
   ```
   no body required. empty body accepted.
   ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    ```
    [
    {
        "truck_id": 1,
        "current_location_lat": 40.741895,
        "current_location_long": -73.989308
    },
    {
        "truck_id": 2,
        "current_location_lat": 40.726108113826,
        "current_location_long": -73.99883520642089
    },
    ]
    ```

 
* **Error Response:**

  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ message: "(relevant message will be returned)" }`

---

### ***GET /trucks/:id***

*  **Request Body:**
 
   ```
   no body required. empty body accepted.
   ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    ```
    {
        "truck_id": 2,
        "truck_name": "Only Beer",
        "truck_img_url": null,
        "cusine_type": "Beer",
        "current_location_lat": 40.726108113826,
        "current_location_long": -73.99883520642089,
        "average_stars": 3
    } 
    ```

 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message: 'could not find truck with given truck id' }`

  OR

  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ message: "(relevant message will be returned)" }`

