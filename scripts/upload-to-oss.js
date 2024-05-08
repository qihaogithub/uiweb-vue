const fs = require("fs");
const path = require("path");
const OSS = require("ali-oss");
const config = require("./oss-config");

const client = new OSS({
  region: config.region,
  accessKeyId: config.accessKeyId,
  accessKeySecret: config.accessKeySecret,
  bucket: config.bucket,
});

function uploadFile(file) {
  const fileName = path.basename(file);
  return new Promise((resolve, reject) => {
    client
      .put(fileName, fs.createReadStream(file))
      .then(() => resolve())
      .catch((err) => reject(err));
  });
}

function uploadDir(dir) {
  const files = fs.readdirSync(dir);
  const uploadPromises = files.map((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      return uploadDir(filePath);
    } else {
      return uploadFile(filePath);
    }
  });
  return Promise.all(uploadPromises);
}

uploadDir("./dist")
  .then(() => console.log("Upload completed."))
  .catch((err) => console.error(err));
