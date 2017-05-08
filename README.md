# FCC-URL-shortener

### User stories:
* I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
* If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.
* When I visit that shortened URL, it will redirect me to my original link.

## Example creation usage:

```js
https://afternoon-tundra-77333.herokuapp.com/new/http://www.example.com
https://afternoon-tundra-77333.herokuapp.com//new/http://www.freecodecamp.com
```

## Example creation output:

```js
{"original_url":"http://www.example.com","short_url":"https://afternoon-tundra-77333.herokuapp.com/222"}
```

## Usage:

```
https://afternoon-tundra-77333.herokuapp.com/1
```

### Will redirect to:

```
https://www.google.com/
```
