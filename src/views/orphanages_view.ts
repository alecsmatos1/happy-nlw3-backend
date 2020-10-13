import Orphanage from '../models/Orphanage';
import images_view, { ImagesRenderData } from './images_view';

interface renderData {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  images: ImagesRenderData[];
}

export default {
  render(orphanage: Orphanage): renderData {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: images_view.renderMany(orphanage.images),
    };
  },
  renderMany(orphanages: Orphanage[]): renderData[] {
    return orphanages.map(orphanage => this.render(orphanage));
  },
};
