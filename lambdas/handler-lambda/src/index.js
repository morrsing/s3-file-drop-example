import aws from 'aws-sdk';

const s3 = new aws.S3({ apiVersion: '2006-03-01' });

const handler = (event, context, callback) => {
  //console.log('Received event:', JSON.stringify(event, null, 2));

  // Get the object from the event and show its content type
  const bucket = event.Records[0].s3.bucket.name;
  const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));

  const params = {
    Bucket: bucket,
    Key: key,
  };

  s3.getObject(params).promise().then((data) => {
    const { ContentType } = data;
    console.log('CONTENT TYPE:', ContentType);
    callback(null, ContentType);
  }).catch((err) => {
    console.log(err);
    const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
    console.log(message);
    callback(message);
  });
};

export default handler;
