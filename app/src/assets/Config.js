export default {
  domain:
    process.env.NODE_ENV !== 'development'
      ? 'http://wmsapi.lkstree.cloud'
      : window.location.origin + '/basic-api',
  domainName: '通用 wms 系统',
};
