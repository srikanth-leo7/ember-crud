import DS from 'ember-data';
import { notEmpty } from '@ember/object/computed';

export default DS.Model.extend({
  name: DS.attr('string'),
  designation: DS.attr('string'),
  practice: DS.attr('string'),

  isValid: notEmpty('name')
});
