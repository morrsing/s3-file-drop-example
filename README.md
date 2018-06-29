# S3 File Drop Example
> Creates a bucket for accepting file drops, and invokes a Lambda in response to file uploads.

![Diagram](https://s3.amazonaws.com/f12f301f-s3-file-drop-demo/misc/diagram.png "Diagram")


In this case, the Lambda simply outputs the file type to CloudWatch logs, but you could easily imagine this invoking an ETL process or something more sophisticated.

Please note: The materials in this project are for demonstration purposes only. They are not production-ready.

# Getting Started
This project contains a CloudFormation template that will create an S3 bucket for accepting file drops, as well as a Lambda to output information about the file type to CloudWatch. To deploy, click the button below:

[![Deploy to AWS](https://s3.amazonaws.com/f12f301f-messaging-demo/misc/deploy_to_aws.png "Deploy to AWS")](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=file-drop-demo&templateURL=https://s3.amazonaws.com/f12f301f-s3-file-drop-demo/templates/s3-file-drop.yaml)

The template will return the location of an S3 bucket into which you can upload files, as well as a name of the Lambda that sends information to CloudWatch about files you upload to the bucket. The template also generates links to locations in the AWS Management Console where the bucket and Lambda are managed, making it easy to upload files to the bucket and access the Lambda's CloudWatch logs to monitor the results via the AWS Management Console.

# Demonstration Flow
  1. After deploying the template to CloudFormation, grab the link to the S3 bucket in the AWS Management Console by looking for it in the Outputs tab for the template within CloudFormation. Navigate to the bucket in the AWS Management Console using the link.
  2. Upload a file to the bucket.
  3. Move back to CloudFormation and grab the link to the Lambda monitoring page in the AWS Management Console by looking for it in the Outputs tab for the template within CloudFormation. Navigate to the monitoring page in the AWS Management Console.
  4. Examine the metrics or use the links to navigate to the Log Stream for the Lambda for evidence that the workflow completed.
