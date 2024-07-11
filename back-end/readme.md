-------------for typescript use in existing node project.------------------
1-npm install --save -dev @typescript @types/node @types/express ts-node.
2-add "start": "nodemon --watch src --exec ts-node src/index.ts" in pakage.json----for nodemone.
3-add tsconfig.json.
4-add src-complied folder for js file after compiletion.
5-change name of src/index.js to index.ts and type npx tsc for typescript compiler.
6-npm run start.


----------------- "compilerOptions": { "target": "es6",
 with this type in tsconfig.json file you can use import instead require.
 -other wise use type:'module' in pakage.json file for js 