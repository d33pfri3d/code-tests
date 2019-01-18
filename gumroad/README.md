# Gumroad.com FullStack Development Test

TIME SPENT : ~1 hour
STATUS : DENIED

The response to me submitting my work was 

"Thanks for this! Unfortunately it's not at the bar we're looking for."

When pushed for a little more in-depth reasoning ( constructive feedback is always a good thing)...

"Yes, It was mostly the simplicity and a bit of readability concerns in the JS."

Im not paraphrasing, that was the entire feedback. 

THOUGHTS :

Meh, oh well. Maybe I could have spent some more time on it. I checked over the JS again and tried to maybe understand what the readability issues might be and find it strange that ~40 lines of JS has readability issues. Its not the most beautiful in the world, so maybe that is it. Maybe I should have used classes instead? I also didn't fully tackle both optional parts of the JS, I guess that others did. 


FURTHER DETAILS
---

I responded to this tweet

https://twitter.com/shl/status/1084850514787848192

and was asked to take the following test. 

```
Three problems. Do the first and either the second or third depending on if front-end or back-end interests you most! You'll be doing a bit of both if you work with us regardless though.


A quick coding question:


Write a method that returns the "pivot" index of a list of integers. We define the pivot index as the index where the sum of the numbers on the left is equal to the sum of the numbers on the right. Given [1, 4, 6, 3, 2], the method should return 2, since the sum of the numbers to the left of index 2 is equal to the sum of numbers to the right of index 2 (1 + 4 = 3 + 2). If no such index exists, it should return -1. If there are multiple pivots, you can return the left-most pivot.


You can write the method in any language. Make sure that the method:

   • runs successfully

   • handles all edge cases

   • is as efficient as you can make it!


A successful answer will fulfill the above criteria.


Front-end:


If you're not familiar with the Gumroad overlay, you should be. It's pretty cool: gumroad.com/widgets


The way it works is pretty simple: it scans every link to a gumroad product on a page, and if they exist, turns them into inline popups using transparent iFrames. Implement your own version of this. It should be as performant as possible.


Depending on how much time you want to spend, you can implement some of these features, or come with your own to impress!

    Early-load pages upon hover
    Supporting reading data-attrs of the anchor tags to show a button or not, make it embed or not, etc.


And a data model design question:


Let's design a small part of Gumroad. Gumroad helps creators sell their products online. As part of that we charge the buyers' credit cards and deposit money to the sellers' accounts. Here's a simplified version of our data model:


Seller <1----*> Product <1----*> Purchase


Each seller can have multiple products, and each product can have multiple purchases. Every purchase should increase the seller's balance. The seller can at any time refund a purchase, which should decrease his/her balance.


We want to pay the sellers every other week for all their sales up to a week before that. For instance we would pay the sellers on Friday the 10th for all their sales up to Friday the 3rd. We want to have the flexibility to change this schedule; we might want to pay the sellers once a week instead of every other week.


How would you design the data model that would support these requirements? Feel free to use a drawing tool to sketch out your design but please explain the rationale behind your design and how it would support:

- purchases and refunds increasing and decreasing the balances

- rolling payouts as described above


Imagine the number of sellers and products will be in the millions, and the number of purchases will be in the hundreds of millions. Describe the indexes that you will add to the different tables/collections.

```

I decided to tackle the first two as it would give me the chance to do a bit on both sides of the stack and shouldn't take too long. 