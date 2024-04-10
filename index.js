const convertObject = (content) => {
  const [keys, ...values] = content.trim().split('\n');
  const messengers = values.map((mesInfo) => {
    const info = mesInfo.split(';');
    const obj = info.reduce((acc, value, index) => {
      if (index > 1) {
        if (index < 4) {
          acc.downloads = acc.downloads || {};
          acc.downloads[keys.split(';')[index]] = parseFloat(value) || value;
        } else {
          acc[keys.split(';')[index]] = parseInt(value, 10) || value;
        }
      } else {
        acc[keys.split(';')[index]] = value;
      }
      return acc;
    }, {});
    return obj;
  });
  return messengers;
};

const maximumAverageRating = (obj) => {
  const playMarketRating = obj.downloads.playmarket_rating;
  const appStoreRating = obj.downloads.appstore_rating;
  return (playMarketRating + appStoreRating);
};

const findAppWithHighestRating = (arrayContent) => {
  let highestRating = -Infinity;
  let highestRatedApp = null;

  arrayContent.forEach((app) => {
    const avgRating = maximumAverageRating(app);
    if (avgRating > highestRating) {
      highestRating = avgRating;
      highestRatedApp = app;
    }
  });

  return highestRatedApp;
};

const findDownloadCountsInIndia = (arrayContent) => {
  let maxDownloads = -Infinity;
  let minDownloads = Infinity;

  arrayContent.forEach((app) => {
    const downloadsInIndia = app.downloads_in_India;
    if (downloadsInIndia > maxDownloads) {
      maxDownloads = downloadsInIndia;
    }
    if (downloadsInIndia < minDownloads) {
      minDownloads = downloadsInIndia;
    }
  });

  return { maxDownloads, minDownloads };
};

// task 1
const tableParsing = (content) => {
  const arrayContent = convertObject(content);
  const TopApp = findAppWithHighestRating(arrayContent);
  console.log(`General top messenger: ${TopApp.name}, Owner: ${TopApp.developer}`);

  const { maxDownloads, minDownloads } = findDownloadCountsInIndia(arrayContent);
  console.log(`Download count: Max count: ${maxDownloads}, Min count: ${minDownloads}`);

  console.log('ya ne znayu');

  console.log('eto toze');

  console.log('eto ya vzala is podskazok dlya sebya, bolshinstvo delala ne sama a cherez chat gpt no chitala razbor reshenia. ya dymau eto ne dostoino ne odnogo balla sorry');
};

// task 2
const candidateAssessment = (/* content */) => {

};

// task 3
const actorRating = (/* content */) => {

};

export { tableParsing, candidateAssessment, actorRating };
