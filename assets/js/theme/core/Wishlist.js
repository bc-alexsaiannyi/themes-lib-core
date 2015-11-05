import $ from 'jquery';
import PageManager from '../../PageManager';
import FormValidator from '../utils/FormValidator';

export default class Wishlist extends PageManager {
  loaded() {
    new FormValidator(this.context).initGlobal();
  }
}
