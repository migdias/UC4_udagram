import AWS = require("aws-sdk");
import { config } from "./config/config";

//Credentials are auto set according to the documentation https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html and the default profile is "Default anyway"

const credentials = new AWS.Credentials({
  accessKeyId: 'ASIA4OWU7IX3PRENGUNP',
  secretAccessKey: 'vVoZ/NNO7kSsyQpra6hGk57cKTpIEE3JDd082Ta4',
  sessionToken: 'FwoGZXIvYXdzEP3//////////wEaDJT+WYuCYPcAvZvYaCLVARLdnpIhwNnGl1Y9NvOlJzIxK0uycmYpzyaRYcggPxDibGsnIsN+cUH9yPHlFFjZ3e2CLoKrn1UTkFsqybSirmsw0gXxrHcDGiugyfZhSYZ23RmL4AQbFO7YNQ4ZeL4VuyDfBuEJukGigROS2WjlOxVWRZV71Sxp00CiC7pVJEC7iShZG+xcml5laTF5h7Rnyw4U87Z7U9oKvjhTS0c/5Q8xjkcFL6FzzM/EaOZldDI52BzN/pNk/KBJnBYX4exOtT141WMr18MsgjPEJZ88MIZ39Xmt4Siky/6fBjItaC/KjHOrl6tFEg32dpqZJygi8V46jiQ2/M8yrhKrBCoHUC+ZTcAMK7BToJhZ'
})

export const s3 = new AWS.S3({
  signatureVersion: "v4",
  region: config.aws_region,
  params: { Bucket: config.aws_media_bucket },
  credentials: credentials
});

// Generates an AWS signed URL for retrieving objects
export function getGetSignedUrl(key: string): string {
  const signedUrlExpireSeconds = 60 * 5;

  return s3.getSignedUrl("getObject", {
    Bucket: config.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds
  });
}

// Generates an AWS signed URL for uploading objects
export function getPutSignedUrl(key: string): string {
  const signedUrlExpireSeconds = 60 * 5;

  return s3.getSignedUrl("putObject", {
    Bucket: config.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds
  });
}
