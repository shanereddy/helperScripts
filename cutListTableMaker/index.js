const ObjectsToCsv = require("objects-to-csv");

async function generateTableFile() {
  const cutList = require("./cutlist");

  data = [];

  cutList.forEach((cut) => {
    if (cut.height) {
      data.push({
        "length (mm)": cut.height,
        "width (mm)": cut.width,
        quantity: cut.count,
        name: cut.label,
        "edge_Top (width)": edgeNamer(cut.edge.top),
        "edge_Left (length)": edgeNamer(cut.edge.left),
        "edge_Right (length)": edgeNamer(cut.edge.right),
        "edge_Bottom (width)": edgeNamer(cut.edge.bottom),
      });
    }
  });

  const csv = new ObjectsToCsv(data);
  // console.log(await csv.toString());
  await csv.toDisk("./cutlist.csv");
}

function edgeNamer(edge) {
  return edge ? edge : "";
}

generateTableFile();
