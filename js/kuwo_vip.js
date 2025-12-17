let body = $response.body;

try {
  let obj = JSON.parse(body);

  // 多层兜底
  if (!obj.data) obj.data = {};

  obj.data.isVip = 1;
  obj.data.vip = 1;
  obj.data.vipLevel = 9;
  obj.data.vipType = "svip";
  obj.data.expire = "2099-12-31";
  obj.data.vipExpire = 4102444800;

  // 一些版本读这里
  obj.isVip = 1;
  obj.vip = 1;

  body = JSON.stringify(obj);
} catch (e) {}

$done({ body });