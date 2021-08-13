module.exports = {
  docs: [
    'getting-started',
    {
      'Walkthrough Guides': [
        'guides/first-feature',
        'guides/logging-events',
        'guides/first-dynamic-config',
        'guides/first-experiment',
        'guides/first-holdout',
        'guides/using-environments',
        'guides/first-segment',
        'guides/abn-tests',
      ],
    },
    {
      'Feature Gates' :[
        'feature-gates/introduction',
        {
          'Working With': [
            'feature-gates/working-with',
            'feature-gates/create-new',
            'feature-gates/add-rule',
            'feature-gates/test-gate',
            {
              'Implement': [
                'feature-gates/implement',
                'feature-gates/implement/client',
                'feature-gates/implement/server',
                'feature-gates/implement/http-api',
              ],
            },
            'feature-gates/view-exposures',
          ],
        },
      ]
    },
    {
      'Statsig Console': [
        'console/overview',
        {
          'Access Management': [
            'console/accessManagement/overview',
            'console/accessManagement/sso',
          ]
        },
        {
          'Feature Gates': [
            'console/featureGates/introduction',
            'console/featureGates/rules',
          ],
        },
        'console/dynamicConfig',
        'console/segments',
        'console/pulse',
        'console/experimentsPlus',
        'console/holdouts',
        'console/metrics',
        'console/users',
        'console/ultrasound',
        'console/autotune',
      ],
    },
    {
      'Client SDKs': [
        'client/jsClientSDK',
        'client/reactSDK',
        'client/reactNativeSDK',
        'client/reactNativeExpoSDK',
        'client/iosClientSDK',
        'client/androidClientSDK',
        'client/dotnetSDK',
      ],
    },
    {
      'Server SDKs': [
        'server/nodejsServerSDK',
        'server/javaSdk',
        'server/dotnetSDK',
        'server/rubySDK',
        'server/golangSDK',
        'server/pythonSDK',
      ],
    },
    'http-api',
    {
      Integrations: ['integrations/data-connectors'],
    },
  ],
};
