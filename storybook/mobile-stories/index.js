import {getStorybookUI, configure} from '@storybook/react-native';

import '../rn-addons';

configure(() => {
    // require('./Button');
    // require('./Card');
    // require('./CountryPicker');
    // require('./Error');
    // require('./Flag');
    // require('./Input');
    // require('./ListItem');
    require('./LoaderList');
    // require('./Modal');
    // require('./Picture');
    // require('./Text');
}, module);

const StorybookUIRoot = getStorybookUI({
    asyncStorage: null
});

export default StorybookUIRoot;