export default function loadBalancer(chinaDownload, USDownload) {
  Promise.race([chinaDownload, USDownload])
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.log(error);
    });
}
