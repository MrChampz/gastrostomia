import 'bootstrap/dist/css/bootstrap.min.css'

export const onRouteUpdate = (apiCallbackContext, pluginOptions) => {
  const imageWrappers = document.querySelectorAll(`.gatsby-resp-image-wrapper`);

  for (let i = 0; i < imageWrappers.length; i++) {
    const imageWrapper = imageWrappers[i];

    const imageElement = imageWrapper.querySelector(`.gatsby-resp-image-image`);

    const onImageComplete = () => {
      imageElement.style.boxShadow = `none`;
    }

    imageElement.addEventListener(`load`, onImageComplete);

    if (imageElement.complete) {
      onImageComplete();
    }
  }
}