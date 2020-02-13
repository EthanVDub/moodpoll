# Moodpoll

Moodpoll is a simple one page site that asks me my current mood. It is meant to be set as my homepage for Chrome so when I open a new window I can quickly record my current mood on a 1-5 scale (using emojis for the values)

## Inspiration

At the Iowa State Library, there is a tablet towards the front with 5 options to poll your current mood. While I've never seen anyone else use this, I have loved tapping the poll each time I enter and exit the library.

However, I end up wishing I could have data on my own interactions with the system. I decided I would make a simple page using React that I can replicate the functionality of the library tablet, but be able to send my results to a database and eventually compile and look at the results!

I have also added a button that toggles between me and my fiancee so she can use it to record her moods as well! I wont link the current live site because it would mess up the results of the poll, but I will provide a screenshot. No promises this screenshot will be updated as I update the UI:

https://github.com/EthanVDub/moodpoll/blob/master/moodpollexample.PNG
![Example of basic UI](https://github.com/EthanVDub/moodpoll/blob/master/moodpollexample.PNG)

## Technology Used

The base of the application is made in React/Next.js. As this is a simple 1-2 page system, React and Next make it simple to not only construct the site, but deploy it and maintain it. Styling was done primarily with Styled Components for React.

The database is done through MongoDB. For personal use, MongoDB is nice because it easily hosts your database for free and can be accessed through javascript via a simple string. 

The connection to the database is done through my single api class. The only interaction the api currently has is taking the current user and response value and recording it in the database. 

The entirety of the deployment and hosting is done through ZEIT Now. Now has made it incredibly simple to host the site and automatically deploy it with pushes to GitHub.

## Future Goals
My next future goals include:
 - Formatting the site for mobile use
 - Finding the best way to compile the data
 - Potentially porting to raspberry pi with touch screen to really mimic the library setting
 - Continually updating UI
 - Look to making it more accessible for people not me or my fiancee (some auto signed in user?)
