# Clothing Store/Label eCommerce App

## A React + Redux based portfolio project

This app utilizes a custom express backend which I also created

I'm hoping to efficiently use Redux state and keep my DB touches conservative. I also want to correctly use presentational and container components correctly. Hopefully that will make creating re-usable components easier.

### Jan 4th, 2018

This is essentially my third large scale app using this tech stack so I'm not running into many hurdles. I have been having some issues though and they could be related to state management.

To be more specific, it's one issue that concerns when I render the user's shopping cart.

When the container component loads, I make an http request to the db. The only thing being sent is the JWT for passport to authenticate and the user's mongo ID which is saved in redux state. I'll eventually move the ID into the JWT.

On the backend, the route handler queries the DB for the user. The shopping cart array is saved as a its own model and referenced in the user model, so when the query happens I also populate the cart array.

The route handler then responds with the cart array which is connected to the cart container using redux.

I have the cart container render the cart component (I'm using container/presentational component patterns btw) with the newly received cart array passed as a prop.

I have some conditionals set up so the cart component renders based on the state of the array's length. If there are items in the car then we'll render the component using two other components, one for the header and one for the cart items.

The cart header shows the total number of items and the total price. I'm using a function to get the price of the product and the quantity then multiplying them and totaling.

All of this works completely fine except for 2 strange occurences.

The first was when I originally used the array method `reduce()` to generate the total price. It would work fine until I had more than 2 items in the cart. Once that happened, it's like there was a lag somewhere in the chain because a prop was becoming undefined. I fixed this by using a forEach loop, although I do plan on revisiting this later on.

The second and more crucial issue is that when I remove an item from the cart, the component refreshes but doesn't get the values for the price or the image path.

A quick note here, when the DB query is made to find the cart info, I populate the cart array. Each array item is a `CartItem` model instance which has a reference to the `Product` model instance of the product in the cart item.

I'm 90% I could get rid of these two big errors if I got rid of the nested `Product` and just saved the image path and price in the `CartItem`.

Anyways, the reason why I think the component is reloading without some props could be related to the nested `Product`, since the price and image path come from that. This could also be a reason why the array method `reduce()` wouldn't work.

I spent a decent amount of time trying to work this out and when I first realized I could just not use the nested `Product`, I thought it was the easy way out or that I should just try and make it work with the double nested models.

I'm beginning to realize that I should embrace simplicity and there's also no reason to save the actual product in the cart item. There's a ton of useless info being saved (like the total choices of colors or sizes) when I'm already saving the selected size and color in the `CartItem`.

I'm glad I figured it out but at the same time I don't really feel like I figured anything out here.

---

Other than that issue, the overall dev process has been fine. I'm really not trying to make this app over-complicated (despite the fact that I am) and I want to finish it soon. Most of the work is complete though and I'm really just styling and organizing information right now.

I just need to add the feature to complete and submit an order and I also want to set up the backend to send a confirmation email on orders (as well as sign ups).

Order history is another feature but that will be pretty simple.

### Quick update:

I just circumvented using the redundant second layer of `Product` and directly saved the price and quantity on the the `CartItem` model iteself. I'm no longer having any issues and I now feel like it's correclty solved.

I still can't get the array method `reduce()` to work but the forEach loop works.
