#!/bin/bash

echo 'Reiniciando o bd com as configuraçoes inicias'
npx prisma migrate reset --force