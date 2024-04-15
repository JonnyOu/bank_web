/*
 * @Author: JonnyOu 
 * @Date: 2024-04-09 19:04:32 
 * @Last Modified by: JonnyOu
 * @Last Modified time: 2024-04-10 14:28:37
 * @Description:  加密函数
 */

import JSEncrypt from 'jsencrypt';
import CryptoJS from 'crypto-js';

const privateKey = 'MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAKLaX2eKNguIlP3VHCYGODyo+anatLTk5PztD38HFUkLSSueoQ6/urLH0zbNJl1bRpJ5kTr/hMZpiESKQwlLoPLjC0IND+SWDLEpkh9Ja2kLy+XqXervqyycaQ1h2Cmr037O8AtRwlvoCGB3YmC0m3SpbXxIHmg4iUqKB+vZzu6NAgMBAAECgYAFVSU+nLX8VrKaRTowvI9m3RmfyDuWmNAuwAx72l2GEMqKlR0tAHY6mHSAHOOetvhun3B0AB326Um/BNABI+rXO9bVhJdk4Bb/f9TxA9wi+FniLwdwM2QFTd8R2hp8V0PHi11r5PNCJtWPagluM7LTw4rGYvRlFXuzx0phv9NsQQJBAMB8lzI8fWP3CFGVK19iioxHayi7EvyFUxRRuvOPoYkXGQWFdop6N3VwlBRdGDh0DYyxobCv5PaOBCPo4HBS7skCQQDYlp4KMfIc3aQ2LQutTAz2tRY0M4RYwgn6FuC5oqnOQ1bbrAqYJLNZGVHNkRCFkxFqr7HTdiSN/vEbL9wl00+lAkBYwttB+izkRQ0b+cqXYKx9BY3/qUyXD7AA5bNtDyWxPup15laEgtlCGZjfTxKVLcb1ww/Jl0LhAxobqQ6eHVApAkBQ8Rjm3nuI5hv0UylF/mHp4QsHPyl6silgWSRqu6uR9gCD3+ulqDGOXrP/ivMNuESOBlMCn+hRWLFqY5x2Vl4xAkANYh2QyDnTb1+H2dRsBOjH7HCQrXVj5ouz5a7mougM8EbQdxnHzkRegJ/LmZ7sXDCX5Pi0YrbXy71ebrl155cU';

/**
 * 登录加密 
 * */ 
const loginEncrypt = (publicKey, password) => {
  // 生成16进制的AES秘钥AESEncryptKey（16位） 和 随机数randomStr(8位)
  const AESEncryptKey = getCommKeys(16);
  const randomStr = getCommKeys(8);
  // RSA加密
  const rsaEncryptedKey = rsaEncrypt(publicKey, AESEncryptKey + randomStr);
  // AES加密
  const aesEncryptedKey = aesEncrypt(password, AESEncryptKey);
  // 使用!@#拼接rsaEncryptedKey和aesEncryptedKey，得到最终密文cipherText
  const cihperText = `${rsaEncryptedKey}|@#${aesEncryptedKey}`;
  return cihperText;
};

/**
 * 登录解密
 */
const loginDecrypt = (cihperTextRes) => {
  // 以|@#分割
  const chiperText = cihperTextRes.split('|@#');
  // rsa密文
  const rsaEncryptedKey = chiperText[0];
  // aes密文
  const aesEncryptedKey = chiperText[1];
  // 解密rsa获取AES加密因子
  const rsaDecrypted = rsaDecrypt(privateKey, rsaEncryptedKey);
  const aesKey = rsaDecrypted.slice(0, 16);
  // 解密aes获取最终密码
  const res = aesDecrypt(aesEncryptedKey, aesKey);
  return res;
};

/**
 * 获取随机数
 * @param {*} len  长度
 */
const getCommKeys = (len) => {
  const key = CryptoJS.lib.WordArray.random(len / 2).toString();
  return key;
};

/**
 * rsa加密
 * @param {*} publicKeyData 秘钥
 * @param {*} data 
 */
const rsaEncrypt = (publicKey, data) => {
  const rsaEncryptKey = new JSEncrypt();
  rsaEncryptKey.setKey(publicKey);
  const res = rsaEncryptKey.encrypt(data);
  return res;
};

/**
 * rsa 解密
 * @param {*} privateKey 
 * @param {*} data 
 */
const rsaDecrypt = (privateKey, data) => {
  const rsaDecryptKey = new JSEncrypt();
  rsaDecryptKey.setKey(privateKey);
  const res = rsaDecryptKey.decrypt(data);
  return res;
};

/**
 * aes加密
 * @param {*} data 密码
 * @param {*} aesKey aes秘钥
 */
const aesEncrypt = (password, AESEncryptKey) => {
  AESEncryptKey = CryptoJS.enc.Utf8.parse(AESEncryptKey);
  const aesEncryptKey = CryptoJS.AES.encrypt(password, AESEncryptKey, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(aesEncryptKey.ciphertext.toString()));
};

/**
 * aes解密
 * @param {*} data 
 * @param {*} AESEncryptKey 
 */
const aesDecrypt = (data, AESEncryptKey) => {
  AESEncryptKey = CryptoJS.enc.Utf8.parse(AESEncryptKey);
  const decrypt = CryptoJS.AES.decrypt(data, AESEncryptKey, {  
    mode: CryptoJS.mode.ECB, 
    padding: CryptoJS.pad.Pkcs7 
  });
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr;
};

const encrypt = {
  loginEncrypt,
  loginDecrypt
}; 

export default encrypt;