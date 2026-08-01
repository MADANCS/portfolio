@echo off
set GIT="C:\Program Files\Git\bin\git.exe"

echo Initializing git repo...
%GIT% init

echo Setting up remote...
%GIT% remote remove origin 2>nul
%GIT% remote add origin https://github.com/MADANCS/portfolio.git

echo Configuring user...
%GIT% config user.email "csmadan868@gmail.com"
%GIT% config user.name "MADANCS"

echo Staging all files...
%GIT% add .

echo Committing...
%GIT% commit -m "Update portfolio: fix hero, resume links, remove AI references, add education"

echo Pushing to GitHub...
%GIT% branch -M main
%GIT% push -u origin main

echo Done!
pause
