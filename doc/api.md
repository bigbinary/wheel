### Playing with api using curl

``` ruby
user = User.where(email: 'john@example.com').first
auth_token = user.authentication_token
```

In the following example replace the `auth_token` value with the value derived in the above step when appropriate.

### Show user information

```
curl -v -H "X-Auth-Token: zsCbdiCyDMhb4NxMZCMH" \
        -H "Accept: application/json"           \
        -H "Content-type: application/json"     \
        http://localhost:3000/api/v1/users/john@example.com
```
