#!/bin/bash

for VAR in css data index.html js
do
  scp -r ~/Brain/projects/bachelor/Lernprogramm/$VAR s86221@ilux150.informatik.htw-dresden.de:/home/rex/fi3/ia23/s86221/public_html/Lernprogramm
done
