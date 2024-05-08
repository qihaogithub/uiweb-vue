// vue-oss-upload-plugin.js
const path = require("path");
const OSS = require("ali-oss");

class VueOSSUploadPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.done.tapAsync(
      "VueOSSUploadPlugin",
      (compilation, callback) => {
        const { outputDir, ossConfig } = this.options;
        const client = new OSS(ossConfig);

        const assets = compilation.assets;
        const imagePathRegex = /\.jpg|\.jpeg|\.png|\.gif/;

        const uploadFile = (filePath) => {
          const fileName = path.basename(filePath);
          const promise = new Promise((resolve, reject) => {
            const stream = fs.createReadStream(filePath);
            client.put(
              `/images/${fileName}`,
              stream,
              {
                mime: "application/octet-stream",
              },
              (err, res) => {
                if (err) {
                  reject(err);
                } else {
                  console.log(`Uploaded ${fileName}`);
                  resolve(res);
                }
              }
            );
          });

          return promise;
        };

        const uploadAssets = (assets) => {
          const imageAssets = Object.keys(assets).filter((asset) =>
            imagePathRegex.test(asset)
          );
          const uploadPromises = imageAssets.map((asset) =>
            uploadFile(path.join(outputDir, asset))
          );
          return Promise.all(uploadPromises);
        };

        uploadAssets(assets)
          .then(() => callback())
          .catch((err) => callback(err));
      }
    );
  }
}

module.exports = VueOSSUploadPlugin;
