export default {
    input: 'main.js',
    output: {
        file: 'bundle.js',
        format: 'iife',
        globals: {
            'lodash': '_'
        }
    },
    external: ['lodash']
}