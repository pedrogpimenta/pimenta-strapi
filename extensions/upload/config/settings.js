module.exports = {
  provider: 'aws-s3',
  providerOptions: {
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
    region: 'eu-central-1',
    params: {
      Bucket: process.env.AWS_BUCKET
    }
  }
};