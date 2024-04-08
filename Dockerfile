# 使用node18
FROM node:18 AS build

# 设置工作目录
WORKDIR /app

# 拷贝整个项目目录到容器中
COPY . .

RUN  node -v

RUN npm install yarn

# 安装依赖
RUN yarn install

# 打包
RUN yarn build

# 使用Nginx
FROM nginx:latest AS production

# 复制打包后的文件到Nginx目录
COPY --from=build /app/dist /usr/share/nginx/html

# 本地default.conf替换nginx的default.conf
COPY default.conf /etc/nginx/conf.d

# 暴露端口
EXPOSE 80

# 设置容器启动时运行Nginx
CMD ["nginx", "-g", "daemon off;"]
