import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    apiSidebar: [{ type: 'autogenerated', dirName: 'api' }],
    geyserSidebar: [
        'geyser/index',
        {
            type: 'category',
            label: 'Setup',
            link: {
                type: 'doc',
                id: 'geyser/setup'
            },
            items: [
                'geyser/supported-hosting-providers',
                'geyser/using-geyser-with-consoles',
                'geyser/playit-gg',
                'geyser/creating-a-startup-script'
            ]
        },
        {
            type: 'category',
            label: 'Common Issues',
            link: {
                type: 'doc',
                id: 'geyser/common-issues'
            },
            items: [
                'geyser/fixing-unable-to-connect-to-world'
            ]
        },
        {
            type: 'category',
            label: 'Configuring Geyser',
            link: {
                type: 'doc',
                id: 'geyser/understanding-the-config',
            },
            items: [
                'geyser/commands',
                'geyser/translations',
                'geyser/geyser-command-line-arguments-and-system-properties'
            ]
        },
        {
            type: 'category',
            label: 'FAQ',
            link: {
                type: 'doc',
                id: 'geyser/faq'
            },
            items: [
                'geyser/anticheat-compatibility',
                'geyser/current-limitations'
            ]
        },
        'geyser/custom-items',
        'geyser/custom-blocks',
        'geyser/custom-skulls',
        {
            type: 'category',
            label: 'Geyser API',
            link: {
                type: 'doc',
                id: 'geyser/api',
            },
            items: [
                'geyser/getting-started-with-the-api',
                'geyser/events',
                'geyser/forms'
            ],
        },
        'geyser/extensions',
        'geyser/global-api'
    ],

    floodgateSidebar: [
        'floodgate/setup',
        'floodgate/issues',
        'floodgate/faq',
        'floodgate/features',
        'floodgate/commands',
        'floodgate/api',
        'floodgate/linking'
    ],

    otherSidebar: [
        'other/geyseroptionalpack',
        'other/hurricane',
        'other/geyserconnect',
        'other/community-geyser-projects',
        'other/test-server',
        'other/developer-guide',
        'other/discord-bot-usage'
    ]
};

export default sidebars;
