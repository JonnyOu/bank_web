import network from './network';
import apiConfig from './apiConfig';
import routerConfig from './routerConfig';

// 公钥
const publicKeyArr = [
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCi2l9nijYLiJT91RwmBjg8qPmp2rS05OT87Q9/BxVJC0krnqEOv7qyx9M2zSZdW0aSeZE6/4TGaYhEikMJS6Dy4wtCDQ/klgyxKZIfSWtpC8vl6l3q76ssnGkNYdgpq9N+zvALUcJb6Ahgd2JgtJt0qW18SB5oOIlKigfr2c7ujQIDAQAB',
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDaeSD9OGxoQ0Cn6vNMROv/FRy5bM5k62RHl3AcWvUpRC+BoFmW4f/7BEAqPaHP/H/jmdc1QhcAmkp7Y+Eb2muqarNlhzH2B3umvhGzfwhm81T40LmqA8i5RqMf5KTNyubtUS0HJm3zaVnEg7SvSgs7w7K57wQCZ5Jghkg058L0bwIDAQAB',
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC7Zp6qhojoH9WX1MGCXrECM1NOgCbNdi/R5b8EHHSoYdnK10s99xR8haPKgwLkbbhgo0XPtlE/78beRPEH8anvexSNWGOfzFc0htuYIYL1dP819P76tCyCqPkKf8+NM788AKnKkc3lJXSnqPAR4X+Dbhxxl1H2FCCH0fSEtgfAHwIDAQAB'
];

export default {
  publicKeyArr,
  ...network,
  ...apiConfig,
  ...routerConfig
};