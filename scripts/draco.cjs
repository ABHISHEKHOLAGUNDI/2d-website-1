const fs = require('fs');
const path = require('path');

const dracoNodeModules = path.resolve(__dirname, '../node_modules/three/examples/jsm/libs/draco/gltf');
const dracoPublic = path.resolve(__dirname, '../public/draco');

if (!fs.existsSync(dracoPublic)) {
    fs.mkdirSync(dracoPublic, { recursive: true });
}

fs.cpSync(dracoNodeModules, dracoPublic, { recursive: true });
console.log('scripts/draco.cjs: Copied gltf draco files to public/draco');
