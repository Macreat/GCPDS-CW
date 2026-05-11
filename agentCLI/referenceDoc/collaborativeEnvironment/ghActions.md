# about GH actions documentation 
reference https://docs.github.com/en/actions
## functionality 

    - how to automate my deployments in order to deal with a issue when we're deploying our code to production  
        - GIT HUB CONTINUOUS INTEGRATION & CONTINUOUS DELIVERY


## things

to solve time and removes possibility of human error causing troubleshoot issues. 

### compiling codes

### running tests 

### uploading code to the cloud 


## TOOLS 

    - circleci 
    - gh actions
    - gitLab
    - go 
    - TC 


## HOW TO START 

1. GIT REPOSITORY
    - actions :  once i have automations running i can keep track of the logs for each WORFLOW 
    - ONCE is running, i can  see the progress of each step in the GH ACTIONS WORKFLOW 

        - THE CODE could fail during some test and get the knownledge for NOT upload our code to deployment and FIX THE BUGS.

    

2. TEMPLATES on GH actions
    - GEMO, WEBPAC, GRUNT, etc... to easily run specific actions 




## WORKFLOWS... 

## EVENTS... 

# SPECIFIC CASES 

    - For every commit and push to the main branch, we might want to deploy it to our production  server automatically  
    - For every NEW PULL Request , we might want to test the code to mae sure everything is working before we merge that code into main branch


_EVENTS THAT TRIGGERS WORKFLOWS_ 
    For specific workflows: 

    - https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows


-   A SIMPLE .yml automation file

        - On the reposioty root: 

        - .github/worflows/... 

```yaml

name: Test Project

on:
  pull_request:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest

    container:
      image: node:20

    steps:
      - uses: actions/checkout@v3

      - with:
          node-version: 20

      - run: npm ci
      - run: npm test
      - run: npm run build
    
```


    - THEN, i can add and commit the changes, then create an PR FOR THE specific feature and the GH ACTIONS workflow is going to spin up a virtual environment, run our test and then confirm that code is working as expected 


THIS AVOID TO ME TO MAKE A PULL REQUEST ONTO MY LOCAL MACHINE AND THEN RUNNING THE TEST MANUALLY. 


FROM HERE, i can CONTINUE WITH THE CD part or CONTINUOUS DELIVERY part of the process.

## deployment process without autmoatization 

1. git pull
2. git checkout 
3. npm install & npm build 
4. scp -i...  -r dist /* .... www.com: /changes (to deploy the changes/upload files to server)
5. ssh for connect to the server and reinstall dependencies (i should add the SSH key to the repo) 

## deployment using CI & CD

```yaml
name: Deploy Project

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    container:
      image: node:20

    steps:
      - uses: actions/checkout@v3
        with:
          node-version: 20

      - run: npm ci
      - run: npm run build

      - name: Get SSH Key and set permissions
        run: |
          mkdir -p ~/.ssh
          echo "${{ secrets.SSH_PRIVATE_KEY }}" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa

      - name: Deploy using SCP
        run: scp -o StrictHostKeyChecking=no -i ~/.ssh/id_rsa -r ./dist/* ${{ secrets.SSH_USER }}@${{ secrets.SSH_HOST }}:/node-app

      - name: Restart Server
        run: ssh -o StrictHostKeyChecking=no -i ~/.ssh/id_rsa ${{ secrets.SSH_USER }}@${{ secrets.SSH_HOST }} "cd ~/node-app && npm install"
```

# TEST WORKFLOW

finally i can test my workflow using ACT, allows to run GH ACTIONS SCRIPTS offline.

## STEPS: 
    - have docker running on my machine
    - .secrets file on my project (to replace what would be GH actions secrets)
        - HERE I PUT MY TEST that im deploying to a differente infraestructure or patters design 


USE  _act -j deploy_ to test my WF and mae sure that everythings is working.

Once im happy wwith the workflow i can publish to the repo and merge the feature, we have triggered this automate workflow into our GH CURRENTLY PAGE WHICH is going to deploy our code into the server 