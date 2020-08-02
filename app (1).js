const javaData = data;

const body = d3.select("body");

function buildTable(data) {
  databody.html("");

  data.forEach((dataRow) => {
    const row = databody.append("tr");

    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

function handleClick() {
}

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(javaData);
