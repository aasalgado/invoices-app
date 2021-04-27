# Severless Invoice Table App

## Technologies

React, NodeJS, AWS (Lambda, API Gateway, DynamoDB, S3)

## [Link](http://invoiceprocessing-aws-as.s3-website-us-west-1.amazonaws.com/)

Started by building a simple react one page application that renders a table, it makes an asynchronous api call to an endpoint that was built in AWS API Gateway. Inside API Gateway I created a get method, that makes a request to a lambda function written in NodeJS.
When the lambda function is called it scans a table from DynamoDB for all possible values.

