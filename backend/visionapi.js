const vision = require('@google-cloud/vision');
const fs = require('fs');

const CREDENTIALS = JSON.parse(JSON.stringify(
    {
        "type": "service_account",
        "project_id": "hackathon-381013",
        "private_key_id": "6121fdc8053b40bae14ac10b005ff5c079fd1206",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDNQf1DzJnxDDKb\n5BjnxVdjYP6+Pnlcf8lprLG2c1sP9OsT3M1ijVgcNXNE89JboA2ZTZzVQFtNrgQM\nusRH9KWBCkmhJyXMgZ0u99/uAkYi7DI6iLbly8PYR7+8PssNGvVFJoboFLbHtGaP\nvgU9y/6XKvq3oNT2Vdr++OwkEhNbpNPIx8lu3zMk/mn46AKtkTLjxinNeOb8Jqoo\niCHsUNFhfMaOuAvQW+k0HmDDCawicewgME3TUuQ9KWnpeIJ8ELAZNcpm5OS0p1sw\nrZeMNh2Lfvk/hXda2xVm4O6RP3qEKEAhqd5v85AapFvWQj1xeqWDItBRwB3n1/QD\nWOEiqJWNAgMBAAECggEAIXHDqSTw3mhs5J7FehpbE1vOFkSKtMozkM7tQ/vG1jJD\njYB4TLsYJLyG1DDgUUKihJyzVcH/PoiAq2xRKCJSR1TcS3BcBdcGvAzyhU8Ei5Mt\n2gDFwGqztg12zd7zaea/GS3eZHlfkOmxnnFJXFjdWldL89i2ao7xuILpwzTYx6Eo\nl1Hc7YaobJ1vWHI38AqfLhzL/wjujUS9yHf4x1vsbdJAxbjE2eGb/l4ovKQYzYoA\n8zVj57ZZnoB9l63c4hBgXfWVmz4YcEG1r6yk5+aszb6Vakf05+SP0c/R+yRLx9kn\nuS1Fewm34kdjJYTE3aYt1aeFz7nhahCuZb63KfE9YQKBgQDlsJknZjtIwUhbtqBS\nzkWj+S34zIRwpR3wU9w3oeqtWR37we93IFIOLfPGf5kQnIVXYzRrevS3dIeAn8Rx\ndxYGa9vis4k179laledPZkGMP6gKirIUZ1I868OojKsHpZRWmNfiNFAADtzpYGhK\nMAL2T7UftqvCSCMvNXisXrhCPQKBgQDkxPKV6vidZHIaoczvGIrOiUNVvzvLBW7+\nxfIdia8VvRn2WSWVeaTPh4XzY60U7uV2DyUFEXXdXQZ0FwAuOIcZxMxgYwraHcEk\nWgnWQvMBH0OEIsVVaPHwoArCTxUjyip8y4zj4WwXEHWai9AiyPO/RF591gyrys7a\nTFIhQl1lkQKBgFzwRihRD2/y9WpWzSx0Vm1w6A8iAfzqcuDJrfO8yo513tH9uP2E\n0G74XQlWnALCspmXhKBw0hBhUGrVOtGGlBzpC8IBT2XJtTMYMM5J2//5ye7qDACB\nhh8sbrEGqjWf5BPeKIxZCn3bhbvQzKIoJyqvOeSpL3qfYc06X6evc/MpAoGAAvh3\nufCiJ9ENFkFxms0zyDjKEgv4p8s7RL2nRjDqgBrDgopnzYgV1sgIuj9aGQJ9IkpS\nDb3LTQOPOOSvkOoU/wWqLbo7gteOEX3F0O1voF0akFWvQEurkJdTbHCAcsWGRbaS\n7saXk7kX/djA7CK1347wtyuXYIeype0Fx/7HnbECgYAyun0iJofScrZrKxec3U/b\nnzS57hvt5CAfGPipQIDZakmg6pSjUd6rBT3KN1/zHPiIPLcT/IftH+sQ5x5KAjKK\ncmKOST5sht6drW5USRi91D66YVExS3u/eJoVnoYTdJh4ejg5DifmSLs+ZGm2YVgH\noRU/C0W8qtwVQ/7+Ip+RmA==\n-----END PRIVATE KEY-----\n",
        "client_email": "hack2impact@hackathon-381013.iam.gserviceaccount.com",
        "client_id": "100195562167278147087",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/hack2impact%40hackathon-381013.iam.gserviceaccount.com"
    }

))

const CONFIG = {
    credentials: {
        private_key: CREDENTIALS.private_key,
        client_email: CREDENTIALS.client_email
    }
};

const client = new vision.ImageAnnotatorClient(CONFIG);


// async function detectObjects() {
//     const [result] = await client.objectLocalization(request);
//     const objects = result.localizedObjectAnnotations;

//     let count = 0;

//     objects.forEach(object => {
//         console.log(`Name: ${object.name}`);
//         console.log(`Confidence: ${object.score}`);
//         if (object.name === 'Person') count++;
//         // const vertices = object.boundingPoly.normalizedVertices;
//         // vertices.forEach(v => console.log(`x: ${v.x}, y:${v.y}`));
//     });

//     console.log(`Number of objects detected: ${count}`);

// }

// detectObjects();
// const [result] = client.objectLocalization(request);

// const objects = result.localizedObjectAnnotations;

// let count = 0;

// objects.forEach(object => {
//     console.log(`Name: ${object.name}`);
//     console.log(`Confidence: ${object.score}`);
//     if (object.name === 'Person') count++;
//     // const vertices = object.boundingPoly.normalizedVertices;
//     // vertices.forEach(v => console.log(`x: ${v.x}, y:${v.y}`));
// });

// console.log(`Number of objects detected: ${count}`);

// const detectLandmarks = async (imagePath) => {
//     let [result] = await client.landmarkDetection("/Users/mehdi/Desktop/api-test/test.jpeg");
//     const landmarks = result.landmarkAnnotations;
//     console.log(result);
//     // landmarks.forEach(landmark => console.log(landmark));
// };

// detectLandmarks();

const detectFaces = async (imagePath) => {
    const [result] = await client.faceDetection(imagePath);
    const faces = result.faceAnnotations;
    const count = faces.length;
    const fileName = imagePath.split("/")[2].split(".")[0];
    console.log(`Number of faces detected: ${faces.length}`);
    return {"facility" : fileName, "count" : count};
};

const detectFacesAll = async () => {
    const images = fs.readdirSync("./assets");
    const promises = images.map(image => detectFaces(`./assets/${image}`));
    const counts = await Promise.all(promises);
    // console.log(counts);
    return counts;
};

module.exports = detectFacesAll;


// detectFaces("./assets/testimage.jpg");

// detectFaces("/Users/mehdi/Desktop/api-test/labbot.jpeg");

// const detectPersons = async (imagePath) => {
//     const [result] = await client.objectLocalization(imagePath);
//     const objects = result.localizedObjectAnnotations;

//     const persons = objects.filter(object => object.name === 'Person');
//     console.log(`Number of persons detected: ${persons.length}`);
// };

// detectPersons("./assets/testimage.jpeg");