/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const awsServerlessExpress = require('aws-serverless-express')
const app = require('./app')
const server = awsServerlessExpress.createServer(app)

exports.handler = (event, context) => {
   console.log("EVENT: " + JSON.stringify(event));
   /*
    
    03:05:11
    2018-01-23T03:05:11.796Z	39659c0a-ffea-11e7-8068-11f58c4a892f	EVENT: {"resource":"/items/{proxy+}","path":"/items/restaurants","httpMethod":"GET","headers":{"Accept":"application/json, text/plain, *\/*","Accept-Encoding":"gzip, deflate, br","Accept-Language":"en-GB,en-US;q=0.9,en;q=0.8","CloudFront-Forwarded-Proto":"https","CloudFront-Is-Desktop-Viewer":"true","CloudFront-Is-Mobile-Viewer":"false",
2018/01/23/[$LATEST]fc6990375e674e188912ddda0b09e3ea
    2018-01-23T03:05:11.796Z	39659c0a-ffea-11e7-8068-11f58c4a892f	EVENT:
    {
        "resource": "/items/{proxy+}",
        "path": "/items/restaurants",
        "httpMethod": "GET",
        "headers": {
        "Accept": "application/json, text/plain, *\/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
            "CloudFront-Forwarded-Proto": "https",
            "CloudFront-Is-Desktop-Viewer": "true",
            "CloudFront-Is-Mobile-Viewer": "false",
            "CloudFront-Is-SmartTV-Viewer": "false",
            "CloudFront-Is-Tablet-Viewer": "false",
            "CloudFront-Viewer-Country": "AU",
            "Host": "u62rk07ex7.execute-api.ap-southeast-2.amazonaws.com",
            "origin": "http://localhost:8080",
            "Referer": "http://localhost:8080/main",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36",
            "Via": "2.0 d112d3017705f4a4c66a2958899eb08b.cloudfront.net (CloudFront)",
            "X-Amz-Cf-Id": "BRlMGr3UN-0FViVKIHYft6z8bUu3rNy5v10hv4dRL2HPn4145YdG-Q==",
            "x-amz-date": "20180123T030510Z",
            "x-amz-security-token": "AgoGb3JpZ2luEIf//////////wEaDmFwLXNvdXRoZWFzdC0yIoACaPkpmHtLCA8QshinEC6GepIeSwPWz246jXXY0eQNT67l7FfH8LgFXFM2cX1h4wYj+MXpU8hZuNE6+Gm9Ft5qEWWG7Y+T1/CygOHVVN80mu0/2UMK/0fJng6PGFde/E43W9iiur7GLg+/MRNqLMPf2xLeADh2HmJM6PWP0ObWCpGpFh6FLfF4IN7df0UV0ZvPCCpd+5Sp/35732HxBR64ZpF3vN9YMRZlz6+mYY/PZnzhDgpm6uUB8G6gfq8HNFgykPO41Bd6qHpola0aNrD4BENSANSuXaYMgrf4ENnW6DL+fWn/M/qmyDMdO4g9Axtprs4qGtdWAzuZoyxOwvnVgCrEBQg8EAAaDDI5MzQ5OTMxNTg1NyIMNxbJ00iLPoMOSNbfKqEF8zFzHj+dhzT2ocigeeLBEd3u7B9nFRFFm19xApIFE6oyRgawGJ9SUwWC5FuZeiIQlpRrYb1vQSQ5XDII77F2E3u2uALYsY8/Tx0PFuAku36/uUDpopm2SAOUMQjhfesUAkavPTO20B+jSKHWFtsjfxTOUpYU1hySqFURU65x9Oa9DKizWtaios7NBW5z7qtdh1iqvOOqtUnFa1CB+j7RunSVYRLImATJg+Y85aYxIokFh8HIcRGI3A/kn4vEB5VUi2AXnT0wdRosja0X5WYRR33xmpowItY6yQ+oU5hGhKtwxvSs3UCD30JdBbxEsOQK4qVyTHuiFjTfPVkvnGCgd8KG1wJLa+nFajhSwcP+DcVmcGCZ5Rp2A8irnrmM1L3QN1vs68DFD5HYmsWAWJQwVNGg9B4yULasDtjVV7UukZ140JN+tJFk7kmHg4o0pdHEf75w6AFrjG5+kcinDNQbxpRDUPehRlKhF3uMsyvJg3WKILDHbXFDlq+AEKhvUHGFfC8O9CLLDOJ0t4joGjmdH4CB8SGrC7obDDuMmF65tpt1ZlNhgE03vB4zVEZXdXoBAI1p6EmS1js0DDMTH4zE+Ec1hq2J4vJAu09YueUYkgMHcTDOwZOjAar19k9xBFcjsInGvdXVzj2FYkfASMI196thJepMWU+aQYKLxurNQCy5Thl2+OFiP8LmH2HtSukrOVe3TOv4m7c+udDdo3LQkLkBA/zyRi0BqaVqpdiWxyGSiHupe8/s91EsljHuYOsZiYOZpsIsZskfnVVTCs46o0e3e49fuTrjEUdVVkCm/zsCTWg8Lc9QrSLjDwE0qilS3H7FItoJ1EAyXEYkE1yk2s/qSrFs0xCJ3jKhP1PyF6il6qCZJg7rG5PLTQs3lvbYlzDmzJrTBQ==",
            "X-Amzn-Trace-Id": "Root=1-5a66a666-7688b7e96d017b607237bca8",
            "X-Forwarded-For": "49.255.206.98, 54.240.152.7",
            "X-Forwarded-Port": "443",
            "X-Forwarded-Proto": "https"
    },
        "queryStringParameters": null,
        "pathParameters": {
        "proxy": "restaurants"
    },
        "stageVariables": {
        "stage": "Development"
    },
        "requestContext": {
        "requestTime": "23/Jan/2018:03:05:10 +0000",
            "path": "/Development/items/restaurants",
            "accountId": "293499315857",
            "protocol": "HTTP/1.1",
            "resourceId": "9bhido",
            "stage": "Development",
            "requestTimeEpoch": 1516676710819,
            "requestId": "39612f3a-ffea-11e7-ad51-99e61d3fddb0",
            "identity": {
            "cognitoIdentityPoolId": "ap-southeast-2:beaecd58-7420-4178-99de-c36df73da261",
                "accountId": "293499315857",
                "cognitoIdentityId": "ap-southeast-2:21abd222-66c0-46f9-9b0e-7fd185dd46b1",
                "caller": "AROAIDKRTZWBXFFASZTRS:CognitoIdentityCredentials",
                "sourceIp": "49.255.206.98",
                "accessKey": "ASIAI5VHNE3GPQFD2PZA",
                "cognitoAuthenticationType": "authenticated",
                "cognitoAuthenticationProvider": "cognito-idp.ap-southeast-2.amazonaws.com/ap-southeast-2_kVwBTB5lJ,cognito-idp.ap-southeast-2.amazonaws.com/ap-southeast-2_kVwBTB5lJ:CognitoSignIn:c49efcb7-8d48-4637-8fad-e34ff0ea1210",
                "userArn": "arn:aws:sts::293499315857:assumed-role/pocreactdatalake_auth_MOBILEHUB_1302461580/CognitoIdentityCredentials",
                "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36",
                "user": "AROAIDKRTZWBXFFASZTRS:CognitoIdentityCredentials"
        },
        "resourcePath": "/items/{proxy+}",
            "httpMethod": "GET",
            "apiId": "u62rk07ex7"
    },
        "body": null,
        "isBase64Encoded": false
    }
    */
   awsServerlessExpress.proxy(server, event, context)
}
