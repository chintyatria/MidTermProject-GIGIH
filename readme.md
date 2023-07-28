# API Documentation

## Setup
This setup is using mongoDB Compass

1. Clone this repository to your local machine.
2. Install the required dependencies by running `npm install`
3. Ensure MongoDB is installed and running on your machine
4. Replace `'mongodb://localhost:27017/your_database'` with your MongoDB connection string in `.env`
5. Start the server by running `npm start`. The server should now be running at `http://localhost:5000`

## Database Structure

Our application uses MongoDB, a NoSQL database. Data in MongoDB is stored in BSON format, a binary representation of JSON-like documents. We have three collections:

- `videoThumbnails`: This collection stores the video thumbnails. Each document in this collection has a `videoId` (a unique string that identifies a video) and `urlImage` (the URL of the thumbnail image)
- `products`: This collection stores the products. Each document in this collection has a `productId` (a unique string that identifies a product), `linkProduct` (the URL of the product), `title` (the title of the product), and `price` (the price of the product)
- `comments`: This collection stores the comments. Each document in this collection has a `username` (the username of the user who posted the comment), `comment` (the text of the comment), and `videoId` (the ID of the video the comment is associated with)

## API Structure

The API is built using Node.js and Express. It provides the following endpoints:

- GET /videoThumbnails: Returns a list of all video thumbnails
- POST /videoThumbnails: Creates a new video thumbnail
- GET /products: Returns a list of all products
- POST /products: Creates a new product
- GET /comments/:videoId: Returns a list of all comments from a specific video
- POST /comments: Creates a new comment
  
Each of these endpoints responds with JSON data.

## API Documentation

### Video Thumbnails

#### Video Thumbnail Object

```json
{
  "videoId": "string",
  "urlImage": "string"
}
```

#### GET /videoThumbnails

Returns all video thumbnails.

**URL Params**: None
**Data Params**: None
**Headers**: Content-Type: application/json
**Success Response**: 
  **Code**: 200
  **Content**: 

```json
{
  "thumbnails": [
    {<video_thumbnail_object>},
    {<video_thumbnail_object>},
    {<video_thumbnail_object>}
  ]
}
```

#### POST /videoThumbnails

Creates a new video thumbnail and return object.

**URL Params**: None
**Headers**: Content-Type: application/json
**Data Params**: 

```json
{
  "videoId": "string",
  "urlImage": "string"
}
```

**Success Response**: 
  **Code**: 201
  **Content**: `{ <video_thumbnail_object> }`

### Products

#### Product Object

```json
{
  "productId": "string",
  "linkProduct": "string",
  "title": "string",
  "price": "float(2)"
}
```

#### GET /products

Returns all products

**URL Params**: None
**Data Params**: None
**Headers**: Content-Type: application/json
**Success Response**: 
  **Code**: 200
  **Content**: 

```json
{
  "products": [
    {<product_object>},
    {<product_object>},
    {<product_object>}
  ]
}
```

#### POST /products

Creates a new product and returns object.

**URL Params**: None
**Headers**: Content-Type: application/json
**Data Params**: 

```json
{
  "productId": "string",
  "linkProduct": "string",
  "title": "string",
  "price": "float(2)"
}
```

**Success Response**: 
  **Code**: 201
  **Content**: `{ <product_object> }`


### Comments

#### Comment Object

```json
{
  "username": "string",
  "comment": "string",
  "videoId": "string"
}
```

#### GET /comments/:videoId

Returns all comments in a video based on ID.

**URL Params**: 
  Required: `videoId=[string]`
**Data Params**: None
**Headers**: Content-Type: application/json
**Success Response**: 
**Code**: 200
**Content**: 

```json
{
  "comments": [
    {<comment_object>},
    {<comment_object>},
    {<comment_object>}
  ]
}
```

#### POST /comments

Creates a new comment and returns object.

**URL Params**: None
**Headers**: Content-Type: application/json
**Data Params**: 

```json
{
  "username": "string",
  "comment": "string",
  "videoId": "string"
}
```

**Success Response**: 
**Code**: 201
**Content**: `{ <comment_object> }`
