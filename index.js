// // const stringToArray = (content) => {
// //     return content.trim().split('\n').map((item) => item.split(';'));
// // };

// // const OutputTheAverageRating = (content) => {
// //     const sums = [];
// //     for (let i = 0; i < content.length - 3; i += 1) {
// //         sums.push(content[i + 2] + content[i + 3])
// //     };
// //     console.log(Math.max(...sums))
// // }

// const convertObject = (content) => {
//   const [keys, ...values] = content.trim().split('\n');
//   const messengers = values.map((mesInfo) => {
//     const info = mesInfo.split(';');
//     const obj = info.reduce((acc, value, index) => {
//       if (index > 1) { // Пропускаем первые два ключа (name и developer)
//         if (index < 4) { // Добавляем рейтинги из разных источников в виде объекта
//           acc.downloads = acc.downloads || {};
//           acc.downloads[keys.split(';')[index]] = parseFloat(value) || value;
//         } else { // Добавляем остальные значения как есть
//           acc[keys.split(';')[index]] = parseInt(value, 10) || value;
//         }
//       } else {
//         acc[keys.split(';')[index]] = value; // Добавляем первые два ключа без изменений
//       }
//       return acc;
//     }, {});
//     return obj;
//   });
//   return messengers;
// };

// const maximumAverageRating = (obj) => {
//   const playMarketRating = obj.downloads.playmarket_rating;
//   const appStoreRating = obj.downloads.appstore_rating;
//   return (playMarketRating + appStoreRating);
// };

// const findAppWithHighestRating = (arrayContent) => {
//   let highestRating = -Infinity;
//   let highestRatedApp = null;

//   arrayContent.forEach((app) => {
//     const avgRating = maximumAverageRating(app);
//     if (avgRating > highestRating) {
//       highestRating = avgRating;
//       highestRatedApp = app;
//     }
//   });

//   return highestRatedApp;
// };

// const findDownloadCountsInIndia = (arrayContent) => {
//   let maxDownloads = -Infinity;
//   let minDownloads = Infinity;

//   arrayContent.forEach((app) => {
//     const downloadsInIndia = app.downloads_in_India;
//     if (downloadsInIndia > maxDownloads) {
//       maxDownloads = downloadsInIndia;
//     }
//     if (downloadsInIndia < minDownloads) {
//       minDownloads = downloadsInIndia;
//     }
//   });

//   return { maxDownloads, minDownloads };
// };

// const findTopAppsInAustralia = (arrayContent) => {
//   const appsInAustralia = arrayContent.filter((app) => app.downloads_in_Australia > 0);

//   // Сортируем приложения по количеству загрузок в Австралии в убывающем порядке
//   appsInAustralia.sort((a, b) => b.downloads_in_Australia - a.downloads_in_Australia);

//   // Выбираем топ-3 приложений
//   const topApps = appsInAustralia.slice(0, 3);

//   // Возвращаем только имена топ-приложений
//   return topApps.map((app) => app.name);
// };

// const calculateAverageDownloads = (app) => {
//   // Суммируем количество скачиваний по всем странам
//   const totalDown = Object.values(app.downloads).reduce((total, downloads) => total + downloads, 0);
//   // Рассчитываем среднее количество скачиваний
//   const averageDownloads = totalDown / Object.keys(app.downloads).length;
//   return averageDownloads;
// };

// const sortAppsByAverageDownloads = (arrayContent) => {
//   // Сортируем приложения по среднему количеству скачиваний
//   arrayContent.sort((a, b) => calculateAverageDownloads(a) - calculateAverageDownloads(b));
//   // Возвращаем отсортированный массив приложений
//   return arrayContent;
// };

// const countAppsByOwner = (arrayContent) => {
//   const appCountByOwner = {};

//   // Подсчитываем количество приложений для каждой компании
//   arrayContent.forEach((app) => {
//     const owner = app.developer;
//     appCountByOwner[owner] = (appCountByOwner[owner] || 0) + 1;
//   });

//   return appCountByOwner;
// };

// const findOwnersWithMultipleApps = (arrayContent) => {
//   const aCByOwner = countAppsByOwner(arrayContent);

//   // Фильтруем компании с двумя и более приложениями
//   const ownersWithMultipleApps = Object.keys(aCByOwner).filter((owner) => aCByOwner[owner] >= 2);

//   return ownersWithMultipleApps;
// };
// const normalizeData = (content) => content.trim().split('\n');

// // task 1
// const tableParsing = (content) => {
//   const arrayContent = convertObject(content);
//   const TopApp = findAppWithHighestRating(arrayContent);
//   console.log(`General top messenger: ${TopApp.name}, Owner: ${TopApp.developer}`); // +

//   const { maxDownloads, minDownloads } = findDownloadCountsInIndia(arrayContent);
//   console.log(`Download count: Max count: ${maxDownloads}, Min count: ${minDownloads}`); // +

//   const topAppsInAustralia = findTopAppsInAustralia(arrayContent);
//   console.log(`Top-3 Australia: ${topAppsInAustralia.join(', ')}`);

//   const sortedApps = sortAppsByAverageDownloads(arrayContent);
//   const appNames = sortedApps.map((app) => app.name);
//   console.log(`Top downloads: ${appNames.join(', ')}`);

//   const ownersWithMultipleApps = findOwnersWithMultipleApps(arrayContent);
//   console.log(`Top owner: ${ownersWithMultipleApps.join(', ')}`); // +
// };

// // task 2
// const candidateAssessment = (content) => {
  
// };

// // task 3
// const actorRating = (/* content */) => {

// };

// export { tableParsing, candidateAssessment, actorRating };
