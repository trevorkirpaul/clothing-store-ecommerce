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

### Jan 7th, 2018

It's hard to be specific or explain this correctly but I'm feeling more comfortable with managing and manipulating state.

This involves client actions, such as when the client clicks a button to submit info to the database, when it gets back and when the client confirms everything. This also involved loading and correctly settting up checkpoints to figure out what information should be displayed and when.

A couple months ago I didn't really understand nor was aware of the depth regarding making an app usable with loading indicators. It's now something that I understand and can reason about in detail in my head. It's more than just knowing how it works but also understanding how to use it exactly.

There's still so much I need to refine but this is something that is both a small detail and crucial to my understanding of programming.

Regarding this app, a user can now:

1. Sign in
2. Select and add a product to their cart (which is saved to the database)
3. select a shipping method (saved to redux state)
4. Enter a promo code (saved to the database)
5. review the order with the price calculated according to shipping and discounts
6. Submit the order and recieve a confirmation

There are a few small things which I want to do, like tracking promo codes used as to prevent re-use. I also need to flesh out the sign in/out component views and I need to implement a CreateUser component.

I do want to implement a confirmation e-mail being sent by the backend upon submitting an order. I don't believe this will be complicated at all.

I originally planned to use the Stripe API and use dummy CC info. Currently I'm circumventing this process and now payment info is being tracked. This would be a big feature to implement so It'll be somethine to consider closer to the end.

A lot of styling has to be done overall as well so I still have much work to do. I am very happy with the app and progress made so far.

### Jan 8th 2018

I've finished styling all of the componenents save a few loading indicators. I also set up nodemailer on the backend and the app now sends a comfirmation email to the user upon submitting an order. I did some refactoring in major components, the products now fetch on component mount and the cart fetches on mount as well.

I spent some time also fetching the cart when the header loads, so I could track the cart length and display the number on the cart button in the nav. I got this working fine but realized that since I don't keep a loval state of the cart then I'd have to re-fetch the cart to update the length when an item is added.

I decided early on not to use loacl state to track the cart and to have the database be the only source of truth. In the past, like the Bartr app, I did it the convential way where I have local state in redux and the db state. I may implement redux state for the cart but I pulled back on the feature for now.

I spent a lot of time today really cleaning up a lot of the features and the app experience. Tomorrow I'll deploy it although I still need to do a bit more streamlining.

I want to create an account sign up comfirmation feature. I think it'll be somewhat simple as I have everything set up already. This, along with a message on the sign up component, will ensure the user has a vali email so they can actually recieve the confirmation email for orders as well.

I don't want to make the testing experience for a random user require too much effort though. Since this is a portfolio piece, I doubt most people will want to deal with all thoses steps just to test my app. I could easliy have a test account already set up and that might be my solution.

I also want to let the user choose if they want to persist the signIn. I realized this is pretty easy. I'll have a boolean that the user chooses which determines whether or not the JWT from the server is saved into localStorage.

I think I'll be done with this app tommorow which means it took me about a week to complete. I think my first portfolio piece took a little longer, not considering the troubles I had learning how to deploy an app and get a SSL cert and use Nginx for my site. My second portfolio piece isn't even done yet but I put a TON of work into that. I basically coded a CMS for an admin. I put that project on pause to actually learn mongoDB in node and after that I worked on this project.

I definitely have the knowledge to finish the TKcomputers app and I'm pretty proud of my progress on all three apps. I think I'll have a strong portfolio once I deploy everything.

### Jan 10th 2018

I had some issues deploying but they were simple mistakes, such as the app referring to variables inside an uncommited js file. I got the backend deployed on heroku and react frontend is sitting on my vps. I also connected the backend to Mlab isntead of running mongoDB on my vps.

Since then, I've added in a lot of mobile styling. I also discovered that if a user has a token in localStorage, then depending on server speed (and with heroku, if the server is waking), the app will be dispatching a signIn without letting the user know.

This was a simple fix, I added a component with modal, if there is a token in storage then I already was calling a dispatch that set `loading` to true so I used that boolean to trigger the modal.

I also set up a hamburger menu for mobile screens. It was pretty simple since I'm using mat-ui.

I'm relly just trying to tie up loose ends for now.

Something that has come to my attention was a video that I recently saw about the negatives of dispatching from lifecycle methods. I think I need to get a better grasp on how I'm managing state and passing props down the line. I know I can improve how this app makes http requests and it'll take some effort. I've already noted how I don't really like my approach to managing the user shopping cart and this is a great oppertunity to address that.
