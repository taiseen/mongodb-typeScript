> 22 - May - 2023

# Assignment - 2

## MongoDB Assignment

```
yarn start
```


<br />


| Task No  | Api End Point's \|\| Api Route's | 
|----------|----------------------------------|
| Task 1   | `/api/all-books`                 |
| Task 2   | `/api/byGenre`?genre=Fantasy     |
| Task 3   | `/api/byGenre&Published`?genre=Sci-Fi`&`published=Roli%20Books |
| Task 4   | `/api/featured-books`            |
| Task 5   | `/api/string-to-int`             |


<br />


# Questions - Ans :-
> ## What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?

```
Ans:- 

The purpose of creating a model with an interface and schema in MongoDB - 
is to define the structure of a collection.

The interface is responsible - to properties that a document (must have), & 
The schema is responsible    - for defines the (data types) & (validation rules) for those properties. 

It help in defining the structure of a collection - to ensure that the data in the collection have 
* consistent
* integrity 
* validation & 
* well-organized.
```


<br />
<br />


> ## Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?

```
Ans:- 

Field filtering is process of selecting specific fields from a document in MongoDB. 
This is reduce the amount of data that is returned by query (if we apply).

As Example:- 

0 == don't send / exclude
1 == send / include 

under these following query we will return all documents from the collection, 

but only the {name} and {email} fields:

db.collectionName.find( {}, {name: 1, email: 1} )

OR 

but only the {name} and {email} fields but also not send {_id} field:

db.collectionName.find({}, { name: 1, age: 1, _id: 0 })
```


<br />
<br />

> ## What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.

```
Ans:- 

Instance methods in MongoDB models - are (can be custom) function, 
that we can defined within the model & can be called on individual instance of that model. 

These methods are specific to each instance & allow us to perform custom operations or
manipulations on the data associated with that instance/object.

Instance method can be a powerful tool for extending the functionality of a model. like bellow example:-


const customerSchema = new Schema({
  name: { type: String },
  email: { type: String },
  products: [{
    name: { type: String },
    price: { type: Number },
  }],
});


// creating instance method, to extend its functionality...

customerSchema.methods.totalBuy = function() {
  return this.products.reduce((totalAmount, product) => totalAmount + product.price, 0);
};


const Customer = mongoose.model('Customer', customerSchema);


const customer = new Customer({
  name: "Zen",
  email: "zen@email.com",
  products: [{
    name: "Pen",
    price: 30
  }, {
    name: "Shirt",
    price: 450
  }]
});

customer.save();

const totalAmount = customer.totalBuy();

console.log(totalAmount); // 480
```


<br />
<br />

> ## How do you use comparison operators like "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage.

### Ans:- 

| Operator | Description or its meaning...                      | 
|----------|----------------------------------------------------|
| `$ne`    | Match the value is `not equal` to the given value. |
| `$gt`    | Match the value is `greater` than the given value. |
| `$lt`    | Match the value is `less` than the given value.    |
| `$gte`   | Match the value is `greater` or `equal` to the given value. |
| `$lte`   | Match the value is `less` or `equal` to the given value.    |

How to use these operator's in MongoDB queries, `Examples`:-

| Operator | Example Query                               | 
|----------|---------------------------------------------|
| `$ne`    | db.collection.find({ age: { `$ne`: 20 } })  |
| `$gt`    | db.collection.find({ age: { `$gt`: 20 } })  |
| `$lt`    | db.collection.find({ age: { `$lt`: 20 } })  |
| `$gte`   | db.collection.find({ age: { `$gte`: 20 } }) |
| `$lte`   | db.collection.find({ age: { `$lte`: 20 } }) |


<br />
<br />

> ## What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?

### Ans:- 

In MongoDB's these operators are used for - 

| Operator | Usage of this Operator            | 
|----------|-----------------------------------|
| `$in`    | `match`   - values from an `[`array`]` |
| `$nin`   | `exclude` - values from an `[`array`]` |


`Examples` of these operators:-

| Operator | Usage of this Operator            | This query will select all documents where the "color" field is -  |
|----------|-----------------------------------|--------------------------------------------------------------------|
| `$in`    | db.collection.find({ color: { `$in` : ["red", "blue"] } })  | `equal` to "red" or "blue"               |
| `$nin`   | db.collection.find({ color: { `$nin` : ["red", "blue"] } }) | `not equal` to "red" or "blue"           |