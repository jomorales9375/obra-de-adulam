const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Check if each function exists before calling it
      if (typeof getCLS === 'function') {
        getCLS(onPerfEntry);
      }
      if (typeof getFID === 'function') {
        getFID(onPerfEntry);
      }
      if (typeof getFCP === 'function') {
        getFCP(onPerfEntry);
      }
      if (typeof getLCP === 'function') {
        getLCP(onPerfEntry);
      }
      if (typeof getTTFB === 'function') {
        getTTFB(onPerfEntry);
      }
    }).catch(error => {
      console.log('Web vitals not available:', error);
    });
  }
};

export default reportWebVitals;
