const config = {
  apiUrl: {
    myFleetAPI: "http://localhost:8085/",
  },
};
export async function getUserTest() {
  return fetch(config.apiUrl.myFleetAPI, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + "GcGs5OF5TQ50sbjXRXDDtG8APTSa0s",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((reject) => console.log(reject));
}
