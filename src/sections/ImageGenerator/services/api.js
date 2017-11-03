import { default as request } from "superagent";

export default class ImgGenApi {
  static gen(img) {
    return request.post('http://rn1-running-pets.appspot.com/image-generation')
      .attach('image', img)
      .then(res =>  res.files);
  }
}