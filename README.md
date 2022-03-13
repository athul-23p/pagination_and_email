# pagination_and_email

To start run
```
npm start

```

## End points
__To get paginated users list__
```
/users?page=<value>&pageSize=<value>

```
_Default values_
page: _1_
pageSize : _20_

__User Registration__
```
post : users/
```

req.body example
```js
{
    "first_name": "Barry",
    "last_name": "Allen",
    "email": "theFlash@lightning.com"
}

```
