import http from "k6/http";
import { check, sleep } from "k6";


// const baseUrl =
//   "https://custompricecalculator-services.herokuapp.com/api/shopify/product/theme/data";


export let options = {
  // vus:1000,
  // duration:'60s',
  // thresholds:{
  //     http_req_duration:['p(95)<1500']
  // },
  stages: [
    // { duration: '30s', target: 20 },
    // { duration: '1m30s', target: 10 },
    { duration: "2s", target:2200},
  ],
};
export default function () {
  
  // const payload = JSON.stringify({
  //   productId: "6844351283336",
  // });
  const params = {
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJ1c2VyIDEiLCJlbWFpbCI6Im9ua2FycGhwQGdtYWlsLmNvbSIsIm1vYmlsZSI6Ijc5ODcyMzE0NzAiLCJ1c2VyVHlwZSI6InVzZXIiLCJnZW5kZXIiOiJtYWxlIiwicHJvZmlsZSI6IiIsImFkZHJlc3MiOiJub2lkYSIsInBlcm1pc3Npb24iOnsicHJvZHVjdCI6eyJyZWFkIjp0cnVlLCJ3cml0ZSI6dHJ1ZSwidXBkYXRlIjpmYWxzZSwiZGVsZXRlIjpmYWxzZX0sInVzZXIiOnsicmVhZCI6dHJ1ZSwid3JpdGUiOnRydWUsInVwZGF0ZSI6dHJ1ZSwiZGVsZXRlIjp0cnVlfX0sImlzQWRtaW4iOiJmYWxzZSIsIl9pZCI6IjYyYTg1MTczYWM2NzBlOWIyMTA0NGQxMyJ9LCJpYXQiOjE2NTUyNjc5OTUsImV4cCI6MTY1NTI5Njc5NX0.9bha1FRX_14XX4cRbL9jJqIafotR_gTwsKbBlm7qXxw",
    },
  };
  const res = http.post(
    "https://ondc-hul.herokuapp.com/login/refresh",
    // payload,
    // params
  );
  check(res, { "status was 200": (r) => r.status == 200 });
  sleep(1);
}
