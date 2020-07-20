
Core requirements:
- Use the API documented at https://exchangeratesapi.io/
- The user should be able to select a default currency
- The user should be able to enter a number for how much they would like to convert in their chosen currency
- The application should then list the equivalant amount in the other currencies returned from the API.
```
/*********************/
*  My currency: [GBP] *
*  Amount: 1 [submit] *
*                     *
*  Results:           *
*  USD: 1.26          *
*  EUR: 1.12          *
*  CAD: 1.71          *
*  ...                *
/*********************/
```

We will use this exercise as a basis to discuss some aspects of development in more detail once it has been submitted.
Please timebox this exercise to a **maximum** of 4 hours. We will focus more on the implementation details of what was done more than how many features were implemented.

Additional possible features (we're not expecting all of these!):
- A nice UI
- Add tests
- Input validation / error handling
- Images / metadata for each currency
- Persistent storage of user currency selection so it remains on page refresh
- Accessibility
- Live results returned from the input changing
- Implement coding standards (linting)
- Adding type safety

Submission:
- Please push your work to a public git repository, committing frequently and submit by sending through the link.
- Your project should include instructions on how to run the project locally.
- Include a markdown/text file of your thought process as you plan and implement this exercise, any features that you don’t have time to implement and / or any ways you would improve the app given more time.