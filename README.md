# Zweer Serverless: Utils

## Installation

This submodule must be 2 folders away from the root of the project.

You have to install it (to let npm/yarn handle its dependencies) putting this in your `package.json`:

```json
"dependencies": {
  ...
  "zweer-serverless-utils": "./lambda/utils"
  ...
}
```

## Env variables

- LAMBDA_4_LOGS: the Lambda function used to handle logs
- SNS_TELEGRAM: the SNS queue used to store Telegram messages
- TABLE_CONFIGURATION: the name of the DynamoDB table to be used to store configurations
