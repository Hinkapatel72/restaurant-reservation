#ReserveApi 

RestFul API in python for DB Connection using Python library Flask.

##Main File
app.py

##API Endpoints
###Root Url
http://localhost:5000

###Paths
#### / 
Get all users from user table

#### /user/add 
Add new user to the user table

#### /user/login
User Sign In endpoint

###Run Api
python app.py

After running, make sure api is accessible through http://127.0.0.1:5000/ 
Sample Output for http://127.0.0.1:5000/ 
{"myCollection":[{"Email":"test@gmail.com","FirstName":"test","LastName":"test","Password":"test","UserId":1},{"Email":"testone@gmail.com","FirstName":"testone","LastName":"testone","Password":"testone","UserId":5},{"Email":"jscmes@gmail.com","FirstName":"Jan","LastName":"Jayar","Password":"hhh","UserId":6}]}