FROM node
ADD . /code
WORKDIR /code
RUN npm --registry https://registry.npm.taobao.org install
CMD ["npm", "start"]
