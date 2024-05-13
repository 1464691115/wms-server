export default {
  domain:
    process.env.NODE_ENV !== 'development'
      ? 'http://82.156.13.216:6002/'
      : 'http://localhost:6002/',
  domainName: '通用 wms 系统',
};
