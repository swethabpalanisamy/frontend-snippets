function loadSkeleton(skeletonLoader, container, skeletonList = []) {
  const children = Array.from(container.children);
  children.forEach((child) => {
    const { width, height } = child.getBoundingClientRect();
    console.log(child.getBoundingClientRect());
    const skeletoncard = document.createElement("div");
    skeletoncard.className = "skeleton-card";
    skeletoncard.style.width = `${width}px`;
    skeletoncard.style.height = `${height}px`;
    skeletonList.push(skeletoncard);
    skeletonLoader.appendChild(skeletoncard);
    // if (child.children.length > 0) {
    //   console.log(child.children, "child.children");
    //   Array.from(child.children).forEach((a) => {
    //     loadSkeleton(skeletonLoader, a, skeletonList);
    //   });
    // }
  });
  return skeletonList;
}
const skeletonLoader = document.querySelector(".skeleton-wrapper");
const container = document.getElementById("container");
const skeletonList = loadSkeleton(skeletonLoader, container);
setTimeout(() => {
  skeletonList.forEach((s) => s.remove());
  container.style.visibility = "visible";
  container.style.position = "static";
}, 2000);
