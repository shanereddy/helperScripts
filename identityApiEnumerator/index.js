const axios = require("axios").default;
const ObjectsToCsv = require("objects-to-csv");

const config = require("./config/api.json");

async function run() {
  try {
    console.log(config.api);
    const client = axios.create({
      baseURL: config.api,
    });

    const fname = "sh";
    const sname = "ra";
    const response = await client.get(
      `${config.defaultParams}&fname=${fname}&sname=${sname}`
    );
    console.log("response: ", response.data.data);
    data = response.data.data;

    const csv = new ObjectsToCsv(data);
    await csv.toDisk("./identities.csv");
  } catch (error) {
    console.error(error);
  }
}

run();
