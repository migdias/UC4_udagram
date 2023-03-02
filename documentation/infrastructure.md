# Infrastructure Documentation

This product is made using mainly AWS services for the hosting. On the deployment pipeline another service is used.

### AWS Services

- Provision a publicly available RDS database running Postgres. [DB Link](https://mydbinstance.cuc17jgrmae4.us-east-1.rds.amazonaws.com)
- Provision a s3 bucket for hosting the uploaded files. ARN: arn:aws:s3:::udagramposts-bucket
- Provision a s3 bucket for hosting the static website, and where the code is laying. ARN: arn:aws:s3:::myawsbucket-7513648800086
- An Elastic Beanstalk instance running the backend data fetching API. [API link](udagram-api-dev22222222.us-east-1.elasticbeanstalk.com/api/v0/)


### Deployment Services

- [CircleCI](https://www.circleci.com) for the development pipeline creation
- [Github](https://www.github.com) for the code versioning and working along side CircleCI for CI/CD


### Infrastructure Diagrams

![Main AWS Infrastructure](Diagram.png)

![Deployment Pipeline Infrastructure](development_pipeline.png)