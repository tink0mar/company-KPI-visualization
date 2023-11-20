# Company KPI Visualization

This project focuses on visualizing company KPI from a given dataset.

# Development

I built this project using React.js and Typescript, and for styling, I went with Tailwind. I chose React.js to sharpen my skills since I hadn't used it much before. During the development, I found the process enjoyable, and React.js was easy to learn, especially with my existing knowledge of Typescript.

To keep things organized, I divided the project into components. For the table, I initially considered using a library but ended up creating my own in the CompanyTable component. It wraps a reusable Table component with basic pagination and includes straightforward filtering options using select tags. I have had chosen only this columns for filtering, because one bonus was to creativly distinguish regions, sectors, and statuses. Initially, I considered using colors for cell distinction, but it felt overwhelming. So, I end up with selects.

For charts, I went with [ApexCharts](https://apexcharts.com/) and put there two buttons for switching graph types.

I misunderstood the assignment at the beginning, so I created a separate chart. After consulting, I wanted to display this graph on a hover, but it was not as usable as my first solution.

One bonus challenge was making the table and graph look different. So, I added a global theme feature using the Context API. Now users can choose a color theme that suits their vibe :D.

# Setup

Install node modules:

`$ make install`

Start project:

`$ make start`

# Usage

### Theme

It is possible to change theme with the select element in the header.

### Table

In the table there are shown data from the dataset `data.ts`. There is a posibility to select a row and after clicking on the row - Monthly Data will be shown in the graph next to the table. Additionally, you have the option to filter data based on Status, Region, and Sector. I added this functionality to distinguish between different Region, Staus and Sector values, as it seemed relevant to the topic and bonuses.

### Graph

It possible to change the line chart to bar chart. To focus on specific data you can hide or show atributes in the legent to analyze only choses. In the header of the card there are overall stats for the company.

### BUGs and PS.

I really enjoyed working on this project. It was a lot of fun :D ! However, there's a bug in the table pagination. If you're not on the first page and apply a filter, the table show empty rows even if there's data. To solve this, switch back to page 1.
