cd server
START "server" CMD /K "npm run start"
cd ..

timeout 15

cd app
assets-db.exe