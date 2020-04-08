console.log('loaded');

import { DotcomShell } from '@carbon/ibmdotcom-vanilla';
import '@carbon/ibmdotcom-styles';
import Vue from 'vue';
import App from './App';

const dotcomShellProps = {
    masthead: {
      navigation: "default",
      platform: {
        name: "IBM Cloud",
        url: "https://www.ibm.com/cloud",
      },
      searchProps: {
        hasSearch: true,
      },
      hasNavigation: true,
      hasProfile: true,
    },
    footer: {
      footerType: "short",
    },
  };

const content = `
    <div id="vueApp">Render vue here</div>
`

async function init(){
  const template = await DotcomShell.getDotcomShellWithData({content, ...dotcomShellProps});
  const yourapp = document.getElementById('app');
  yourapp.innerHTML = template;
  DotcomShell.init(yourapp);
}

init().then(() => {
    console.log('initializing vue')
    
    new Vue(App).$mount('#vueApp')
});