import Image from '../models/Image';

export interface ImagesRenderData {
  id: string;
  url: string;
}

export default {
  render(image: Image): ImagesRenderData {
    return {
      id: image.id,
      url: `http://localhost:3333/uploads/${image.path}`,
    };
  },
  renderMany(images: Image[]): ImagesRenderData[] {
    return images.map(image => this.render(image));
  },
};
