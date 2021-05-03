const list: string[] = [
    'ios-add',
    'md-add',
    'ios-add-circle',
    'ios-add-circle-outline',
    'md-add-circle',
    'ios-alarm',
    'md-alarm',
    'ios-albums',
    'md-albums',
    'ios-alert',
    'ios-alert-outline',
    'md-alert',
    'ios-american-football',
    'md-american-football',
    'ios-analytics',
    'md-analytics',
    'logo-android',
    'logo-angular',
    'ios-aperture',
    'md-aperture',
    'logo-apple',
    'ios-apps',
    'md-apps',
    'ios-appstore',
    'md-appstore',
    'ios-archive',
    'md-archive',
    'ios-arrow-back',
    'md-arrow-back',
    'ios-arrow-down',
    'md-arrow-back',
    'ios-arrow-dropdown',
    'md-arrow-dropdown',
    'md-arrow-dropdown-circle',
    'ios-arrow-dropdown-circle',
    'ios-arrow-dropleft',
    'md-arrow-dropleft',
    'ios-arrow-dropleft-circle',
    'md-arrow-dropleft-circle',
    'ios-arrow-dropright',
    'md-arrow-dropright',
    'ios-arrow-dropright-circle',
    'md-arrow-dropright-circle',
    'ios-arrow-dropup',
    'md-arrow-dropup',
    'ios-arrow-dropup-circle',
    'md-arrow-dropup-circle',
    'ios-arrow-forward',
    'md-arrow-forward',
    'ios-arrow-round-back',
    'md-arrow-round-back',
    'md-arrow-forward',
    'ios-arrow-round-down',
    'md-arrow-round-down',
    'ios-arrow-round-forward',
    'md-arrow-round-forward',
    'ios-arrow-round-up',
    'md-arrow-round-up',
    'ios-arrow-up',
    'md-arrow-up',
    'ios-at',
    'md-at',
    'ios-attach',
    'md-attach',
    'ios-backspace',
    'md-backspace',
    'ios-barcode',
    'md-barcode',
    'ios-baseball',
    'md-baseball',
    'ios-basket',
    'md-basket',
    'ios-battery-charging',
    'md-battery-charging',
    'ios-battery-dead',
    'md-battery-dead',
    'ios-battery-full',
    'md-battery-full',
    'ios-beaker',
    'md-beaker',
    'ios-beer',
    'md-beer',
    'ios-bicycle',
    'md-bicycle',
    'logo-bitcoin',
    'ios-bluetooth',
    'md-bluetooth',
    'ios-boat',
    'md-boat',
    'ios-body',
    'md-body',
    'ios-bonfire',
    'md-bonfire',
    'ios-book',
    'md-book',
    'ios-bookmark',
    'md-bookmark',
    'ios-bookmarks',
    'md-bookmarks',
    'ios-bowtie',
    'md-bowtie',
    'ios-briefcase',
    'md-briefcase',
    'ios-browsers',
    'md-browsers',
    'ios-brush',
    'md-brush',
    'logo-buffer',
    'ios-bug',
    'md-bug',
    'ios-build',
    'md-build',
    'ios-bulb',
    'md-bulb',
    'ios-bus',
    'md-bus',
    'ios-cafe',
    'md-cafe',
    'ios-calculator',
    'md-calculator',
    'ios-calendar',
    'md-calendar',
    'ios-call',
    'md-call',
    'ios-camera',
    'md-camera',
    'ios-car',
    'md-car',
    'ios-card',
    'md-card',
    'ios-cart',
    'md-cart',
    'ios-cash',
    'md-cash',
    'ios-chatboxes',
    'md-chatboxes',
    'ios-chatbubbles',
    'md-chatbubbles',
    'ios-checkbox',
    'md-checkbox',
    'ios-checkmark',
    'md-checkmark',
    'ios-checkmark-circle',
    'md-checkmark-circle',
    'logo-chrome',
    'ios-clipboard',
    'md-clipboard',
    'ios-clock',
    'md-clock',
    'ios-close',
    'md-close',
    'ios-close-circle',
    'md-close-circle',
    'logo-closed-captioning',
    'ios-cloud',
    'ios-cloud-outline',
    'md-cloud',
    'md-cloud-outline',
    'ios-cloud-circle',
    'md-cloud-circle',
    'ios-cloud-done',
    'md-cloud-done',
    'ios-cloud-download',
    'md-cloud-download',
    'ios-cloud-upload',
    'md-cloud-upload',
    'ios-cloudy',
    'ios-cloudy',
    'md-cloudy',
    'ios-cloudy-night',
    'md-cloudy-night',
    'ios-code',
    'md-code',
    'ios-code-download',
    'md-code-download',
    'ios-code-working',
    'md-code-working',
    'logo-codepen',
    'ios-cog',
    'md-cog',
    'ios-color-fill',
    'md-color-fill',
    'ios-color-filter',
    'md-color-filter',
    'ios-color-palette',
    'md-color-palette',
    'ios-color-wand',
    'md-color-wand',
    'ios-compass',
    'md-compass',
    'ios-construct',
    'md-construct',
    'ios-contact',
    'md-contact',
    'ios-contacts',
    'md-contacts',
    'ios-contract',
    'md-contract',
    'ios-contrast',
    'md-contrast',
    'ios-copy',
    'md-copy',
    'ios-create',
    'md-create',
    'ios-crop',
    'md-crop',
    'logo-css',
    'ios-cube',
    'md-cube',
    'ios-cut',
    'md-cut',
    'logo-designernews',
    'ios-desktop',
    'md-desktop',
    'ios-disc',
    'md-disc',
    'ios-document',
    'md-document',
    'ios-done-all',
    'md-done-all',
    'ios-download',
    'md-download',
    'logo-dribbble',
    'logo-dropbox',
    'ios-easel',
    'md-easel',
    'ios-egg',
    'md-egg',
    'logo-euro',
    'ios-exit',
    'md-exit',
    'ios-expand',
    'md-expand',
    'ios-eye',
    'md-eye',
    'ios-eye-off',
    'md-eye-off',
    'logo-facebook',
    'ios-fastforward',
    'md-fastforward',
    'ios-female',
    'md-female',
    'ios-filing',
    'md-filing',
    'ios-film',
    'md-film',
    'ios-finger-print',
    'md-finger-print',
    'ios-flag',
    'md-flag',
    'ios-flame',
    'md-flame',
    'ios-flash',
    'md-flash',
    'ios-flask',
    'md-flask',
    'ios-flower',
    'md-flower',
    'ios-folder',
    'md-folder',
    'ios-folder-open',
    'md-folder-open',
    'ios-football',
    'md-football',
    'logo-foursquare',
    'logo-freebsd-devil',
    'ios-funnel',
    'md-funnel',
    'logo-game-controller-a',
    'logo-game-controller-b',
    'ios-git-branch',
    'md-git-branch',
    'ios-git-commit',
    'md-git-commit',
    'ios-git-compare',
    'md-git-compare',
    'ios-git-merge',
    'md-git-merge',
    'ios-git-network',
    'md-git-network',
    'ios-git-pull-request',
    'md-git-pull-request',
    'logo-github',
    'ios-glasses',
    'md-glasses',
    'ios-globe',
    'md-globe',
    'logo-google',
    'logo-googleplus',
    'ios-grid',
    'md-grid',
    'logo-hackernews',
    'ios-hammer',
    'md-hammer',
    'ios-hand',
    'md-hand',
    'ios-happy',
    'md-happy',
    'ios-headset',
    'md-headset',
    'ios-heart',
    'md-heart',
    'ios-help',
    'md-help',
    'ios-help-buoy',
    'md-help-buoy',
    'ios-help-circle',
    'ios-help-circle-outline',
    'md-help-circle',
    'md-help-circle-outline',
    'ios-home',
    'md-home',
    'ios-ice-cream',
    'md-ice-cream',
    'ios-image',
    'md-image',
    'ios-images',
    'md-images',
    'ios-infinite',
    'md-infinite',
    'ios-information',
    'md-information',
    'ios-information-circle',
    'md-information-circle',
    'ios-information-circle-outline',
    'md-information-circle-outline',
    'logo-javascript',
    'ios-jet',
    'md-jet',
    'ios-key',
    'md-key',
    'ios-keypad',
    'md-keypad',
    'ios-laptop',
    'md-laptop',
    'ios-leaf',
    'md-leaf',
    'ios-link',
    'md-link',
    'logo-linkedin',
    'ios-list',
    'md-list',
    'ios-list-box',
    'md-list-box',
    'ios-locate',
    'md-locate',
    'ios-lock',
    'md-lock',
    'ios-log-in',
    'md-log-in',
    'ios-log-out',
    'md-log-out',
    'ios-magnet',
    'md-magnet',
    'ios-mail',
    'md-mail',
    'ios-mail-open',
    'md-mail-open',
    'ios-male',
    'md-male',
    'ios-man',
    'md-man',
    'ios-map',
    'md-map',
    'logo-markdown',
    'ios-medal',
    'md-medal',
    'ios-medical',
    'md-medical',
    'ios-medkit',
    'md-medkit',
    'ios-megaphone',
    'md-megaphone',
    'ios-menu',
    'md-menu',
    'ios-mic',
    'md-mic',
    'ios-mic-off',
    'md-mic-off',
    'ios-microphone',
    'md-microphone',
    'ios-moon',
    'md-moon',
    'ios-more',
    'md-more',
    'ios-move',
    'md-move',
    'ios-musical-note',
    'md-musical-note',
    'ios-musical-notes',
    'md-musical-notes',
    'ios-navigate',
    'md-navigate',
    'logo-nodejs',
    'ios-notifications',
    'md-notifications',
    'ios-nuclear',
    'md-nuclear',
    'ios-nutrition',
    'md-nutrition',
    'logo-octocat',
    'ios-open',
    'md-open',
    'ios-options',
    'md-options',
    'ios-outlet',
    'md-outlet',
    'ios-paper',
    'md-paper',
    'ios-paper-plane',
    'md-paper-plane',
    'ios-partly-sunny',
    'md-partly-sunny',
    'ios-pause',
    'md-pause',
    'ios-paw',
    'md-paw',
    'ios-people',
    'md-people',
    'ios-person',
    'md-person',
    'ios-person-add',
    'md-person-add',
    'ios-phone-landscape',
    'md-phone-landscape',
    'ios-phone-portrait',
    'md-phone-portrait',
    'ios-photos',
    'md-photos',
    'ios-pie',
    'md-pie',
    'ios-pin',
    'md-pin',
    'ios-pint',
    'md-pint',
    'logo-pinterest',
    'ios-pizza',
    'md-pizza',
    'ios-paper-plane',
    'md-paper-plane',
    'ios-planet',
    'md-planet',
    'ios-play',
    'md-play',
    'logo-playstation',
    'ios-podium',
    'md-podium',
    'ios-power',
    'md-power',
    'ios-pricetag',
    'md-pricetag',
    'ios-pricetags',
    'md-pricetags',
    'ios-print',
    'md-print',
    'ios-pulse',
    'md-pulse',
    'logo-python',
    'ios-qr-scanner',
    'md-qr-scanner',
    'ios-quote',
    'md-quote',
    'ios-radio',
    'md-radio',
    'ios-radio-button-off',
    'md-radio-button-off',
    'ios-radio-button-on',
    'md-radio-button-on',
    'ios-rainy',
    'md-rainy',
    'ios-recording',
    'md-recording',
    'logo-reddit',
    'ios-redo',
    'md-redo',
    'ios-refresh',
    'md-refresh',
    'ios-refresh-circle',
    'md-refresh-circle'
];

export default list;
