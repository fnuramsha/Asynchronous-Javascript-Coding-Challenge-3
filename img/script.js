"use strict";

const images = document.querySelector(".images");

const loadNPause = async function (imgPath) {
  try {
    return new Promise((resolve, reject) => {
      const image = document.createElement("img");
      image.src = imgPath;
      images.addEventListener("load", function () {
        images.append(image);
        resolve(images);
      });
      images.addEventListener("error", function () {
        reject(new Error("No image found"));
      });
    });
  } catch (err) {
    console.log(`${err}`);
  }
};
loadNPause("img/img-1.jpg");
