# webpack-quick-start
 无需配置的webpack打包项目

依赖

```powershell
npm install
```

运行

```powershell
npm run start
```

打包

```powershell
npm run build
```

./src/ts/ -> ./build/js/ -> ./dist

项目入口点`index.js`

实际入口点`src/ts/main.ts`

`ts`编译输出`build/js/`

修改`ts`文件后，由于尚未实现`tsc`的保存时编译，需要手动运行`tsc`命令