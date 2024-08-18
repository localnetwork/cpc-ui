const dotenv = require("dotenv");
const fs = require("fs");
const https = require("https");
const axios = require("axios").default;
const { Jsona } = require("jsona");
const dataFormatter = new Jsona();
module.exports.preBuildDevelopment = async () => {
  dotenv.config();
  // Convert the environment variables to a JSON object
  const envVars = {};
  for (const key in process.env) {
    envVars[key] = process.env[key];
  }

  // Generate default Image
  const generateImage = (imageUrl, path) => {
    const file = fs.createWriteStream(path);
    https.get(imageUrl, function (response) {
      response.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log("Default Image Downloaded");
      });
    });
  };
  [].forEach((e, i) => {
    generateImage(e, `./public/image${i}.webp`);
  });

  const generateStaticJson = (filename, newData) => {
    const staticPath = "./lib/preBuildScripts/static/";
    const filePath = staticPath + filename;

    // Attempt to read the existing data
    let existingData;
    try {
      existingData = fs.readFileSync(filePath, "utf8");
    } catch (error) {
      existingData = null;
    }

    // If no existing data or data is different, write the new data
    if (existingData !== JSON.stringify(newData)) {
      console.log(`Generated new json file for \x1b[32m${filename}\x1b[0m`);
      fs.writeFileSync(filePath, JSON.stringify(newData));
    } else {
      console.log(`Skipping file write in \x1b[33m${filename}\x1b[0m.`);
    }
  };

  const newsEntriesHandler = await axios.get(
    envVars.NEXT_PUBLIC_TENANT_API + `/api/contents/entries/article?limit=4`
  );

  const newsEntriesData = dataFormatter.deserialize(newsEntriesHandler.data);

  const facultyEntriesHandler = await axios.get(
    envVars.NEXT_PUBLIC_TENANT_API + `/api/contents/entries/faculty`
  );

  const facultyEntriesData = dataFormatter.deserialize(
    facultyEntriesHandler.data
  );

  generateStaticJson("news-block-articles.json", newsEntriesData);

  generateStaticJson("faculty-entries.json", facultyEntriesData);

  console.log("New Global Data Generated!");
};
