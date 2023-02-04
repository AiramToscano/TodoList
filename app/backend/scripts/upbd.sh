#!/bin/bash

echo 'Reiniciando o bd com as configuraçoes inicias'
npx prisma migrate reset --force

echo 'Subindo o servidor na porta 3001'
npm run dev
