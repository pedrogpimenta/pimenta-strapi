module.exports = ({ env }) => ({
  provider: 'aws-s3',
  providerOptions: {
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
    region: 'eu-west-1',
    params: {
      Bucket: process.env.AWS_BUCKET
    }
  }
});
