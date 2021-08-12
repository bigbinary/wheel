### Why length of table name is limited to 63 characters long?

The default limit on length of identifiers in PostGreSQL is 63 because
value of `NAMEDATALEN` constant is 64 by default.  The length of identifiers
is `NAMEDATALEN - 1` which becomes `64 - 1` equal to 63.

This configuration can't be changed without compiling PostGreSQL again.
We use name of the repository and name of branch to dynamically
calculate database name for every branch. But if the length of this
combination becomes greater than 63 then it gives error:

```
Input string is longer than NAMEDATALEN-1 (63)
```

To avoid this, we have restricted the length of the database name to
maximum 63 characters. This has a possible side-effect that 2 branches with long names and
similar characters upto length 63 will have same database name. But
it is very unlikely.
