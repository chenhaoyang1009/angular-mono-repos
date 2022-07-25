# Angular-Mono-Repos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## 运行服务

运行服务之前需要先运行`yarn run build-lib`，将项目的library库编译到dist文件夹里面。

之后便是正式运行服务，需要运行命令行`yarn run start1`或者`yarn run start2`。

根据`package.json`配置不同项目运行命令行。

导航到`http://localhost:4200/`。如果您更改任何源文件，应用程序将自动重新加载。

## 代码脚手架

运行 `ng generate component component-name` 去生成一个新组件. 你也可以使用 `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## 进一步帮助

要获得有关 Angular CLI 的更多帮助，请使用 `ng help` 或查看 [Angular CLI 概述和命令参考](https://angular.io/cli) 页面。

## 创建angular-mono-repos流程

1. 开启yarn workspaces`yarn config set workspaces-experimental true`

2. 创建一个angular项目`ng new angular-mono-repos --create-application=false`

3. 删除package-lock文件，之后需要将npm安装换成yarn

4. 项目添加lerna和使用lerna初始化项目`yarn add lerna -D` `lerna init --independent`

5. 设置lerna.json

   ```json
   {
     "$schema": "node_modules/lerna/schemas/lerna-schema.json",
     "useNx": true,
     "useWorkspaces": true, // 启用workspaces(npm在v7.0以上才有，node在v15.0以上)
     "version": "independent", // 每个项目都有单独的版本号
     "npmClient": "yarn" // 使用yarn提高安装包的速度
   }
   ```

6. 修改package.json文件配置workspaces

   ```json
   {
     "name": "angular-mono-repos",
     "version": "0.0.0",
     "scripts": {
       ...
     },
     "private": true, // 整体项目不需要公布出去
     "dependencies": {
         ......
     },
     "devDependencies": {
         ......
     },
     "workspaces": [
       "projects/" // 原本是`packages/`,但是换成projects是因为生成angular library
     ]
   }
   ```

7. 删除packages文件夹，生成angular library`ng generate library shared`

8. 进入projects文件夹，生成多个angular项目`ng generate app app-one` `ng g app app-two`

9. 设置package.json的scripts命令行

   ```json
   {
     "name": "angular-mono-repos",
     "version": "0.0.0",
     "scripts": {
       ......
       "build-lib": "lerna run build --scope=shared --stream", // 编译library
       "start1": "lerna run start --scope=app-one --stream", // 启动app-one
       "build1": "lerna run build --scope shared --scope app-one --stream",
       "watch1": "ng build --watch --configuration development",
       "test1": "lerna run test --scope=app-one,shared --stream",
       "start2": "lerna run start --scope=app-two --stream", // 启动 app-two
       "build2": "lerna run build --scope shared --scope app-two --stream",
       "watch2": "ng build --watch --configuration development",
       "test2": "lerna run test --scope=app-two,shared --stream"
     },
     "private": true,
     "dependencies": {
       ......
     },
     "devDependencies": {
       ......
     },
     "workspaces": [
       "projects/*"
     ]
   }
   ```

10. 现在需要编译angular library，修改library的package.json中的scripts,之后执行`yarn run build-lib`

    ```json
    {
      "name": "shared",
      "version": "0.0.1",
      "peerDependencies": {
        "@angular/common": "^14.1.0",
        "@angular/core": "^14.1.0",
        "angular-in-memory-web-api": "^0.14.0"
      },
      "dependencies": {
        "tslib": "^2.3.0"
      },
      "scripts": {
        "build": "ng-packagr" // 执行命令行之前需要修改library中的package.json
      }
    }
    ```

11. 编译好angular library之后通过lerna将打包好的包，引入其余项目中`lerna add shared`

12. 之后可以在其余别的项目里，共用组件和服务，只需要在app.module.ts引入即可。

13. 每次修改angular library都需要重新打包。

14. 之后就可以通过`yarn run start1`或者`lerna run start --scope=app-one --stream`来运行项目。