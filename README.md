## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1. **For each HTML element ask: Why do I need this?**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1. **Think about how to validate each of your features according to a Definition of Done**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)




Master Plan:
-Draw a wireframe
-Fill in any necessary HTML
-Make Supabase table and edit policies
-Check that log-in/sign-up/logout is working and redirecting
-Write fetch utils
-Add event listeners
        - on load
        - form 'submit'
        - but item 'click'
        - reset shopping list 'click'
        - logout



RUBRIC: 

User should be able to . . .	
Visit the deployed pages on GitHub pages, with link in the About section of the Github repo	                        1
See bought items styled differently from unbought items	                                                            1

Events	
On the home page ('/'), Login and Signup using the login and signup form. On success, redirect to the /list page	1
Logout by clicking the logout button	                                                                            1
If a non-logged-in user tries to visit the list page, redirect them to the login page	                            1
On the list page load event, fetch the list itemss from supabase and render them to the page. Note that list items should have a quantity and an item name. Call your fetchAndDisplayList() function to do this work.	                             2
Add a list item to supabase by using the input and button.	                                                        2
When a list item is added, clear out the shopping list and render the updated list of shopping items.	            2
When a user clicks a list item, it becomes bought. Update this state in supabase, clear out the shopping list, and re-fetch and redisplay the updated items. Call your fetchAndDisplayList() function to do this work.	                            2
When a user clicks delete all shopping list items, delete them. Update this state in supabase, clear out the shopping list, and re-fetch and redisplay the updated items. Call your fetchAndDisplayList() function to do this work.	                1

-Functions: 
        ASYNC: createItem(item) : create a item in supabase for the logged-in user	                 1
        ASYNC: deleteAllItems() : delete all items in supabasefor the logged-in user	             1
        ASYNC: getItems() : get all items in supabase for the logged-in user	                     1
        ASYNC: buyItem(id) : complete this items in supabase for the logged-in user	                 1
        PURE: renderItem(item) : takes in an item object and returns a DOM element	                 1
        IMPURE: fetchAndDisplayList() : fetchest the items, clears out the list, and redisplays them 1
