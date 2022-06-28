import http from "k6/http";
import { check, sleep } from "k6";


                                                                                                                                                                export const options = {
  // vus:100,
  // duration:'60s',
  // thresholds:{
  //     http_req_duration:['p(95)<100']
  // },
  stages: [
    { duration: "30s", target: 20 },
    { duration: "1m30s", target: 10 },
    { duration: "60s", target: 100 },
  ],
};

export default function () {
  const res = http.get(
    "https://custompricecalculator-services.herokuapp.com/api/shopify/product-all"
  );
  check(res, { "status was 200": (r) => r.status == 200 });
  sleep(1);
}
