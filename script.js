"use strict";

const imgContainer = document.querySelector(".images");

const wait = function (seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const image = document.createElement("img");
    image.src = imgPath;
    image.addEventListener("load", function () {
      imgContainer.append(image);
      resolve(image);
    });
    image.addEventListener("error", function () {
      reject(new Error("rejected promise"));
    });
  });
};

const loadNPause = async function () {
  try {
    const image1 = await createImage("img/img-1.jpg");
    console.log("Image 1 loaded successfully");
    await wait(5);
    image1.style.display = "none";
    const image2 = await createImage("img/img-2.jpg");
    await wait(5);
    image2.style.display = "none";
    // return await wait(2);
  } catch (err) {
    console.log(`${err}`);
  }
};

const loadAll = async function (imgArr) {
  const promises = imgArr.map((img) => createImage(img));
  try {
    const responses = await Promise.all(promises);
    responses.forEach((newImage) => newImage.classList.add("parallel"));
    console.log(responses);
  } catch (e) {
    console.error(e);
  }
};
loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
