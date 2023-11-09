# Placment Cell App

This application is designed for Team Career Camp to maintain a database of student interviews for internal use. It enables the storage and management of various details related to students, interviews, and their outcomes. The application allows authorized employees to manage student information, interview schedules, and results.

## Features
- **Authentication**: Employees can sign up and sign in to access the application.
- **Student Management**: View a list of students and add new student details. Similar to adding and viewing posts in Codeial.
- **Interview Schedule**: View a list of interviews and create new interviews with specific dates.
- **Interview Allocation**: Allocate students to specific interviews.
- **Result Management**: Select an interview to view the list of participating students and mark their result status (PASS, FAIL, On Hold, Didn’t Attempt).
- **Bonus Feature - External Jobs List**: Access a page displaying real available jobs in India for React/Node.js by fetching data from open APIs. The design is minimalistic, and the job links redirect to external sources for application. No models/controllers/views are created for this page.


### CSV Data Download
- Download a complete CSV file comprising the following columns:
    - Student ID
    - Student Name
    - Student College
    - Student Status (placed, not_placed)
    - DSA Final Score
    - WebD Final Score
    - React Final Score
    - Interview Date
    - Interview Company
    - Interview Student Result

### Note on Data Organization
- A student can have multiple entries based on the interviews they have attended, reflecting various interview details and outcomes.

### Technologies Used
- Node.js
- Express JS
- MongoDB
- API Integration
- HTML/CSS for the minimalistic design

### Setup Instructions
To set up the application locally, follow these steps:
1. Clone this repository.
2. Install the required dependencies using `npm install`.
3. Configure access to the internal database.
4. Run the server using `node server.js`.


