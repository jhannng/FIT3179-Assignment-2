var visChart1 = "./json/net_population_changed_across_state.json";
var visChart2 = "./json/comparision_of_births_deaths_in_states.json";
var visChart3 = "./json/distribution_of_births_deaths_by_gender_in_states.json";
var visChart4 = "./json/ratios_of_births_deaths_by_ethinic_group.json";

vegaEmbed("#visChart1", visChart1)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

vegaEmbed("#visChart2", visChart2)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

vegaEmbed("#visChart3", visChart3)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);

vegaEmbed("#visChart4", visChart4)
  .then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error);
