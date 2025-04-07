const container = document.getElementById("container");
const loading = document.getElementById("loading");
let isLoading = false;
async function loadingCall(page) {
  isLoading = true;
  loading.style.display = "block";
  return new Promise((resolve) => {
    setTimeout(() => {
      const newItems = Array.from({ length: 10 }, (_, i) => `Page ${i + 1}`);
      resolve(newItems);
    }, 1000);
  });
}
function renderCall(arr) {
  // console.log("renderCall")
  arr.forEach((i) => {
    const p = document.createElement("p");
    p.textContent = i;
    container.appendChild(p);
  });
  isLoading = false;
  loading.style.display = "none";
}
loadingCall().then(renderCall);
window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  // console.log(scrollTop,clientHeight,scrollHeight);
  if (!isLoading && scrollTop + clientHeight >= scrollHeight - 10) {
    loadingCall().then(renderCall);
  }
});
