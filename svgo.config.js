module.exports = {
    plugins: [
        {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
        },
        'removeXMLNS',
        {
            name: 'prefixIds',
            params: {
                prefix: function (node, { path }) {
                    const pathParts = path.split('/');
                    const fileName = pathParts[pathParts.length - 1];
                    const fileNameParts = fileName.split('.');
                    const fileNameWithoutExtension = fileNameParts[0];
                    return 'ag-' + fileNameWithoutExtension;
                },
                delim: '-',
            }
        },
        {
            name: 'removeAttrs',
            params: {
                attrs: '(data-name)',
            }
        },
    ],
  };