# vue-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


```dockerfile
# 删除已存在的dist目录（如果存在的话）
rm -rf /home/admin/app/dist

# 创建dist目录
mkdir -p /home/admin/app/dist

# 解压构建物
tar -zxvf /home/admin/app/package.tgz -C /home/admin/app/dist

# 删除nginx容器内部旧的资源
docker exec -it front-app rm -rf /usr/share/nginx/html/*

# 复制构建物到nginx容器
docker cp /home/admin/app/dist/. front-app:/usr/share/nginx/html

# 删除解压的构建物
rm -rf /home/admin/app/dist

# 重新运行nginx容器
docker restart front-app

```
