require('bulma/bulma.sass');
require('./style.scss');
import Vue from 'vue';

import Test from './Test.vue';
Vue.component('test',Test);
var vue=new Vue({
   el:'#app',
   data:{
       hello:'Hello Vue'
   }
});
