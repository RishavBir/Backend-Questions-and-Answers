

//you need to replace ACCESS_KEY_ID and SECRET_ACCESS_KEY with your own AWS credentials,
// and BUCKET_NAME and OBJECT_KEY with the desired values for the bucket and object in S3.


const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: 'ACCESS_KEY_ID',
  secretAccessKey: 'SECRET_ACCESS_KEY'
});

// upload a file to S3
const uploadParams = {
  Bucket: 'BUCKET_NAME',
  Key: 'OBJECT_KEY',
  Body: 'FILE_CONTENT'
};

s3.upload(uploadParams, function(err, data) {
  if (err) {
    console.log('Error', err);
  }
  if (data) {
    console.log('Upload Success', data.Location);
  }
});
