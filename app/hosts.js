var Hosts = [
  {
    host: 'ga-us-ping.vultr.com',
    flag: 'flag_us.png',
    country: 'UNITED STATES',
    name: '亚特兰大',
    key: 'Atlanta',
  },
  {
    host: 'il-us-ping.vultr.com',
    flag: 'flag_us.png',
    country: 'UNITED STATES',
    name: '芝加哥',
    key: 'Chicago',
  },
  {
    host: 'tx-us-ping.vultr.com',
    flag: 'flag_us.png',
    country: 'UNITED STATES',
    name: '达拉斯',
    key: 'Dallas',
  },
  {
    host: 'lax-ca-us-ping.vultr.com',
    flag: 'flag_us.png',
    country: 'UNITED STATES',
    name: '洛杉矶',
    key: 'Los Angeles',
  },
  {
    host: 'fl-us-ping.vultr.com',
    flag: 'flag_us.png',
    country: 'UNITED STATES',
    name: '迈阿密',
    key: 'Miami',
  },
  {
    host: 'nj-us-ping.vultr.com',
    flag: 'flag_us.png',
    country: 'UNITED STATES',
    name: '新泽西',
    key: 'New Jersey',
  },
  {
    host: 'wa-us-ping.vultr.com',
    flag: 'flag_us.png',
    country: 'UNITED STATES',
    name: '西雅图',
    key: 'Seattle',
  },
  {
    host: 'sjo-ca-us-ping.vultr.com',
    flag: 'flag_us.png',
    country: 'UNITED STATES',
    name: '硅谷',
    key: 'Silicon Valley',
  },
  {
    host: 'sgp-ping.vultr.com',
    flag: 'flag_sg.png',
    country: 'SINGAPORE',
    name: '新加坡',
    key: 'Singapore',
  },
  {
    host: 'ams-nl-ping.vultr.com',
    flag: 'flag_nl.png',
    country: 'NETHERLANDS',
    name: '阿姆斯特丹',
    key: 'Amsterdam',
  },
  {
    host: 'hnd-jp-ping.vultr.com',
    flag: 'flag_jp.png',
    country: 'JAPAN',
    name: '东京',
    key: 'Tokyo',
  },
  {
    host: 'lon-gb-ping.vultr.com',
    flag: 'flag_gb.png',
    country: 'UNITED KINGDOM',
    name: '伦敦',
    key: 'London',
  },
  {
    host: 'par-fr-ping.vultr.com',
    flag: 'flag_fr.png',
    country: 'FRANCE',
    name: '巴黎',
    key: 'Paris',
  },
  {
    host: 'fra-de-ping.vultr.com',
    flag: 'flag_de.png',
    country: 'GERMANY',
    name: '法兰克福',
    key: 'Frankfurt',
  },
  {
    host: 'syd-au-ping.vultr.com',
    country: 'AUSTRALIA',
    flag: 'flag_au.png',
    name: '悉尼',
    key: 'Sydney',
  },
];

const images = {
  'flag_au.png': require('./img/flag_au.png'),
  'flag_gb.png': require('./img/flag_gb.png'),
  'flag_fr.png': require('./img/flag_fr.png'),
  'flag_sg.png': require('./img/flag_sg.png'),
  'flag_de.png': require('./img/flag_de.png'),
  'flag_jp.png': require('./img/flag_jp.png'),
  'flag_nl.png': require('./img/flag_nl.png'),
  'flag_us.png': require('./img/flag_us.png'),
};

export default Hosts.reduce((hosts, host) => {
  host.flagImage = images[host.flag];
  host.package = host.host + '/vultr.com.100MB.bin';
  host.status = 'unkown';
  host.checkedStatus = [];
  host.downloadSpeed = null;
  hosts[host.key] = host;
  return hosts;
}, {});
