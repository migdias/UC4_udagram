# Deployment Pipeline

This project makes use of CI/CD using a simple development and deployment pipeline using Github and CircleCI.

### Basic Architecture

1. Changes on the code are made in a local environment 
2. After everything is tested locally, the changes are commited and pushed onto Github.
3. CircleCI will detect a new commit has been made to Github and will trigger the deployment pipeline, building, linting, testing and deploying the backend and the frontend parts of the application.

![Deployment Pipeline Infrastructure](development_pipeline.png)