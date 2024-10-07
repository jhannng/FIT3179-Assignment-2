var geographical_distribution = "./json/geographical_distribution.json";

vegaEmbed("#geographical_distribution", geographical_distribution)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);
