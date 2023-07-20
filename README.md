# pollingAPI.github.io

# USE --> Nodejs,Mongodb Atlas,Javascript

## install dependencies using npm i express mongoose body-parser cors dotenv nodemon --save
### package.json file will be created with all the installed packages and their versions in it


# config.env files  contain PORT and DATABASE address

# routes-->
 a. create -->http://localhost:8000/api/v1/question/create

 b. view   -->http://localhost:8000/api/v1/question/view/${question_id}

 c. add option --> http://localhost:8000/api/v1/question/options/${question_id}/create

 d. vote -->http://localhost:8000/api/v1/options/${option_id}/add_vote

 e. delete option -->http://localhost:8000/api/v1/question/options/delete/${option_id}

 f. delete question -->http://localhost:8000/api/v1/question/delete/${question_id}

 g. force delete question -->http://localhost:8000/api/v1/question/forceDelete/${question_id}