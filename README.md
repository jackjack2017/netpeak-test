# netpeak-test

Использовались следующие технологии и программы: 
"node js": v8.11.4
"npm": v5.6.0
"@babel/core": "^7.1.0",
"autoprefixer": "^9.1.5",
"babel-loader": "^8.0.2",
"css-loader": "^1.0.0",
"extract-loader": "^3.0.0",
"file-loader": "^2.0.0",
"html-loader": "^0.5.5",
"mini-css-extract-plugin": "^0.4.3",
"node-sass": "^4.9.3",
"open-browser-webpack-plugin": "0.0.5",
"optimize-css-assets-webpack-plugin": "^5.0.1",
"postcss": "^7.0.2",
"postcss-loader": "^3.0.0",
"sass-loader": "^7.1.0",
"style-loader": "^0.23.0",
"webpack": "^4.19.1",
"webpack-cli": "^3.1.0",
"webpack-dev-server": "^3.1.8",
"php storm": "2018.2.2"

Процесс сборки: 
1. Для запуска devServer использовал Webpack 4: чтобы запустить проект нужно склонировать его из репозитория, выполнить npm install, 
затем выполнить npm start - в дефолтном браузере откроется реализованный сайт.Чтобы сгенерировать продакшн версию - необходимо выполнить 
npm run build (вданной реализации прописал только сжатие файла стилей)
2. Для реализации дополнительного функционала использовал npm пакеты: 
  1.1 Пакеты "mini-css-extract-plugin", "optimize-css-assets-webpack-plugin" для сжатия стилей
  2.2 Пакеты "autoprefixer", "postcss", "postcss-loader" - для автоматической подстановки вендорных префиксов
  2.3 Пакеты "sass-loader", "node-sass" - для возможности использования препроцессора sass
  2.4 Пакет "open-browser-webpack-plugin" - для автоматического запуска сервера в браузере
3. Для обработки графики использовался Photoshop
4. IDE - PhpStorm
