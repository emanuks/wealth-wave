# Wealth Wave

https://wealthwave-emanuks.vercel.app/

### How to Run

###### Install

`yarn install`

###### Run

`yarn start`

### Description

Business' financial health dashboard focused on showcasing an overview to small businesses.

Using React, Typescript, Chakra UI, React Apex Charts and Context API.

I used Bags dashboard as a template, but decided to add different information that I think is relevant to small business.

The dashboard consists in 4 main visualizations:

- Average Monthly Balance
- Monthly Balance
- Total Revenue
- Shareholders Equity

The user can see tooltips in each chart by hovering the mouse on them, he can also filter the visualization by selecting start and end months.

Creating the charts was the most challenging part, mainly because my first choice on what library to use was [React Charts](https://react-charts.tanstack.com/) and it does not have a great documentation, after expending some time trying to use React Charts I decided to move to React Apex Charts, which has better documentation.

Some possible improvements are adding testing with Jest or some other test framework, move Context API state to Redux and improve responsivity.
